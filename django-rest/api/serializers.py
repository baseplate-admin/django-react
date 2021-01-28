from rest_framework import serializers
from .models import Url, YoutubeDownloader

# Define your Serializer here.


class UrlSerializer(serializers.ModelSerializer):
    class Meta:
        model = Url
        fields = "__all__"


class YoutubeDownloadSerializer(serializers.ModelSerializer):
    class Meta:
        model = YoutubeDownloader
        fields = "__all__"

