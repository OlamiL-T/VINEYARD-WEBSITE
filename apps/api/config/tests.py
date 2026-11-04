from unittest.mock import patch
from django.test import TestCase

class FoundationChecks(TestCase):
    def test_database_health(self):
        self.assertEqual(self.client.get("/api/health/").json(), {"status": "ok", "service": "api"})

    def test_database_failure_is_private(self):
        with patch("config.health.connection.cursor", side_effect=RuntimeError("private credentials")):
            response = self.client.get("/api/health/")
        self.assertEqual(response.status_code, 503)
        self.assertNotContains(response, "private credentials", status_code=503)

    def test_cms_requires_login(self):
        response = self.client.get("/admin/")
        self.assertEqual(response.status_code, 302)
        self.assertIn("/login/", response.url)
