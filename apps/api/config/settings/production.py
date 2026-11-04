from django.core.exceptions import ImproperlyConfigured
from .base import *
DEBUG = False
SECRET_KEY = os.environ["DJANGO_SECRET_KEY"]
if len(SECRET_KEY) < 50 or SECRET_KEY.startswith("local-"):
    raise ImproperlyConfigured("Use a strong production secret.")
if not os.environ.get("DATABASE_URL", "").startswith(("postgresql://", "postgres://")):
    raise ImproperlyConfigured("Production requires PostgreSQL.")
ALLOWED_HOSTS = [h.strip() for h in os.environ["DJANGO_ALLOWED_HOSTS"].split(",") if h.strip()]
CSRF_TRUSTED_ORIGINS = [h.strip() for h in os.environ["CSRF_TRUSTED_ORIGINS"].split(",") if h.strip()]
if not ALLOWED_HOSTS or "*" in ALLOWED_HOSTS:
    raise ImproperlyConfigured("Explicit production hosts required.")
SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
SECURE_HSTS_SECONDS = 31536000
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_PRELOAD = True
SECURE_CONTENT_TYPE_NOSNIFF = True
X_FRAME_OPTIONS = "DENY"
STORAGES["staticfiles"]["BACKEND"] = "django.contrib.staticfiles.storage.ManifestStaticFilesStorage"
