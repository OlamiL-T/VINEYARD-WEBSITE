# Testing
Run the README validation commands against the local PostgreSQL service. The current backend tests exercise database health, safe database-error responses, and CMS login protection. The Next.js build and TypeScript checks validate the initial frontend scaffold.

Not yet covered: organization isolation, payment verification/idempotency, forms, browser interactions, accessibility audits, SEO completeness, vulnerability scanning, backup restore, or performance. These require later-phase implementation. Lighthouse >=90 and LCP <=2.5s, INP <=200ms, CLS <=0.1 remain unmeasured targets.

CI runs dependency installation, build/type checks, Django system checks, and the foundation tests with PostgreSQL. It does not deploy.

## Current-instance results — 2026-11-04
- Next.js production build and TypeScript check passed.
- Django system check passed; migration drift check found no changes.
- PostgreSQL migrations completed; a second run applied no migrations.
- Three backend tests passed against PostgreSQL.
- HTTP: web and database-backed API health returned 200; development landing included both foundation names and noindex; CMS redirected to a functional login form.
- Hosted CI has not run. Public deployment, performance and accessibility measurements have not run.

## Design system checks
After installing dependencies:
```sh
npx playwright install --with-deps chromium --no-shell
npm run build
npm run typecheck
npm run test:web -- --workers=2
```
Playwright starts a dedicated production server on port 3100 and stops it afterwards. Tests run Chromium with desktop and mobile viewports. Coverage includes separate foundation names, safe giving messaging, mobile menu selection and Escape, skip link navigation, horizontal overflow, associated form errors, reduced-motion behavior, and axe WCAG A/AA checks on the home and design-reference routes. Automated checks do not establish full WCAG conformance or measured Lighthouse scores.

The build uses Next.js's supported Webpack option because Turbopack's CSS helper was unable to bind a process port in this managed environment. It does not change application rendering behavior.

## Phase 3 results — 2026-11-04
Production build (Webpack) and TypeScript checks passed. The desktop/mobile browser suite passed 11 tests; one desktop instance of the mobile-only disclosure test was intentionally skipped. Axe found no automated violations under the configured WCAG tags on both routes at both viewports after illustration and entrance-animation contrast fixes. Screenshots were visually inspected, and widths of 1440, 390, and 320 pixels were checked for horizontal overflow. These checks are limited to the design preview, not unimplemented public routes or business workflows.
