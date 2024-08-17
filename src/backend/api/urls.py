from django.urls import path, include
from .views import greet

app_name = "api"
urlpatterns = [
    path('', greet, name="api-greet-view"),
    path("users/", include("users.urls", namespace="users"))
]
