from .base import *
DEBUG = True
SECRET_KEY = os.environ.get("DJANGO_SECRET_KEY", "local-development-only-not-for-production")
ALLOWED_HOSTS = ["localhost", "127.0.0.1", "[::1]", "testserver"]
EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"
