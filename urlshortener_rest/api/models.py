from __future__ import unicode_literals
from django.db import models

# Create your models here.


class Url(models.Model):
    long = models.CharField(max_length=100)
    short = models.CharField(unique=True, max_length=25)
    time = models.CharField(max_length=25)

    def __str__(self):
        return self.long
