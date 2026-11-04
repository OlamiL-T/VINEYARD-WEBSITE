# Deployment status
No public deployment is authorized or configured. Compose currently runs PostgreSQL for local development only. Web/API run on the host. No production container build is claimed.

Before staging: create reviewed non-root images, separate environment settings, managed PostgreSQL, private/public S3 storage, HTTPS ingress, transactional email, secret-manager bindings, MFA, monitoring, and release migrations. Configure static serving for Wagtail. Do not run production using development settings. Resolve trusted proxy headers with the actual ingress rather than trusting arbitrary forwarded headers.

Require encrypted backups, independently stored recovery material, a successful restoration exercise, agreed RPO/RTO, rollback procedures, and explicit authorization before launch. Separate live payments require organizational and merchant approval.
