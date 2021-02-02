from django.urls import path
from django.urls.conf import include
from . import views
from django.views.generic import TemplateView


# Wiring Up API
urlpatterns = [
    path("front/url/", TemplateView.as_view(template_name="index.html")),
    path("front/ydl/", TemplateView.as_view(template_name="index.html")),
    path("front/bitrate", TemplateView.as_view(template_name="index.html")),
    path("front/poll/vote/<slug>/", TemplateView.as_view(template_name="index.html")),
    path("front/poll/create/", TemplateView.as_view(template_name="index.html")),
    path("front/poll/<slug>/", TemplateView.as_view(template_name="index.html")),
    path("url/<short_url>/", views.get_long_url, name="Get Full Site"),
    path("youtube/<short_url>/", views.youtube_get_file, name="Youtube File"),
    path("api/v1/url/", views.url),
    path("api/v1/youtube/", views.youtube, name="posts youtube data to rest api",),
    path("api/v1/bitrate/", views.bitrate, name="Bitrate"),
    path("api/v1/poll/", views.polls, name="Shows all polls"),
    path(
        "api/v1/poll/<pk>/",
        views.polls_vote,
        name="Shows all detailed Data + Poll Vote",
    ),
    # path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
]
