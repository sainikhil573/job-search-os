# Project Roadmap

Job Search OS will be built in phases. Each phase should be completed, reviewed, and documented before moving to the next major product area.

## Phase 0: Project Setup

### Goal

Establish the foundation for the project before writing application code.

### Features

- Project status tracking
- Development rules
- Product roadmap
- Initial architecture documentation
- Documentation folder structure

### Estimated Complexity

Low

### Dependencies

- Repository access
- Initial product vision

### Completion Criteria

- `PROJECT_STATUS.md` exists and includes required tracking sections.
- `DEVELOPMENT_RULES.md` exists and defines engineering standards.
- `PROJECT_ROADMAP.md` exists and describes all planned phases.
- `docs/architecture.md` exists and documents the planned technical architecture.
- Documentation is committed on a dedicated feature branch.

## Phase 1: Core Infrastructure

### Goal

Create the initial application foundation for frontend, backend, data storage, configuration, and developer tooling.

### Features

- Frontend project scaffolding
- Backend project scaffolding
- Environment configuration
- Base folder structure
- Shared types or schemas
- Linting and formatting
- Initial test setup
- Local development instructions

### Estimated Complexity

Medium

### Dependencies

- Phase 0 documentation
- Framework decisions
- Runtime and package manager decisions
- Database selection

### Completion Criteria

- Application can run locally.
- Frontend and backend have clear entry points.
- Project structure matches documented architecture.
- Basic health check or smoke test exists.
- Setup instructions are documented.

## Phase 2: Resume Generator

### Goal

Allow users to create and manage structured resumes inside the system.

### Features

- Resume profile form
- Work experience entries
- Education entries
- Skills section
- Projects section
- Resume preview
- Resume version storage
- Basic export path

### Estimated Complexity

Medium

### Dependencies

- Core frontend and backend infrastructure
- Database schema
- User data model

### Completion Criteria

- Users can create, edit, view, and save a resume.
- Resume data persists in the database.
- Resume preview reflects saved data.
- Basic validation is in place.

### Release 0.5 / Sprint 2: Resume Studio MVP

Status: Completed

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

### Sprint 2.5: Resume Studio Hardening

Status: Completed

Scope:

- Backend compile verification.
- Frontend production build verification.
- Hidden Unicode scan.
- Git hygiene check.
- Documentation cleanup.
- Manual QA evidence recorded.
- Line-ending consistency configuration if missing.
- Test coverage gaps identified.

### Sprint 3: Job Tracker MVP

Status: Implemented on `feature/job-tracker-mvp`; pending review and Product Owner manual QA.

Scope:

- Create job records.
- View saved jobs.
- Edit job records.
- Update job status.
- Archive and unarchive jobs.
- Persist jobs in SQLite.
- Provide basic loading, empty, success, and error states.
- Document the feature and manual QA checklist.

Deferred:

- AI job matching.
- AI resume tailoring.
- ATS scoring.
- Auto-apply.
- Recruiter CRM.
- Interview tracker.
- Analytics dashboard.
- Job scraping.
- Automated reminders.
- Resume-job comparison.
- Dashboard count integration.

## Phase 3: Job Tracker

### Goal

Help users organize job applications and track every stage of the search.

### Features

- Add job applications
- Track company, title, location, compensation, source, and notes
- Application status workflow
- Important dates and deadlines
- Search and filtering
- Basic reminders

### Estimated Complexity

Medium

### Dependencies

- Core infrastructure
- Database schema
- Resume or user profile foundation

### Completion Criteria

- Users can create, update, delete, search, and filter job applications.
- Status changes are saved reliably.
- Job records support notes and key dates.
- Existing resume data remains unaffected.

## Phase 4: Dashboard

### Goal

Give users a clear overview of job search progress and next actions.

### Features

- Application pipeline summary
- Recent activity
- Upcoming follow-ups
- Interview schedule preview
- Resume completion indicators
- Job search progress metrics

