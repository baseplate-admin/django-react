from .models import Url, YoutubeDownloader
from .serializers import UrlSerializer, YoutubeDownloadSerializer
from django.shortcuts import redirect
from django.http import HttpResponse
import youtube_dl

from rest_framework.response import Response
from rest_framework.decorators import api_view

import time
import os

# Create your views here.
class ShortUrl:
    def __init__(self):
        self.short_letter = self._short_letter()

    def _short_letter(self):
        import string
        import random

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


class FFMpegDownloader:
    def __init__(self):

        self.ffmpeg_build_url = "https://github.com/baseplate-admin/django-react/blob/main/ffmpeg.zip?raw=true"
        self.ffmpeg_zip_bin = ""
        self.directory = f"{os.getcwd()}"
        self.filename = "ffmpeg.zip"

    def _download(self):
        print("Downloading using requests")
        import requests

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
            time.sleep(1)

    def _check_if_file_exists(self):
        self.does_path_exists = os.path.exists(f"{self.directory}/ffmpeg.zip")
        self.does_exe_exists = os.path.exists(f"{self.directory}/ffmpeg.exe")
        if self.does_exe_exists:
            pass
        elif not self.does_exe_exists:
            if self.does_path_exists:
                self._extract_files()
            else:
                self._download()
                self._write_to_file()
                self._extract_files()
        else:
            self._download()
            self._write_to_file()
            self._extract_files()


@api_view(["GET", "POST"])
def url(request):
    if request.method == "POST":
        short = ShortUrl().logic()
        request.data["short"] = short
        serializer = UrlSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(data={"short": short})
        return Response(serializer.errors)
    else:
        data = Url.objects.all()
        serializer = UrlSerializer(data, many=True)
        return Response(serializer.data)


def get_long_url(request, short_url):
    long = Url.objects.get(short=short_url).long
    return redirect(long)


@api_view(["GET", "POST"])
def youtube(request):
    if request.method == "POST":
        from datetime import date
        from datetime import datetime

        FFMpegDownloader()._check_if_file_exists()
        obj_now = datetime.now()
        hour = obj_now.hour
        minute = obj_now.minute
        second = obj_now.second
        microsecond = obj_now.microsecond
        year = obj_now.year
        month = obj_now.month
        date = date.today()
        time = f"{date}-{month}-{year}--{hour}-{minute}-{second}-{microsecond}"
        url = request.data["url"]
        bitrate = request.data["bitrate"]
        media_dir = os.path.abspath(os.path.realpath(f"media/{time}/%(title)s.%(ext)s"))
        try:
            ydl_options = {
                "format": "bestaudio/best",
                "outtmpl": media_dir,
                "postprocessors": [
                    {
                        "key": "FFmpegExtractAudio",
                        "preferredcodec": "mp3",
                        "preferredquality": f"{bitrate}",
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
                # if "." in title:
                #     title = title.replace(".", "")
            ydl.download([url])

        current_dir = os.getcwd()
        media_file_location = f"{current_dir}/media/{time}/{title}.mp3"
        short_url = ShortUrl()._youtube_short_link()
        request.data["time"] = time
        request.data["title"] = title_unchanged
        request.data["url"] = url
        request.data["short_url"] = short_url
        request.data["file_location"] = media_file_location
        serializer = YoutubeDownloadSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(data={"short": short_url, "title": str(title)})
        return Response(serializer.errors)
    else:
        data = YoutubeDownloader.objects.all()
        serializer = YoutubeDownloadSerializer(data, many=True)
        return Response(serializer.data)


def youtube_get_file(request, short_url):
    youtube_download_location = YoutubeDownloader.objects.get(
        short_url=short_url
    ).file_location
    youtube_download_name = (
        f"{YoutubeDownloader.objects.get(short_url=short_url).title}.mp3"
    )
    with open(youtube_download_location, "rb") as file:
        response = HttpResponse(file.read(), content_type="audio/mpeg")
        response["Content-Disposition"] = "attachment; filename={}".format(
            youtube_download_name
        )
        return response

