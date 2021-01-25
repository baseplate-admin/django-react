from .models import Url
from .serializers import UrlSerializer
from django.shortcuts import redirect
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http import JsonResponse
import string
import random
from django.shortcuts import render

# Create your views here.


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


def get_long_url(request, short_url):
    long = Url.objects.get(short=short_url).long
    return redirect(long)


@csrf_exempt
def post_data_url(request):
    if request.method == "POST":
        data = JSONParser().parse(request)
        serializer = UrlSerializer(data=data)
        if serializer.is_valid():
            long = serializer.data["long"]
            short = ShortUrl().logic()
            time = serializer.data["time"]
            Url.objects.create(long=long, short=short, time=time)
            return JsonResponse({"short": short}, status=201)
        return JsonResponse(serializer.errors, status=400)


def index(request):
    return render(request, "index.html")

