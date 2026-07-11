# Project Status

## Project Vision

Job Search OS is a long-term product vision for an AI-powered operating system for job seekers. The application will help users create stronger resumes, track applications, prepare for interviews, manage recruiter relationships, and receive intelligent career guidance across the full job search lifecycle.

## Current Phase

Phase 3: Job Tracker MVP

## Current Sprint

Sprint 3: Job Tracker MVP on the `feature/job-tracker-mvp` branch.

## Current Milestone

Build the manual Job Tracker foundation for creating, viewing, editing, status-updating, archiving, unarchiving, and persisting job records.

## Next Milestone

Complete Product Owner manual QA for Job Tracker MVP and then establish automated backend and frontend test coverage for core workflows.

## Recent Merges

- `0.1.0` Repository Setup
- `0.2.0` Project Documentation
- `0.3.0` Application Foundation
- `0.4.0` Profile Module
- Release 0.5 / Sprint 2: Resume Studio MVP
- Sprint 2.5: Resume Studio Hardening

## Architecture Decisions

- The project began with documentation and planning before application code was introduced.
- The product will be designed as a modular system so resume generation, job tracking, dashboards, authentication, AI modules, and CRM features can evolve independently.
- Frontend, backend, database, API, and AI module boundaries will be documented before implementation.
- Project history will be preserved in this file through chronological append-only updates.
- Major product, architecture, and workflow decisions will be tracked in `DECISIONS.md`.
- Engineering process, QA, contribution, and changelog standards will be maintained as first-class project documentation.
- Resume Studio MVP content is stored structurally in JSON section fields rather than as one resume text blob.
- Job Tracker MVP uses one normalized `job_applications` table with archive-first deletion.

## Completed Tasks

- Created initial project documentation structure.
- Defined development rules for engineering workflow and code quality.
- Created a phase-based product roadmap.
- Created initial architecture documentation.
- Created decisions log for major product, architecture, and workflow decisions.
- Created the initial React + Vite frontend application skeleton.
- Added Tailwind CSS configuration for the frontend.
- Added basic Dashboard, Profile, Resume Studio, and Job Tracker pages.
- Added simple frontend navigation between foundation pages.
- Created the initial FastAPI backend application skeleton.
- Added SQLAlchemy and SQLite configuration.
- Added `GET /health` backend health check endpoint.
- Created SQLAlchemy models for candidate profiles, education, work experience, skills, and projects.
- Added Pydantic schemas for profile create/read API payloads.
- Added `GET /profile`, `POST /profile`, and `PUT /profile` backend endpoints.
- Built the Profile page form with save/update support for core candidate details, education, work experience, skills, and projects.
- Added basic Profile page success and error messaging.
- Created `AI_ENGINEERING_GUIDE.md` as the permanent handbook for AI-assisted engineering sessions.
- Created `QA_CHECKLIST.md` as a reusable validation checklist.
- Created `CHANGELOG.md` using semantic versioning for merged feature history.
- Created `CONTRIBUTING.md` for branch, pull request, coding, documentation, and review expectations.
- Created `docs/features/profile.md` to document the Profile module requirements, API, database, acceptance criteria, QA, and future improvements.
- Added the `Resume` SQLAlchemy model for one structured base resume.
- Added Resume Studio Pydantic create, update, and response schemas.
- Added `GET /api/resume`, `POST /api/resume`, and `PUT /api/resume/{resume_id}` backend endpoints.
- Replaced the Resume Studio placeholder with a modular create/edit/update frontend workflow.
- Added Resume Studio components for summary, skills, experience, projects, education, certifications, and preview.
- Added a frontend resume API service.
- Created `docs/features/resume-studio.md` to document the Resume Studio MVP.
- Completed Resume Studio MVP manual QA and Candidate Profile regression verification.
- Added line-ending consistency configuration with `.gitattributes`.
- Recorded Resume Studio hardening verification results and technical debt.
- Added the `JobApplication` SQLAlchemy model for manual job tracking.
- Added Job Tracker Pydantic create, update, status update, archive update, and response schemas.
- Added `GET /api/jobs`, `GET /api/jobs/{job_id}`, `POST /api/jobs`, `PUT /api/jobs/{job_id}`, `PATCH /api/jobs/{job_id}/status`, and `PATCH /api/jobs/{job_id}/archive` backend endpoints.
- Replaced the Job Tracker placeholder with a modular frontend workflow for creating, viewing, editing, status-updating, archiving, and unarchiving jobs.
- Added frontend Job Tracker components and API service.
- Created `docs/features/job-tracker.md` to document the Job Tracker MVP.

## Current Task

