from django.urls import include, path
from . import views


# Wiring Up API

urlpatterns = [
    path('api/v1/url/',views.post_data, name='posts data to rest api'),
    path("url/<short_url>/", views.get_long_url, name="Get Full Site"),
]
