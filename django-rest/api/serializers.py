from rest_framework import serializers
from .models import Url

# Define your Serializer here.


class UrlSerializer(serializers.Serializer):
    long = serializers.CharField(max_length=1000)
    time = serializers.CharField(default="-", max_length=25)


class YoutubeDownloadSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=200)
    url = serializers.URLField()
    file_location = serializers.CharField(max_length=200)
    time = serializers.CharField(max_length=100, default=None)
