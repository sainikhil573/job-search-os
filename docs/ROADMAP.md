# Roadmap

This roadmap records completed, candidate, and future milestones for Job Search OS. It is grounded in repository documentation and Git history through 2026-07-12.

## Current Position

The implementation baseline is `main` at Sprint 4 closeout. Sprint 5 Job Tracker Search and Filtering has been approved and implemented in the current working tree; it is pending review and merge.

## Completed Milestones

### 0.1.0 Repository Setup

Status: Completed on 2026-07-08.

- Established the Job Search OS repository.
- Defined the initial AI-powered job seeker operating system vision.

### 0.2.0 Project Documentation

Status: Completed on 2026-07-08.

- Added project status, development rules, roadmap, architecture, and decisions documentation.
- Established documentation-first planning before application code.

### 0.3.0 Application Foundation

Status: Completed and merged through PR #2.

- Added React + Vite frontend.
- Added Tailwind CSS setup.
- Added Dashboard, Profile, Resume Studio, and Job Tracker placeholder pages.
- Added frontend navigation.
- Added FastAPI backend.
- Added SQLAlchemy and SQLite setup.
- Added `GET /health`.

### 0.4.0 Profile Module

Status: Completed and merged through PR #4.

- Added SQLAlchemy profile models.
- Added Pydantic profile schemas.
- Added `GET /profile`, `POST /profile`, and `PUT /profile`.
- Added editable Profile page with persistence and basic messaging.
- Added profile feature documentation and QA records.

### Release 0.5 / Sprint 2 Resume Studio MVP

Status: Completed and merged through PR #6.

- Added one structured base resume.
- Added `resumes` model with structured JSON section fields.
- Added resume schemas and API endpoints.
- Added modular Resume Studio frontend workflow and preview.
- Added resume feature documentation and manual QA records.

### Sprint 2.5 Resume Studio Hardening

Status: Completed and merged through PR #7.

- Added line-ending consistency configuration.
- Recorded hardening verification.
- Documented test coverage gaps and deferred Resume Studio work.

### Sprint 3 Job Tracker MVP

Status: Completed and merged through PR #8.

- Added `job_applications` table.
- Added Job Tracker API routes.
- Added modular frontend workflow for create, view, edit, status update, archive, unarchive, and reload.
- Added required field trimming and blank-value validation.
- Added job tracker feature documentation and QA coverage.

### Sprint 4 Dashboard Integration

Status: Completed and closed on `main` through PR #9 and PR #10.

- Replaced static dashboard placeholders with live Job Tracker summaries.
- Used `GET /api/jobs?include_archived=true`.
- Added active, archived, and active-job status counts.
- Added recently updated jobs.
- Added Dashboard navigation to Job Tracker.
- Added loading, API error, no-job, all-archived, and mixed-data states.
- Recorded post-merge smoke verification and Product Owner browser QA.

### Sprint 5 Job Tracker Search And Filtering

Status: Implemented in the current working tree; pending review and merge.

- Added client-side Job Tracker search across company, title, location, source, priority, salary range, job description, and notes.
- Added status filtering.
- Added priority filtering based on loaded job records.
- Added visible match counts and a clear-filters action.
- Added a distinct no-matching-jobs empty state.
- Preserved the existing archived visibility toggle and Job Tracker API contract.

## Next-Sprint Candidates Pending Review

After Sprint 5, these candidates should be compared before the next implementation sprint starts.

### Authentication Planning

Why consider it:

- Private job-search data needs user ownership before multi-user or AI-assisted workflows.
- Current Profile, Resume Studio, Job Tracker, and Dashboard records are local and unscoped.
- Authentication affects backend routes, database ownership, frontend navigation, and privacy boundaries.

Trade-offs:

- High cross-cutting complexity.
- May require migration strategy first.
- Provides less immediate workflow improvement than Job Tracker search or Resume Studio enhancements.

Possible planning deliverables:

- Authentication approach recommendation.
- User ownership model.
- Protected route and session behavior.
- Migration prerequisites.
- Acceptance criteria for a later implementation sprint.

Important boundary:

- Authentication implementation is not approved by this roadmap entry.

### Testing And CI Foundation

Why consider it:

- The repository has no permanent automated backend or frontend test suite.
- Authentication would be risky without regression coverage across existing workflows.
- CI would make future feature branches easier to review and safer to merge.

