from django.shortcuts import render
from .models import Url
from .serializers import UrlSerializer
from rest_framework import viewsets

# Create your views here.


class UrlViewset(viewsets.ModelViewSet):
    queryset = Url.objects.all()
    serializer_class = UrlSerializer

