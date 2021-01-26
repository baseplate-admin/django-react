from django.urls import path
from . import views
from django.views.generic import TemplateView

# Wiring Up API

urlpatterns = [
    path("front/url/", TemplateView.as_view(template_name="index.html")),
    path("front/ydl/", TemplateView.as_view(template_name="index.html")),
    path("api/v1/url/", views.post_data_url, name="posts url data to rest api"),
    path(
        "api/v1/youtube/",
        views.post_data_youtube,
        name="posts youtube data to rest api",
    ),
    path("url/<short_url>/", views.get_long_url, name="Get Full Site"),
    path("youtube/<short_url>/", views.youtube_get_file, name="Youtube File"),
]
