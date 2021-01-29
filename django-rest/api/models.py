from __future__ import unicode_literals
from django.db import models

# Create your models here.


class Url(models.Model):
    long = models.CharField(max_length=100)
    short = models.CharField(unique=True, max_length=25)
    combinations = models.IntegerField(default=100000)
    time = models.CharField(max_length=25)

    def __str__(self):
        return self.id


class YoutubeDownloader(models.Model):
    title = models.CharField(max_length=200)
    url = models.URLField()
    file_location = models.CharField(max_length=200)
    time = models.CharField(max_length=100)
    short_url = models.CharField(max_length=10)

    def __str__(self):
        return self.id


class Bitrate(models.Model):
    hour = models.IntegerField()
    minute = models.IntegerField()
    second = models.IntegerField()
    size = models.DecimalField(decimal_places=2, max_digits=6)
    episode = models.IntegerField(default="-")
    time = models.CharField(max_length=200, unique=True, default="-")
    bitrate = models.IntegerField(default="--")

    def __str__(self):
        return self.id
