# Project Status

Last updated: 2026-07-13

## Current State

Job Search OS is a local full-stack MVP for job seekers. It currently supports Candidate Profile, Resume Studio, Job Tracker search/filtering, and Dashboard summaries backed by FastAPI, React, SQLAlchemy, and SQLite.

The implementation baseline is `main`, aligned with `origin/main`, with Sprint 4 Dashboard Integration closed. Sprint 5 Job Tracker Search and Filtering has been approved and implemented in the current working tree; it is pending review and merge.

## Pending Next-Sprint Review

Sprint 5 Job Tracker Search and Filtering has been approved. The next sprint after Sprint 5 should be selected through another sprint-entry review.

Likely next candidates:

- Authentication Planning
- Testing and CI Foundation
- Database Migration Foundation

Testing and CI Foundation remains a strong candidate before authentication implementation, migration work, or other cross-cutting product changes.

## Current Branch And Git Condition

- Active branch: `docs/project-onboarding`
- Implementation baseline branch: `main`
- Upstream baseline: `origin/main`
- `main` and `origin/main`: no differences found during onboarding.
- Working tree before onboarding: clean.
- Working tree after Sprint 5 implementation: Job Tracker search/filtering code and documentation updates.
- Git warning observed: Git could not access `C:\Users\PC 2/.config/git/ignore` because of permission denial. Repository status still succeeded.

## Completed Product Features

- Candidate Profile: implemented and merged to `main`.
- Resume Studio MVP: implemented, hardened, and merged to `main`.
- Job Tracker MVP: implemented and merged to `main`.
- Dashboard Integration: implemented, verified, merged, and closed on `main`.
- Job Tracker Search and Filtering: implemented in the current working tree; pending review and merge.

See `docs/PROJECT_OVERVIEW.md` for feature details.

## Completed Sprint History

- `0.1.0` Repository Setup
- `0.2.0` Project Documentation
- `0.3.0` Application Foundation
- `0.4.0` Profile Module
- Release 0.5 / Sprint 2: Resume Studio MVP
- Sprint 2.5: Resume Studio Hardening
- Sprint 3: Job Tracker MVP
- Sprint 4: Dashboard Integration
- Sprint 5: Job Tracker Search and Filtering

See `docs/ROADMAP.md` and `CHANGELOG.md` for milestone details.

## Known Limitations

- No authentication, user accounts, protected routes, or user-owned records.
- No migration system.
- No permanent automated backend or frontend test suite.
- No linting, formatting, type-checking, or CI standard is configured.
- SQLite is the current local MVP database; production multi-user persistence is not designed yet.
- Resume Studio does not support AI optimization, ATS scoring, export, versions, templates, or analytics.
- Job Tracker search/filtering is client-side for the local MVP and does not yet support backend query filtering, pagination, status history, reminders, recruiter CRM, interview tracking, analytics, or AI matching.
- Dashboard does not support follow-ups, interview previews, resume metrics, notifications, advanced analytics, pagination, or a dedicated backend summary endpoint.

## Documentation Follow-Up

- `docs/architecture.md` remains a high-level planning document with stale Phase 0/Phase 1 framing and should be refreshed in a separate documentation task.

## Documentation Map

- `AGENTS.md`: Codex-specific operating rules.
- `PROJECT_STATUS.md`: concise current state, branch status, and next-sprint candidates.
- `docs/PROJECT_OVERVIEW.md`: product vision, users, architecture, feature status, and known limitations.
- `docs/ROADMAP.md`: completed, candidate, and future milestones.
- `docs/DECISIONS.md`: proposed canonical record for meaningful architectural, product, and workflow decisions.
- `CHANGELOG.md`: chronological record of completed changes.

## Onboarding Notes

- Repository evidence supports the long-term AI-powered job seeker operating system vision.
- Conversation-derived context supports treating the project as both a real personal job-search tool and a portfolio-quality SaaS-style artifact.
- Repository evidence does not show production deployment, authentication provider selection, database migration tooling, or permanent automated test setup.
- Older root roadmap and decisions files existed before this onboarding pass; proposed canonical ownership now lives under `docs/`.
