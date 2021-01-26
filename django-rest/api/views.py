from rest_framework.serializers import Serializer
from .models import Url, YoutubeDownloader
from .serializers import UrlSerializer, YoutubeDownloadSerializer
from django.shortcuts import redirect
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http import JsonResponse
from django.http import HttpResponse
import string
import random
from django.shortcuts import render
import youtube_dl
import os

# Create your views here.


class FFMpegDownloader:
    def __init__(self):

        self.ffmpeg_build_url = "https://raw.githubusercontent.com/baseplate-admin/discord-bot/master/discord.zip"
        self.ffmpeg_zip_bin = ""
        self.directory = f"{os.getcwd()}"
        self.filename = "ffmpeg.zip"

    def _download(self):
        import requests

        print("Downloading using requests")

        self.ffmpeg_zip_bin = requests.get(self.ffmpeg_build_url, allow_redirects=True)
        return self.ffmpeg_zip_bin

    def _write_to_file(self):
        print("Writing to file")
        with open(self.filename, "wb") as f:
            f.write(self.ffmpeg_zip_bin.content)

    def _extract_files(self):
        from zipfile import ZipFile

        with ZipFile(f"{os.getcwd()}/ffmpeg.zip") as zip:
            zip.printdir()
            print("Extracting all the files now...")
            zip.extractall()
            print("Done!")
        self._move_file_to_current_dir()

    def _move_file_to_current_dir(self):
        os.rename(f"{self.directory}/ffmpeg/ffmpeg.exe", f"{self.directory}/ffmpeg.exe")

    def _check_if_file_exists(self):
        self.does_path_exists = os.path.exists(f"{self.directory}/ffmpeg.zip")
        if self.does_path_exists:
            self._extract_files()
        else:
            self._download()
            self._write_to_file()


class ShortUrl:
    def __init__(self):
        self.short_letter = self._short_letter()

    def _short_letter(self):
        letters = string.ascii_lowercase + string.ascii_uppercase
        rand_letters = random.choices(letters, k=5)
        rand_letters = "".join(rand_letters)
        self.short_letter = rand_letters
        return self.short_letter

    def _does_short_exists(self):
        is_true_or_false = Url.objects.filter(short=self.short_letter).exists()
        if is_true_or_false:
            return True
        elif not is_true_or_false:
            return False

    def logic(self):
        if not self._does_short_exists():
            return self.short_letter
        elif self._does_short_exists():
            self._short_letter()

    def _youtube_short_link(self):
        is_true_or_false = YoutubeDownloader.objects.filter(
            short_url=self.short_letter
        ).exists()
        if not is_true_or_false:
            return self.short_letter
        else:
            self._youtube_short_link()


def get_long_url(request, short_url):
    long = Url.objects.get(short=short_url).long
    return redirect(long)


@csrf_exempt
def post_data_url(request):
    if request.method == "POST":
        data = JSONParser().parse(request)
        serializer = UrlSerializer(data=data)
        if serializer.is_valid():
            long = serializer.data["long"]
            short = ShortUrl().logic()
            time = serializer.data["time"]
            Url.objects.create(long=long, short=short, time=time)
            return JsonResponse({"short": short}, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def post_data_youtube(request):
    if request.method == "POST":
        data = JSONParser().parse(request)
        serializer = YoutubeDownloadSerializer(data=data)
        if serializer.is_valid():
            time = serializer.data["time"]
            url = serializer.data["url"]
            media_dir = os.path.abspath(
                os.path.realpath(f"media/{time}/%(title)s.%(ext)s")
            )
            try:
                ydl_options = {
                    "format": "bestaudio/best",
                    "outtmpl": media_dir,
                    "postprocessors": [
                        {
                            "key": "FFmpegExtractAudio",
                            "preferredcodec": "mp3",
                            "preferredquality": "320",
                        }
                    ],
                }
            except:
                print("FFMpeg not installed. Downloading it now.")
                FFMpegDownloader()._check_if_file_exists()
                ydl_options = {
                    "format": "bestaudio/best",
                    "outtmpl": media_dir,
                    "postprocessors": [
                        {
                            "key": "FFmpegExtractAudio",
                            "preferredcodec": "mp3",
                            "preferredquality": "320",
                        }
                    ],
                }
            with youtube_dl.YoutubeDL(ydl_options) as ydl:
                info_dict = ydl.extract_info(url, download=False)  # URL = FORM
                ydl.prepare_filename(info_dict)
                title_unchanged = info_dict["title"]
                title = info_dict["title"]
                unsupported_characters = ["<", ">", ":", '"', "/", "\\", "|", "*"]
                for characters in unsupported_characters:
                    if characters in title:
                        title = title.replace(characters, "_")
                ydl.download([url])

            current_dir = os.getcwd()
            media_file_location = f"{current_dir}/media/{time}/{title}.mp3"
            short_url = ShortUrl()._youtube_short_link()
            YoutubeDownloader.objects.create(
                time=time,
                title=title_unchanged,
                url=url,
                short_url=short_url,
                file_location=media_file_location,
            )
            return JsonResponse({"short": short_url}, status=201)
        return JsonResponse(serializer.errors, status=400)
    else:
        return JsonResponse(status=500)


def youtube_get_file(request, short_url):
    youtube_download_location = YoutubeDownloader.objects.get(
        short_url=short_url
    ).file_location
    youtube_download_name = (
        f"{YoutubeDownloader.objects.get(short_url=short_url).title}.mp3"
    )
    with open(youtube_download_location, "rb") as file:
        response = HttpResponse(file.read(), content_type="audio/mpeg")
        print(youtube_download_name)
        response["Content-Disposition"] = "attachment; filename={}".format(
            youtube_download_name
        )
        return response


def index(request):
    return render(request, "index.html")

