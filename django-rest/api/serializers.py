from rest_framework import serializers
from .models import Url

# Define your Serializer here.


class UrlSerializer(serializers.Serializer):
    long = serializers.CharField(max_length=1000)
    time = serializers.CharField(default="-", max_length=25)


class YoutubeDownloadSerializer(serializers.Serializer):
    url = serializers.URLField()
