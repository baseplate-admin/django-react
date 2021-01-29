from django.urls import path
from django.urls.conf import include
from . import views
from django.views.generic import TemplateView


# Wiring Up API
urlpatterns = [
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
    path("front/url/", TemplateView.as_view(template_name="index.html")),
    path("front/ydl/", TemplateView.as_view(template_name="index.html")),
    path("api/v1/url/", views.url),
    path("api/v1/youtube/", views.youtube, name="posts youtube data to rest api",),
    path("api/v1/bitrate/", views.bitrate, name="Bitrate"),
    path("url/<short_url>/", views.get_long_url, name="Get Full Site"),
    path("youtube/<short_url>/", views.youtube_get_file, name="Youtube File"),
]
