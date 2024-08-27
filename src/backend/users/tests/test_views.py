from unittest import getTestCaseNames
from django.urls import reverse_lazy
from rest_framework import status
from rest_framework.test import APITestCase
from django.contrib.auth import get_user, get_user_model

class UserRegistrationTests(APITestCase):
    def setUp(self):
        self.url = reverse_lazy("users:registration_view")
        self.user_model = get_user_model()

    def test_register_user_with_valid_data(self):
        """
            Registration test with valid data
        """
        data = {
            "email": "email@domain.com",
            "username": "theuser",
            "password": "thesupersecretpassword",
        }
        response = self.client.post(path=self.url, data=data, format="json")
        self.assertEqual(first=response.status_code, second=status.HTTP_201_CREATED)
        self.assertEqual(first=self.user_model.objects.count(), second=1)
        self.assertEqual(first=self.user_model.objects.get().username, second="theuser")

    def test_register_user_with_missing_field(self):
        """
            Registration test with missing field
        """
        data = {
            "email": "email@domain.com",
            "username": "theuser",
        }
        response = self.client.post(path=self.url, data=data, format="json")
        self.assertEqual(first=response.status_code, second=status.HTTP_400_BAD_REQUEST)
        self.assertIn(member="password", container=response.data)

    def test_register_user_with_invalid_email(self):
        """
            Registration test with invalid email field
        """
        data = {
            "email": "invalid-email",
            "username": "theuser",
            "password": "thesupersecretpassword"
        }
        response = self.client.post(path=self.url, data=data, format="json")
        self.assertEqual(first=response.status_code, second=status.HTTP_400_BAD_REQUEST)
        self.assertIn(member="email", container=response.data)

    def test_register_user_with_existing_username(self):
        """
            Registration test with existing username
        """
        self.user_model.objects.create(
            email="email@domain.com",
            username="theuser72348",
            password="thepassword"
        )
        data = {
            "email": "email2test@library.com",
            "username": "theuser72348",
            "password": "Th3Sup3rS3cr3tP4ssw0rd"
        }
        response = self.client.post(path=self.url, data=data, format="json")
        self.assertEqual(first=response.status_code, second=status.HTTP_400_BAD_REQUEST)
        self.assertIn(member="username", container=response.data)
