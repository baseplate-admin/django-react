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
    hour = models.CharField(max_length=100)
    minute = models.CharField(max_length=100)
    seconds = models.CharField(max_length=100)
    size = models.CharField(max_length=6)
    episode = models.CharField(max_length=100)
    time = models.CharField(max_length=200, unique=True, default="-")
    bitrate = models.CharField(max_length=100)

    def __str__(self):
        return self.id


class Poll(models.Model):
    question = models.CharField(max_length=200)
    option_1 = models.CharField(max_length=100)
    option_2 = models.CharField(max_length=100)
    option_3 = models.CharField(max_length=100)
    option_4 = models.CharField(max_length=100)
    option_1_count = models.IntegerField(default=0)
    option_2_count = models.IntegerField(default=0)
    option_3_count = models.IntegerField(default=0)
    option_4_count = models.IntegerField(default=0)
    time = models.CharField(max_length=28)

    def __str__(self):
        return self.question


# class IpTable(models.Model):
#     entry_id = models.IntegerField()
#     ip = models.CharField(max_length=12)
