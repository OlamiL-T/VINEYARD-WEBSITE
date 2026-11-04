# Staging uses the same security requirements as production.
# Protect staging at ingress; application noindex alone is not access control.
from .production import *
