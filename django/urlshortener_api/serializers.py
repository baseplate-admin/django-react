from .serializers import Url
from rest_framework import serializers


class UrlSerializers(serializers.Serializers):
    long = serializers.CharField(unique=True, max_length=1000)
    short = serializers.CharField(unique=True, max_length=25)
    time = serializers.CharField(default="-", max_length=2000)

    def create(self, validated_data):
        return Url.objects.create(validated_data)

    def update(self, instance, validated_data):
        instance.long = validated_data.get("long", instance.long)
        instance.short = validated_data.get("short", instance.short)
        instance.time = validated_data.get("time", instance.time)
