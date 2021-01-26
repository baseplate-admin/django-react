from django.urls import path
from . import views
from django.conf.urls import url

# Wiring Up API

urlpatterns = [
    path("api/v1/url/", views.post_data_url, name="posts data to rest api"),
    path("url/<short_url>/", views.get_long_url, name="Get Full Site"),
    path("youtube/<short_url>/", views.youtube_get_file, name="Youtube File"),
    url(r"^(?:.*)/?$", views.index, name="React Index"),
]
