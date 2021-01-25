from rest_framework import serializers
from .models import Url
import string
import random

# Define your Serializer here.





class UrlSerializer(serializers.Serializer):
    long = serializers.CharField(max_length=1000)
    time = serializers.CharField(default="-", max_length=25)
