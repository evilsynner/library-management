from django.urls import path
from .views import greet

app_name = "api"
urlpatterns = [
    path('', greet, name="api-greet-view"),
]
