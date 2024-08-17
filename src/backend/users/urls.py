from django.urls import path
from .views import RegistrationView

app_name = "users"

urlpatterns = [
    path(route="registration/", view=RegistrationView.as_view(), name="registration_view"),
]
