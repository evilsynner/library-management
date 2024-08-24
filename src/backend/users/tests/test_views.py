from django.urls import reverse_lazy
from rest_framework import status
from rest_framework.test import APITestCase
from users.models import User

class UserRegistrationTests(APITestCase):
    def test_register_user_with_valid_data(self):
        """

        """
        url = reverse_lazy("users:registration_view")
        data = {
            "email": "email@domain.com",
            "username": "theuser",
            "password": "thesupersecretpassword",
        }
        response = self.client.post(path=url, data=data, format="json")
        self.assertEqual(first=response.status_code, second=status.HTTP_201_CREATED)
