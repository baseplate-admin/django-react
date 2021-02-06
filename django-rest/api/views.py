from .models import Bitrate, Poll, Url, YoutubeDownloader
from .serializers import (
    BitrateSerializer,
    PollSerializer,
    UrlSerializer,
    YoutubeDownloadSerializer,
)
from django.shortcuts import redirect
from django.http import HttpResponse
from django.db.models import F

from rest_framework.response import Response
from rest_framework.decorators import api_view

import youtube_dl
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


class _Bitrate:
    def __init__(self):
        self.minute = 0
        self.hour = 0
        self.size = 0
        self.episodes = 0
        self.seconds = 0
        self.bitrate = 0

    def hour_to_seconds(self):
        self.seconds += self.hour * 3600
        return self.seconds

    def minute_to_seconds(self):
        self.seconds += self.minute * 60
        return self.seconds

    def calculate(self):
        filesize = (float(self.size) / int(self.episodes)) * (1024 * 1024) * 8
        time = self.seconds
        self.bitrate = filesize / time
        return self.bitrate

    def input(self, minute, hour, size, episodes, seconds):
        self.minute = float(minute)
        self.hour = float(hour)
        self.size = float(size)
        self.episodes = float(episodes)
        self.seconds = float(seconds)
        self.hour_to_seconds()
        self.minute_to_seconds()
        self.calculate()
        return self.bitrate


def get_ip(request):
    x_forwarded_for = request.META.get("HTTP_X_FORWARDED_FOR")
    if x_forwarded_for:
        ip = x_forwarded_for.split(",")[0]
    else:
        ip = request.META.get("REMOTE_ADDR")
    import socket

    try:
        socket.inet_aton(ip)
        ip_valid = True
    except socket.error:
        ip_valid = False
    if bool(ip_valid):
        return ip


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
        from sys import platform

        if platform == "win32":
            FFMpegDownloader()._check_if_file_exists()
        else:
            pass  # Will add ffmpeg check later
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
            title = info_dict["title"]
            media_dir = os.path.abspath(os.path.realpath(f"media/{time}/"))
            ydl.download([url])
        media_file_location = None
        media_dir_files = os.listdir(media_dir)
        for file in media_dir_files:
            media_file_location = f"{media_dir}//{file}"
        short_url = ShortUrl()._youtube_short_link()
        request.data["time"] = time
        request.data["title"] = title
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


@api_view(["GET", "POST"])
def bitrate(request):
    if request.method == "POST":
        import datetime

        datetime_object = str(datetime.datetime.now())

        minute = request.data["minute"]
        hour = request.data["hour"]
        seconds = request.data["seconds"]
        size = request.data["size"]
        episodes = request.data["episode"]
        __bitrate = _Bitrate().input(minute, hour, size, episodes, seconds)
        request.data["bitrate"] = __bitrate
        request.data["time"] = datetime_object
        serializer = BitrateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(data={"bitrate": float(__bitrate)})
        return Response(serializer.errors)
    else:
        data = Bitrate.objects.all()
        serializer = BitrateSerializer(data, many=True)
        return Response(serializer.data)


@api_view(["GET", "POST"])
def polls_vote(request, pk):
    if request.method == "POST":
        poll = Poll.objects.get(id=pk)
        question = request.data["option"]

        if question == "option_one":

            poll.option_1_count = F("option_1_count") + 1
            poll.save()

        elif question == "option_two":

            poll.option_2_count = F("option_2_count") + 1
            poll.save()

        elif question == "option_three":

            poll.option_3_count = F("option_3_count") + 1
            poll.save()

        elif question == "option_four":

            poll.option_4_count = F("option_4_count") + 1
            poll.save()

        poll_all = Poll.objects.filter(id=pk)

        serializer = PollSerializer(poll_all, many=True)
        return Response(serializer.data)
    else:
        poll = Poll.objects.get(id=pk)
        serializer = PollSerializer(poll)
        return Response(serializer.data)


@api_view(["GET", "POST"])
def polls(request):
    if request.method == "POST":
        import datetime

        datetime_object = str(datetime.datetime.now())

        request.data["option_1_count"] = 0
        request.data["option_2_count"] = 0
        request.data["option_3_count"] = 0
        request.data["option_4_count"] = 0
        request.data["time"] = datetime_object

        serializer = PollSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    else:
        poll = Poll.objects.all()
        serializer = PollSerializer(poll, many=True)
        return Response(serializer.data)
