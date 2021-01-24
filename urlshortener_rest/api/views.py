from .models import Url
from .serializers import UrlSerializer
from rest_framework import viewsets
from django.shortcuts import redirect

# Create your views here.


class UrlViewset(viewsets.ModelViewSet):
    queryset = Url.objects.all()
    serializer_class = UrlSerializer


def get_long_url(request, short_url):
    long = Url.objects.get(short=short_url).long
    return redirect(long)
