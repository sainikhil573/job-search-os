# Project Overview

## Purpose

Job Search OS is a full-stack career management application for organizing the job search lifecycle. The current product is a local MVP focused on manual workflows: maintaining a candidate profile, building one structured base resume, tracking job applications, and summarizing job tracker data on a dashboard.

The long-term vision, supported by repository documentation, Git history, and prior product discussion, is an AI-powered Career Operating System for job seekers that helps users create stronger resumes, track applications, prepare for interviews, manage recruiter relationships, track learning priorities, understand job-search activity, and receive intelligent career guidance across the lifecycle.

The repository is also intentionally maintained as a professional software engineering portfolio project. Existing documentation emphasizes clear architecture, incremental delivery, REST API design, data modeling, disciplined Git workflow, QA records, and maintainable AI-assisted engineering practices.

## Target User And Business Problem

The initial target user is the project owner as an active job seeker managing multiple target roles, resumes, applications, recruiters, interviews, and learning priorities. The broader intended audience is technically oriented job seekers who want more structure, automation, traceability, and AI assistance than a spreadsheet or simple application tracker provides.

The business problem is that job searches often scatter candidate information, resumes, applications, follow-ups, recruiter notes, and interview preparation across disconnected documents and tools. Job Search OS aims to centralize these workflows first, then add AI assistance once the underlying data model and user trust are stable.

The intended differentiation from a basic job tracker is the eventual combination of persistent candidate and resume data, job lifecycle tracking, recruiter and interview management, learning and career-development tracking, analytics, and AI-assisted recommendations. The repository itself is part of the portfolio narrative and should demonstrate professional product judgment, architecture, documentation, Git hygiene, QA discipline, and maintainable implementation.

## Current Product Surface

- Dashboard: live summary of persisted Job Tracker records.
- Candidate Profile: structured candidate information used by future resume, matching, and AI workflows.
- Resume Studio: one structured base resume with editable sections and preview.
- Job Tracker: manual job application records with status updates and archive-first deletion.

## Future Product Direction

Conversation-derived product context identifies these future modules or capability areas. They are not completed unless also listed in the completed feature section.

- AI Resume Optimizer: deferred until resume data, review flows, privacy, and AI architecture are stable.
- AI Job Matching: deferred until profile, resume, and job data are reliable enough for scoring and explanations.
- Recruiter CRM: planned but not prioritized.
- Interview Tracker: planned but not prioritized.
- Learning Tracker: planned but not prioritized; intended to connect learning priorities to job-search and interview preparation.
- Career Analytics: deferred until richer event/history data, ownership, and metrics exist.
- AI Career Assistant: long-term direction that depends on trustworthy cross-module data.
- Deployment and production readiness: exploratory or planned, not implemented.

## Technology Stack

- Frontend: React 19, React Router, Vite 6, Tailwind CSS, JavaScript.
- Backend: Python, FastAPI, Pydantic 2, SQLAlchemy 2, Uvicorn.
- Database: SQLite by default through `DATABASE_URL`, with tables created at app startup by SQLAlchemy metadata.
- Tooling: npm scripts for frontend development/build; Python requirements for backend runtime.
- Version control: Git and GitHub with feature branches and pull request merges.

## Architecture

The application is split into `frontend/`, `backend/`, and `docs/`.

The frontend is a client-side React app with top-level pages under `frontend/src/pages/`, reusable feature components under `frontend/src/components/`, and API helper modules under `frontend/src/services/`.

The backend is a FastAPI app under `backend/app/` with:

- `main.py` for app construction, CORS, router registration, and table creation.
- `database.py` for SQLAlchemy engine/session setup.
- `models/` for SQLAlchemy models.
- `schemas/` for Pydantic request and response schemas.
- `routes/` for API routes.

The current MVP is local and single-user. It has no authentication, user ownership, authorization layer, migration system, production deployment, or permanent automated test suite.

## Data Model Summary

- Profile tables: `candidate_profiles`, `education`, `work_experience`, `skills`, and `projects`.
- Resume table: `resumes`, with structured JSON fields for skills, experience, projects, education, and certifications.
- Job Tracker table: `job_applications`, with job details, status, dates, archive state, and timestamps.

