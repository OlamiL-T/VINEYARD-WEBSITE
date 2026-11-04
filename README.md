# Vineyard Foundations platform

Phase 3 development foundation and design system for Vineyard International Foundation and Vineyard Hope Foundation, two legally separate organizations. Public content, organization-scoped CMS authorization, forms, donations, and production deployment are not implemented yet. The landing page is explicitly a design preview, with a component reference at `/design-system`.

## Prerequisites
Node.js 24, npm 11, Python 3.12, and Docker Compose. Use the existing checkout; each cloud task is isolated and does not need a new worktree.

## Install and start
From the repository root:
```sh
python3 -m venv .venv
.venv/bin/python -m pip install -r apps/api/requirements.txt
npm ci
docker compose up -d --wait db
.venv/bin/python apps/api/manage.py migrate
.venv/bin/python apps/api/manage.py createsuperuser
```
Run the services in separate terminals:
```sh
.venv/bin/python apps/api/manage.py runserver 0.0.0.0:8000
npm run dev
```
Local development ports: web 3000, CMS 8000, PostgreSQL 5432 (loopback only). CMS login is `/admin/`. No default administrator is created. Local database credentials are intentionally development-only; `.env.example` documents settings but is not automatically loaded. Export overrides in your shell. Never reuse local credentials in production.

## Validation
```sh
npm run build
npm run typecheck
.venv/bin/python apps/api/manage.py check
.venv/bin/python apps/api/manage.py test config
```
Health requests: web `/api/health`, backend `/api/health/` (executes a database query). Run production web output with `npm run start --workspace apps/web` after building.

## Shutdown
Stop foreground processes with Ctrl-C; `docker compose stop db` preserves database data. Never use `down -v` on data you need.

See docs/ for architecture, scope, research status, and operational prerequisites. No deployment or payment capability is implied by this scaffold.

Set `SITE_URL` to a clean origin when testing metadata against an assigned domain. Until configured, the planning placeholder is not emitted as a canonical URL.

Design tokens, component conventions, and content boundaries are documented in [docs/DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md). Browser verification instructions are in [docs/TESTING.md](docs/TESTING.md).
