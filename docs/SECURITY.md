# Security status
Development only. The organization-scoped permission system, MFA, upload scanning, CSP, throttling, audit trail, and production storage remain required before sensitive records are admitted. Do not create real donor or beneficiary records in this scaffold.

DRF denies anonymous access by default. CMS requires login. Development binds explicit hosts. Production settings require a secret, explicit hosts, trusted CSRF origins, and a PostgreSQL URL; secure cookies, HTTPS redirects, and HSTS are enabled. These settings alone do not establish production readiness. HSTS scope must be reviewed against the final domain and all subdomains.

Threat model priorities: cross-foundation disclosure; administrator takeover; forged/replayed payment events; malicious uploads; beneficiary privacy; spam; secret leakage. Map controls and evidence to ASVS 5.0 and OWASP Top 10:2025 during hardening. Never trust client organization filters. Scope reads, writes, exports, relations, search, and jobs. Test both directions of isolation.