Trade-offs:

- Less visible to end users.
- Requires choosing test tools and conventions before product work continues.

Possible deliverables:

- Backend endpoint test setup.
- Frontend component or workflow test setup.
- Build/test CI workflow.
- Documented validation commands.

### Database Migration Foundation

Why consider it:

- The backend currently creates tables from SQLAlchemy metadata at startup.
- Authentication and user ownership are schema-changing work.
- A migration foundation would reduce risk before adding user-owned records.

Trade-offs:

- Infrastructure-heavy.
- May slow visible product progress.
- Needs careful handling of existing local SQLite data.

Possible deliverables:

- Migration tool decision.
- Initial migration baseline.
- Documented local migration workflow.
- Guidance for future schema changes.

## Planned But Unprioritized Product Areas

- Recruiter CRM
- Interview Tracker
- Learning Tracker
- Career Analytics
- AI Resume Optimizer
- AI Job Matching
- AI Career Assistant
- Deployment and production readiness

## Future Milestones

### Phase 5 Authentication Implementation

- Sign up.
- Sign in.
- Sign out.
- Session management.
- Protected routes.
- User ownership for profile, resume, and job records.
- Password reset or provider-managed equivalent.

### Testing And CI Expansion

- Backend endpoint tests for Profile, Resume Studio, Job Tracker, and Dashboard-relevant data behavior.
- Frontend component or workflow tests for core pages.
- Linting and formatting standards.
- CI checks for build, backend smoke, and test commands.

### Database Migration Expansion

- Migration-based schema changes.
- Documented database upgrade workflow.
- Production database planning when multi-user persistence is approved.

### Resume Studio Expansion

- Cleaner external API field names for resume sections.
- Resume versions.
- PDF/DOCX export.
- Resume templates.
- ATS scoring.
- Resume analytics.
- AI-assisted resume critique and rewriting with user approval.

### Job Tracker Expansion

- Backend query filtering and pagination.
- Status history.
- Follow-up dates and reminders.
- Recruiter/contact records.
- Interview records linked to jobs.
- Analytics and progress insights.
- AI job matching and job-specific resume tailoring.

### Dashboard Expansion

- Upcoming follow-ups.
- Interview schedule preview.
- Resume completion indicators.
- Progress insights and analytics.
- Authentication-aware dashboard summaries.
- Dedicated dashboard API endpoint when pagination, ownership, or analytics make frontend aggregation inappropriate.

### AI Resume Optimization

- Resume critique.
- Bullet rewriting suggestions.
- Role-specific keyword suggestions.
- Tone and impact improvements.
- Before/after comparison.
- User approval before applying AI edits.

### Job Matching

- Job description ingestion.
- Resume-to-job fit scoring.
- Skill gap analysis.
- Match explanations.
- Suggested resume adjustments.
- Saved match results.

### Interview Tracker

- Interview scheduling.
- Interview stages.
- Interview notes.
- Preparation checklist.
- Question bank.
- Follow-up reminders.
- Outcome tracking.

### Learning Tracker

- Learning goals tied to target roles or interview preparation.
- Progress notes and next steps.
- Links between learning priorities, projects, interviews, and job-search outcomes.

### Recruiter CRM

- Contact records.
- Company associations.
- Relationship notes.
- Communication history.
- Follow-up reminders.
- Contact-to-job linking.
- Tags or search.

### AI Career Assistant

- Conversational job search assistant.
- Context-aware resume and job guidance.
- Application strategy suggestions.
- Interview preparation support.
- Follow-up drafting.
- Career planning guidance.
- Personalized weekly action plans.

### Career Analytics

- Application conversion rates.
- Status-flow analysis.
- Resume and job-source performance.
- Recruiter, interview, and learning progress insights.

### Deployment And Production Readiness

- Hosting and deployment strategy.
- Environment and secret management.
- Production database plan.
- Production-readiness checklist.

## Sequencing Notes

- Authentication should precede production multi-user workflows and AI features that use private career data.
- Migration strategy should be considered before user-owned schema changes become substantial.
- Testing and CI can reduce risk before any broad cross-cutting sprint.
- AI features should remain reviewable and preserve original user content unless the user accepts changes.
- Product labels and roadmap claims should not imply domain capabilities that the data model does not support.
- Dashboard backend aggregation should wait until pagination, authentication, analytics, or cross-feature summaries justify it.