No migration directory or Alembic setup was found. Database schema is currently created from SQLAlchemy models at application startup.

## API Summary

- `GET /health`
- `GET /profile`
- `POST /profile`
- `PUT /profile`
- `GET /api/resume`
- `POST /api/resume`
- `PUT /api/resume/{resume_id}`
- `GET /api/jobs`
- `GET /api/jobs?include_archived=true`
- `GET /api/jobs/{job_id}`
- `POST /api/jobs`
- `PUT /api/jobs/{job_id}`
- `PATCH /api/jobs/{job_id}/status`
- `PATCH /api/jobs/{job_id}/archive`

## Completed Features

- Repository setup and documentation-first project foundation.
- React + Vite frontend foundation with navigation across Dashboard, Profile, Resume Studio, and Job Tracker.
- FastAPI backend foundation with SQLite configuration and health endpoint.
- Candidate Profile create/read/update workflow with nested education, work experience, skills, and projects.
- Resume Studio create/read/update workflow for one structured base resume.
- Resume Studio hardening and verification documentation.
- Job Tracker create/read/update/status/archive/unarchive workflow.
- Job Tracker required field trimming and blank-value validation.
- Dashboard integration with live Job Tracker summaries, status counts, recently updated jobs, navigation, and loading/error/empty/all-archived states.
- Engineering documentation: contribution guidance, QA checklist, changelog, roadmap, decisions, and AI engineering guide.

## Feature Status

### Profile

Status: Implemented and merged to `main`.

The Profile module persists one candidate profile and nested education, work experience, skills, and project records. Known future work includes authentication ownership, stronger validation, automated tests, and integrations with resume and AI workflows.

### Resume Studio

Status: MVP implemented, hardened, and merged to `main`.

Resume Studio supports one structured base resume with editable sections and a live preview. Deferred work includes AI optimization, ATS scoring, PDF/DOCX export, multiple resume versions, templates, analytics, cleaner external field names, normalized section tables if needed, authentication ownership, and automated tests.

### Job Tracker

Status: MVP implemented and merged to `main`.

Job Tracker supports creating, viewing, editing, status updating, archiving, unarchiving, and listing active or archived jobs. Deferred work includes search/filtering beyond archived visibility, status history, reminders, recruiter CRM, interview tracking, analytics, AI matching, authentication ownership, and automated tests.

### Dashboard Integration

Status: Sprint 4 completed and merged to `main`.

Dashboard uses `GET /api/jobs?include_archived=true` and frontend aggregation to show active jobs, archived jobs, active-job status counts, and recently updated jobs. Deferred work includes upcoming follow-ups, reminders, interview previews, resume metrics, advanced analytics, pagination, authentication-aware summaries, and a dedicated dashboard endpoint if scale or ownership requires it.

## Known Limitations And Technical Debt

- No authentication, user accounts, protected routes, or data ownership.
- No production-grade database or migration system.
- SQLite is appropriate for the current local MVP but not the final multi-user product.
- SQLAlchemy creates tables at app startup rather than through migrations.
- No permanent automated backend test suite.
- No permanent automated frontend test suite.
- No lint, formatting, type-check, or CI standard is configured.
- Resume Studio response fields expose internal `*_json` names.
- Resume section data may need normalization when versioning, analytics, or richer querying require it.
- Dashboard aggregation is currently frontend-only and coupled to the Job Tracker response shape.
- Job Tracker lacks status history, reminders, recruiter/contact records, interview records, and search/filtering beyond archived visibility.
- AI features are intentionally deferred until manual workflows, authentication, and data ownership are stable.
- Product language must continue to match actual data. For example, the current Dashboard says "Recently Updated Jobs" rather than implying activity history, because there is no event or status-history model yet.

## Unverified Or Not Present

- No evidence of a production deployment was found.
- No evidence of Alembic or another database migration tool was found.
- No repository-owned test directory or test framework configuration was found.
- No evidence of authentication provider selection was found.
- No evidence of Learning Tracker, Career Analytics, Recruiter CRM, Interview Tracker, AI Job Matching, AI Resume Optimizer, or AI Career Assistant implementation was found.
