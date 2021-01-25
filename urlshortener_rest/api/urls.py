from django.urls import include, path
from rest_framework import routers, urlpatterns
from . import views

router = routers.DefaultRouter()
router.register(r"url-short", views.UrlViewset)

# Wiring Up API

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("url/<short_url>/", views.get_long_url, name="Get Full Site"),
]
