# Changelog

All notable merged features for Job Search OS are recorded here.

This project uses semantic versioning. During the pre-1.0 phase, minor versions represent meaningful repository, documentation, foundation, and product milestones.

## [Unreleased]

### Job Tracker MVP

#### Added

- Added a SQLite-backed `job_applications` table for manual job tracking.
- Added `GET /api/jobs`, `GET /api/jobs/{job_id}`, `POST /api/jobs`, `PUT /api/jobs/{job_id}`, `PATCH /api/jobs/{job_id}/status`, and `PATCH /api/jobs/{job_id}/archive` API endpoints.
- Added the Job Tracker frontend workflow for creating, viewing, editing, status-updating, archiving, unarchiving, and reloading jobs.
- Added modular Job Tracker components under `frontend/src/components/jobs/`.
- Added Job Tracker feature documentation and manual QA coverage.

#### Fixed

- Fixed Job Tracker API validation so required company and job title values are trimmed and blank-after-trim values are rejected.

### Resume Studio Hardening

#### Added

- Added repository line-ending consistency configuration with `.gitattributes`.
- Added Sprint 2.5 project tracking for Resume Studio hardening, verification, and known test coverage gaps.
- Recorded Resume Studio MVP manual QA evidence and Candidate Profile regression results.

#### Changed

- Updated project status, roadmap, decisions, QA checklist, and Resume Studio feature documentation to mark Resume Studio MVP complete and document deferred work.

### Resume Studio MVP

#### Added

- Added a structured base resume model with JSON-backed resume sections for summary, skills, experience, projects, education, and certifications.
- Added `GET /api/resume`, `POST /api/resume`, and `PUT /api/resume/{resume_id}` API endpoints.
- Added the Resume Studio frontend workflow for creating, editing, saving, reloading, and updating one base resume.
- Added modular Resume Studio components under `frontend/src/components/resume/`.
- Added Resume Studio feature documentation and manual QA coverage.

## [0.4.0] - 2026-07-09

### Profile Module

#### Added

- Added the candidate profile module with support for core candidate details, education, work experience, skills, and projects.
- Added profile persistence through SQLite-backed SQLAlchemy models.
- Added `GET /profile`, `POST /profile`, and `PUT /profile` API endpoints.
- Added editable frontend profile form with save and update behavior.
- Added manual QA coverage for profile creation, update, persistence, and empty-profile behavior.

## [0.3.0] - 2026-07-08

### Application Foundation

#### Added

- Added React + Vite frontend application foundation.
- Added Tailwind CSS configuration.
- Added initial Dashboard, Profile, Resume Studio, and Job Tracker pages.
- Added frontend navigation across foundation pages.
- Added FastAPI backend application foundation.
- Added SQLAlchemy and SQLite configuration.
- Added `GET /health` backend health check endpoint.
- Added local setup instructions to `README.md`.

## [0.2.0] - 2026-07-08

### Project Documentation

#### Added

- Added project status tracking in `PROJECT_STATUS.md`.
- Added development rules in `DEVELOPMENT_RULES.md`.
- Added phase-based product roadmap in `PROJECT_ROADMAP.md`.
- Added initial architecture documentation in `docs/architecture.md`.
- Added decisions log in `DECISIONS.md`.

## [0.1.0] - 2026-07-08

### Repository Setup

#### Added

- Established the repository for Job Search OS.
- Defined the initial product vision for an AI-powered operating system for job seekers.
- Established the documentation-first project setup approach.
