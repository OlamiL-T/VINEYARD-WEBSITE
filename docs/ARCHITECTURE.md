# Architecture
Next.js renders the public frontend. Django/DRF and Wagtail own application data and editorial workflows; PostgreSQL is the development and production database. DRF defaults to authenticated session access. No business API exists yet.

## Approved direction, not yet implemented
Organization, Membership, Program, Project, ContentOrganization, ImpactMetric, MediaAsset, PaymentConfiguration, Donation, PaymentAttempt, WebhookEvent, Refund, Receipt, Submission, AuditEvent, OutboxMessage. Donations belong to exactly one organization. Joint content uses explicit roles. Separate payment credentials and financial authorization per foundation.

Planned routes: /, /foundations, /foundations/international, /foundations/hope, /foundations/[foundation]/programs, /programs, /programs/[slug], /projects, /projects/[slug], /impact, /stories, /stories/[slug], /news, /news/[slug], /events, /events/[slug], /get-involved, /volunteer, /partner, /donate, /contact, /transparency, /privacy, /terms, /accessibility.

Next milestones: design system; approved public pages; organization-aware CMS and permissions; sandbox payments/forms; security/SEO/accessibility; tests; deployment preparation. Only Phase 2 scaffolding is present.
