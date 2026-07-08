# Architecture

This document describes the planned architecture for Job Search OS. It is intentionally high level during Phase 0 and should be updated as implementation decisions are made.

## Frontend

The frontend will provide the primary user experience for job seekers. It should be modular, responsive, and organized around product workflows rather than technical implementation details.

Planned responsibilities:

- Resume creation and editing
- Job application tracking
- Dashboard views
- Authentication screens
- Interview and recruiter management
- AI-assisted workflows with reviewable suggestions
- Reusable UI components and layout patterns

Expected frontend qualities:

- Clear feature-based folder organization
- Accessible form controls and navigation
- Predictable loading, error, empty, and success states
- Shared validation where practical
- Consistent design patterns across workflows

## Backend

The backend will provide business logic, persistence coordination, API endpoints, authentication enforcement, and AI integration boundaries.

Planned responsibilities:

- User account and session-aware operations
- Resume data management
- Job tracker operations
- Dashboard aggregation
- Interview and recruiter records
- AI request orchestration
- Validation and authorization
- Audit-friendly handling of AI-generated suggestions

Expected backend qualities:

- Clear service boundaries
- Small route handlers or controllers
- Centralized validation
- Reusable domain logic
- Explicit error handling
- Environment-based configuration

## Database

The database will store user-owned job search data. The schema should be designed to protect private information and support future AI features.

Planned data areas:

- Users
- Resumes
- Resume sections and versions
- Job applications
- Companies
- Contacts
- Interviews
- Notes
- Reminders
- AI suggestion records
- Match results

Expected database qualities:

- Clear ownership relationships between users and records
- Stable identifiers
- Timestamps for important records
- Versioning for resume content
- Indexes for common search and filtering paths
- Migration-based schema changes once implementation begins

## API

The API will connect the frontend to backend capabilities. API contracts should be clear, consistent, and documented as they evolve.

Planned API areas:

- Authentication and current user
- Resume CRUD
- Resume versioning
- Job application CRUD
- Dashboard summaries
- Interview CRUD
- Recruiter and contact CRUD
- AI resume optimization
- Job matching
- Assistant interactions

Expected API qualities:

- Consistent request and response shapes
- Input validation
- Clear error responses
- Authorization checks for user-owned resources
- Pagination or filtering for list endpoints
- Stable contracts shared with frontend code

## Folder Structure

The exact structure will be finalized during Phase 1. A likely direction is:

```text
job-search-os/
  docs/
    architecture.md
  frontend/
    src/
      app/
      components/
      features/
      lib/
      styles/
      types/
  backend/
    src/
      api/
      config/
      db/
      modules/
      services/
      types/
      utils/
  shared/
    schemas/
    types/
  tests/
  PROJECT_STATUS.md
  DEVELOPMENT_RULES.md
  PROJECT_ROADMAP.md
  README.md
```

Folder principles:

- Keep feature code grouped by product domain.
- Keep shared logic in explicit shared locations.
- Avoid large catch-all utility folders.
- Keep AI integrations behind service boundaries.
- Keep database migrations and schema files easy to find.

## Future AI Modules

AI capabilities should be introduced as dedicated modules with clear boundaries, observability, and user review steps.

Planned AI modules:

- Resume critique module
- Resume rewrite module
- Job description parser
- Resume-to-job matching module
- Skill gap analysis module
- Interview preparation module
- Follow-up drafting module
- Career assistant module

AI module principles:

- Preserve original user content unless the user accepts changes.
- Make AI-generated suggestions reviewable before saving.
- Keep prompts and model configuration organized.
- Avoid leaking private user data beyond approved providers.
- Track enough metadata to debug AI behavior.
- Design AI features so non-AI workflows still function.