Complete Sprint 3: Job Tracker MVP on the `feature/job-tracker-mvp` branch.

## Upcoming Tasks

- Complete Product Owner manual QA for Job Tracker MVP.
- Add automated backend and frontend tests for Job Tracker and Resume Studio.
- Establish linting, formatting, and CI standards.
- Add richer Job Tracker search and filtering after MVP review.

## Known Issues

- No authentication has been added yet.
- No AI features have been added yet.
- Resume Studio does not yet support AI optimization, ATS scoring, PDF/DOCX export, or multiple resume versions.
- Resume Studio automated backend endpoint tests are not yet available.
- Resume Studio frontend component and smoke tests are not yet available.
- Resume Studio API response fields currently expose internal `*_json` names and should be revisited before AI optimization, versioning, or export.
- Resume Studio section data may eventually need normalized tables when versioning, analytics, or richer querying require them.
- Job Tracker automated backend endpoint tests are not yet available.
- Job Tracker frontend component and workflow tests are not yet available.
- Job Tracker does not yet include authentication, user ownership, status history, reminders, recruiter CRM, interview tracking, analytics, or AI matching.

## Release 0.5 / Sprint 2: Resume Studio MVP

Completed:

- Structured Resume Studio page.
- Backend resume model, schemas, and API routes.
- Resume create, save, update, and reload workflow.
- Modular frontend resume section components.
- Basic resume preview.
- Documentation updates.
- Manual QA passed.
- Candidate Profile regression passed.

Deferred:

- AI resume optimization.
- ATS scoring.
- Resume export.
- Resume versioning.
- Resume templates.
- Resume analytics.
- Automated backend/frontend tests.

## Sprint 2.5: Resume Studio Hardening

Scope:

- Backend compile verification.
- Frontend production build verification.
- Hidden Unicode scan.
- Git hygiene check.
- Documentation cleanup.
- Manual QA evidence recorded.
- Line-ending consistency configuration.
- Test coverage gaps identified.

Verification results:

- Backend py_compile: Pass.
- Frontend npm run build: Pass.
- Hidden Unicode scan: Pass.
- Git hygiene check: Pass.
- Existing automated tests: Not available.
- Manual QA status: Passed previously by Product Owner.

## Sprint 3: Job Tracker MVP

Scope:

- Create job records.
- View active jobs.
- Edit job records.
- Update job status.
- Archive and unarchive jobs.
- Persist jobs in SQLite.
- Provide basic loading, empty, success, and error states.
- Update documentation and QA checklist.

Implemented:

- SQLite-backed `job_applications` table.
- Job Tracker API routes under `/api/jobs`.
- Status validation for `saved`, `applied`, `interviewing`, `offer`, and `rejected`.
- Archive-first deletion behavior through an `archived` boolean.
- Modular Job Tracker frontend page, components, defaults, and API service.
- Optional archived-job visibility and unarchive workflow.

Deferred:

- AI job matching.
- AI resume tailoring.
- ATS scoring.
- Auto-apply.
- Recruiter CRM.
- Interview tracker.
- Email parsing.
- Chrome extension.
- Analytics dashboard.
- Job scraping.
- Automated reminders.
- Resume-job comparison.
- Dashboard count integration.

Codex verification results:

- Backend py_compile: Pass.
- Frontend npm run build: Pass.
- Existing automated backend tests: Not available.
- Existing automated frontend tests: Not available.
- Product Owner manual QA: Not yet performed.

## Future Features

- Resume generator
- Job application tracker
- Job search dashboard
- User authentication
- AI resume optimization
- Job matching engine
- Interview tracker
- Recruiter CRM
- AI career assistant
- Analytics and progress insights
- Document export and versioning

## Change Log

### 2026-07-08

- Initialized Phase 0 project documentation.
- Added `PROJECT_STATUS.md` to track vision, phase, architecture decisions, tasks, issues, future features, and chronological changes.
- Added `DEVELOPMENT_RULES.md` to define engineering standards.
- Added `PROJECT_ROADMAP.md` to define product phases from setup through AI career assistant.
- Added `docs/architecture.md` to document planned frontend, backend, database, API, folder structure, and future AI modules.
- Added `DECISIONS.md` to track major product, architecture, and workflow decisions.
- Recorded initial decisions for React + Vite, FastAPI, SQLite, markdown documentation, branch-based Git workflow, and MVP-first product sequencing.
- Began Phase 1 app foundation on the `feature/app-foundation` branch.
- Added a runnable React + Vite frontend in `frontend/`.
- Added Tailwind CSS setup and basic navigation across Dashboard, Profile, Resume Studio, and Job Tracker pages.
- Added a runnable FastAPI backend in `backend/`.
- Added SQLAlchemy SQLite configuration and a `GET /health` endpoint.
- Updated `README.md` with local setup instructions.
- Fixed frontend startup by adding explicit Vite configuration with the React plugin and port `5173`.
- Verified the frontend dev server starts at `http://localhost:5173/`.
- Verified the backend health check returns `{"status":"ok"}` at `http://127.0.0.1:8000/health`.