### Estimated Complexity

Medium

### Dependencies

- Job tracker data
- Resume data
- Core UI patterns

### Completion Criteria

- Dashboard displays accurate summary data.
- Users can navigate from dashboard sections to underlying records.
- Empty states are useful for new users.
- Metrics update as source data changes.

## Phase 5: Authentication

### Goal

Secure user accounts and protect private job search data.

### Features

- Sign up
- Sign in
- Sign out
- Session management
- Protected routes
- User ownership for records
- Password reset or provider-managed equivalent

### Estimated Complexity

High

### Dependencies

- Authentication provider decision
- Database user model
- Backend security patterns

### Completion Criteria

- Users can authenticate reliably.
- Private data is scoped to the authenticated user.
- Protected routes cannot be accessed anonymously.
- Authentication behavior is documented.

## Phase 6: AI Resume Optimization

### Goal

Use AI to help users improve resumes for clarity, relevance, and target roles.

### Features

- Resume critique
- Bullet rewriting suggestions
- Role-specific keyword suggestions
- Tone and impact improvements
- Before-and-after comparison
- User approval before applying AI edits

### Estimated Complexity

High

### Dependencies

- Resume generator
- Authentication
- AI provider integration
- Prompt and response safety guidelines

### Completion Criteria

- Users can request AI suggestions for resume content.
- AI outputs are reviewable before saving.
- Original resume content is preserved unless the user accepts changes.
- AI interactions are logged or traceable enough for debugging.

## Phase 7: Job Matching

### Goal

Match user profiles and resumes against job opportunities.

### Features

- Job description ingestion
- Resume-to-job fit scoring
- Skill gap analysis
- Match explanation
- Suggested resume adjustments
- Saved matched jobs

### Estimated Complexity

High

### Dependencies

- Resume data
- Job tracker
- AI resume optimization foundation
- Matching criteria design

### Completion Criteria

- Users can compare a resume against a job description.
- The system returns a match score with understandable reasoning.
- Suggested improvements are tied to the job requirements.
- Matching results can be saved or referenced later.

## Phase 8: Interview Tracker

### Goal

Help users prepare for and manage interviews.

### Features

- Interview scheduling
- Interview stages
- Interview notes
- Preparation checklist
- Question bank
- Follow-up reminders
- Outcome tracking

### Estimated Complexity

Medium

### Dependencies

- Job tracker
- Dashboard
- Authentication

### Completion Criteria

- Interviews can be linked to job applications.
- Users can track upcoming and completed interviews.
- Preparation notes and outcomes persist.
- Dashboard reflects upcoming interview activity.

## Phase 9: Recruiter CRM

### Goal

Give users a lightweight CRM for recruiters, hiring managers, referrals, and networking contacts.

### Features

- Contact records
- Company associations
- Relationship notes
- Communication history
- Follow-up reminders
- Contact-to-job linking
- Basic tagging

### Estimated Complexity

Medium

### Dependencies

- Job tracker
- Authentication
- Dashboard reminder patterns

### Completion Criteria

- Users can manage job search contacts.
- Contacts can be linked to jobs and companies.
- Follow-ups appear in relevant views.
- Communication notes are searchable.

## Phase 10: AI Career Assistant

### Goal

Provide an AI assistant that helps users plan, execute, and improve their job search.

### Features

- Conversational job search assistant
- Resume and job context awareness
- Application strategy suggestions
- Interview preparation support
- Follow-up drafting
- Career planning guidance
- Personalized weekly action plans

### Estimated Complexity

Very High

### Dependencies

- Resume generator
- Job tracker
- Dashboard
- Authentication
- AI resume optimization
- Job matching
- Interview tracker
- Recruiter CRM

### Completion Criteria

- Assistant can use relevant user context with permission.
- Assistant provides actionable, personalized guidance.
- AI responses respect privacy and safety requirements.
- Users can act on assistant suggestions inside the product.
- Assistant behavior is documented and testable.
