from rest_framework import serializers
from .models import Url
import string
import random

# Define your Serializer here.


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


class UrlSerializer(serializers.Serializer):
    long = serializers.CharField(max_length=1000)
    time = serializers.CharField(default="-", max_length=25)

    def create(self, validated_data):
        # return Comment(**validated_data)
        print(validated_data)
        short = ShortUrl().logic()
        long = validated_data["long"]
        time = validated_data["time"]
        Url.objects.create(short=short, long=long, time=time)
        return Url(short=short, long=long, time=time)