### 2026-07-09

- Began Phase 2 profile module on the `feature/profile-module` branch.
- Added SQLite-backed profile models for candidate details, education, work experience, skills, and projects.
- Added Pydantic schemas and profile API routes for reading, creating, and updating the MVP candidate profile.
- Added local frontend-to-backend CORS support for the Vite development server.
- Replaced the placeholder Profile page with an editable form for basic details, target roles, summary, education, work experience, skills, and projects.
- Verified the frontend production build succeeds.
- Verified the profile API returns 404 before creation, creates a profile with `POST /profile`, and updates it with `PUT /profile`.
- Completed QA verification for the Phase 2 profile module before merge.
- Verified the backend starts successfully, `GET /profile` returns an empty profile before creation, `POST /profile` creates a profile, `PUT /profile` updates it, SQLite tables are created, and no backend errors were observed.
- Verified the frontend starts successfully, the Profile page loads, all required fields are visible, save and update work, saved data persists after browser refresh, and no browser console, page, or request errors were observed.
- Fixed the minimum necessary QA issue where an empty profile loaded as a 404 response, causing browser console errors before the first save.

#### Manual QA Fix

- Diagnosed backend startup failure as missing dependencies in the Python interpreter used by manual QA; `sqlalchemy` was not installed there.
- Updated `backend/requirements.txt` to explicitly include every direct backend dependency used by the project: FastAPI, Pydantic, SQLAlchemy, and Uvicorn.
- Installed backend requirements and verified `uvicorn app.main:app --reload` starts successfully.
- Verified `GET /health`, `GET /profile`, `POST /profile`, and `PUT /profile` are operational against the running backend.

#### Engineering Process Documentation

- Began engineering quality documentation work on the `feature/engineering-guide` branch.
- Added `AI_ENGINEERING_GUIDE.md` as the permanent handbook for AI-assisted engineering sessions.
- Added `QA_CHECKLIST.md` as a reusable validation checklist across backend, environment, frontend, database, documentation, Git, manual testing, and release readiness.
- Added `CHANGELOG.md` with semantic version entries for repository setup, project documentation, application foundation, and the profile module.
- Added `CONTRIBUTING.md` to document branch creation, pull requests, coding standards, documentation expectations, and review process.
- Added `docs/features/profile.md` to document the Profile module.
- Updated `DECISIONS.md` to record why engineering process documentation was introduced.
- Ran a documentation review confirming the branch is documentation-only, Markdown whitespace checks pass, and status, decisions, changelog, contributing, QA, and feature documentation references are consistent.

#### Resume Studio MVP

- Began Resume Studio Sprint 2A and 2B on the `feature/resume-studio` branch.
- Added a SQLite-backed `resumes` table with title, target role, professional summary, structured JSON section fields, and timestamps.
- Added Resume Studio API schemas and endpoints for reading, creating, and updating one base resume.
- Replaced the placeholder Resume Studio page with a modular form and live preview.
- Added frontend resume API service support for load, create, and update requests.
- Documented the MVP scope, API contract, database shape, acceptance criteria, and manual QA steps in `docs/features/resume-studio.md`.
- Recorded the decision to use structured JSON fields for the Resume Studio MVP.

#### Resume Studio Hardening

- Began Sprint 2.5 on the `feature/resume-studio-hardening` branch after Resume Studio MVP was merged to `main`.
- Marked Release 0.5 / Sprint 2 Resume Studio MVP as complete in project tracking.
- Added `.gitattributes` for repository line-ending consistency.
- Recorded Sprint 2.5 verification scope, manual QA evidence, deferred work, and known technical debt.

### 2026-07-11

#### Job Tracker MVP

- Began Sprint 3 Job Tracker MVP on the `feature/job-tracker-mvp` branch.
- Added a SQLite-backed `job_applications` table for manual job tracking.
- Added Job Tracker schemas and API routes for listing, reading, creating, updating, status updates, and archive updates.
- Replaced the Job Tracker placeholder with a modular create/edit/list/status/archive frontend workflow.
- Added optional archived-job visibility and unarchive support.
- Documented the Job Tracker MVP scope, API contract, database decision, manual QA steps, deferred work, and future improvements.
- Verified backend Python compilation and frontend production build.
