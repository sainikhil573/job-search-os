# Decisions Log

This log tracks major product, architecture, and workflow decisions for Job Search OS. Each decision should preserve context, alternatives, reasoning, consequences, and status.

## 2026-07-08: Use React + Vite for frontend

- Date: 2026-07-08
- Decision: Use React + Vite for the frontend application.
- Context: Job Search OS needs a modern frontend foundation that supports a responsive product interface, modular feature development, and fast local iteration.
- Alternatives considered: Next.js, plain React without Vite, Vue, Svelte.
- Reasoning: React has a large ecosystem and strong hiring-market familiarity. Vite provides fast development feedback and a simple setup for an MVP without requiring server-side rendering decisions upfront.
- Consequences: The frontend will be optimized for client-side application workflows first. Server-side rendering, if needed, can be revisited later.
- Status: Accepted

## 2026-07-08: Use FastAPI for backend

- Date: 2026-07-08
- Decision: Use FastAPI for the backend application.
- Context: The backend will need clear API boundaries, validation, authentication integration, database access, and future AI service orchestration.
- Alternatives considered: Django, Flask, Express, NestJS.
- Reasoning: FastAPI provides strong typing, automatic API documentation, async support, and a clean path for Python-based AI integrations.
- Consequences: Backend development will use Python. API schemas and validation can become a stable contract between frontend and backend.
- Status: Accepted

## 2026-07-08: Use SQLite for MVP database

- Date: 2026-07-08
- Decision: Use SQLite as the MVP database.
- Context: The MVP needs reliable local persistence with minimal operational overhead while core product workflows are still being shaped.
- Alternatives considered: PostgreSQL, MySQL, hosted database services, local JSON files.
- Reasoning: SQLite is simple to set up, easy to develop against locally, and sufficient for an early single-user or small-scale MVP.
- Consequences: The schema should be designed with future migration in mind. Production scaling may require moving to PostgreSQL or another managed database later.
- Status: Accepted

## 2026-07-08: Use markdown documentation for project tracking

- Date: 2026-07-08
- Decision: Use markdown files for project tracking and planning.
- Context: The project needs lightweight, version-controlled records for status, roadmap, architecture, rules, and decisions before application code exists.
- Alternatives considered: Issue tracker only, project management software, wiki pages, database-backed documentation.
- Reasoning: Markdown documentation is easy to review, diff, commit, and maintain alongside code.
- Consequences: Documentation updates must be part of normal development workflow. As the project grows, markdown may be supplemented by issues, pull requests, or generated docs.
- Status: Accepted

## 2026-07-08: Use branch-based Git workflow with pull request review before merge

- Date: 2026-07-08
- Decision: Use a branch-based Git workflow with pull request review before merging into `main`.
- Context: Job Search OS should keep `main` stable while features are developed incrementally.
- Alternatives considered: Direct commits to `main`, trunk-based development without review, long-lived release branches.
- Reasoning: Feature branches and pull request review provide a clear history, reduce accidental regressions, and make decisions visible before merge.
- Consequences: Each feature should have a focused branch and small commits. Work should not be merged until reviewed.
- Status: Accepted

## 2026-07-08: Build MVP first before advanced AI automation

- Date: 2026-07-08
- Decision: Build the MVP product workflows before advanced AI automation.
- Context: Job Search OS will eventually include AI-powered resume optimization, job matching, and career assistant features, but these should depend on stable core data and user workflows.
- Alternatives considered: Build AI assistant first, build all features in parallel, prioritize automation before manual workflows.
- Reasoning: A useful MVP creates the data model, workflow clarity, and user trust required for effective AI automation later.
- Consequences: Early phases will prioritize resume generation, job tracking, dashboard foundations, authentication, and stable data handling before advanced AI features.
- Status: Accepted

## 2026-07-09: Introduce engineering process documentation

- Date: 2026-07-09
- Decision: Add permanent engineering process documentation for AI-assisted development, QA, contribution workflow, changelog management, and feature documentation.
- Context: Job Search OS is being built as a professional software product. The repository now has application foundation work and a profile module, so future work needs consistent standards for branch workflow, pull requests, validation, documentation updates, and release history.
- Alternatives considered: Continue relying only on `DEVELOPMENT_RULES.md`, keep process expectations informal, defer process documentation until the project is larger.
- Reasoning: AI-assisted coding sessions need explicit, durable operating instructions so each branch preserves context, avoids scope drift, validates changes consistently, and updates project records. Adding these documents early reduces review friction and makes the repository easier to maintain as more modules are added.
- Consequences: Contributors and AI coding sessions should use `AI_ENGINEERING_GUIDE.md`, `QA_CHECKLIST.md`, and `CONTRIBUTING.md` before marking work complete. Merged feature history should be maintained in `CHANGELOG.md`, and feature-specific behavior should be documented under `docs/features/`.
- Status: Accepted

## 2026-07-09: Store Resume Studio MVP content in structured JSON fields

- Date: 2026-07-09
- Decision: Store the Resume Studio MVP base resume as one `resumes` record with major resume sections persisted in structured JSON fields.
- Context: Sprint 2A and 2B need a usable Resume Studio foundation before AI optimization, ATS scoring, document export, or multiple resume versions are introduced.
- Alternatives considered: Store the entire resume as one text blob, fully normalize every resume section into separate tables, build resume versioning immediately.
- Reasoning: A text blob would make future editing, previewing, AI suggestions, and section-level updates harder. Fully normalized tables and versioning are more structure than the MVP currently needs. JSON section fields preserve structured content while keeping the first base-resume workflow small and easy to extend.
- Consequences: The API exposes section arrays such as `skills_json`, `experience_json`, `projects_json`, `education_json`, and `certifications_json`. This is acceptable for the MVP, but the external API contract should be revisited before AI optimization, versioning, or export work. Future work may map these fields to cleaner response names such as `skills`, `experience`, `projects`, `education`, and `certifications`, and can migrate specific sections into relational tables or add version records if product needs require it.
- Status: Accepted

## 2026-07-11: Use one job applications table with archive-first deletion

- Date: 2026-07-11
- Decision: Job Tracker MVP uses one normalized `job_applications` table with archive-first deletion.
- Context: Sprint 3 needs a manual job tracking foundation that can support later AI job matching, job-specific resume generation, recruiter CRM, interview tracking, and analytics without building those advanced workflows yet.
- Alternatives considered: Fully normalize companies and contacts immediately, add status history records immediately, hard-delete jobs, store jobs as unstructured JSON.
- Reasoning: One job application table keeps the MVP simple while preserving future extensibility. An `archived` boolean protects job-search history better than hard deletion and keeps archived records available for later analytics or restoration.
- Consequences: Company/contact normalization, status history, reminders, interviews, and AI matching are deferred. Future sprints can add related tables that reference `job_applications.id`.
- Status: Accepted

## 2026-07-12: Aggregate Dashboard Job Tracker summaries in the frontend for Sprint 4

- Date: 2026-07-12
- Decision: Sprint 4 Dashboard Integration reuses `GET /api/jobs?include_archived=true` and performs lightweight job summary aggregation in the frontend.
- Context: The Dashboard needs real persisted Job Tracker data for active jobs, archived jobs, active-job status counts, and recently updated jobs. The current product is an early local, single-user MVP without pagination, authentication, multi-user ownership, or analytics-scale data.
- Alternatives considered: Add a dedicated Dashboard summary endpoint now, introduce backend aggregation services, add broader analytics models, or continue showing static placeholder metrics.
- Reasoning: The existing jobs endpoint already returns the fields needed for the approved Dashboard MVP. Frontend aggregation avoids premature API surface and keeps the sprint focused while still replacing misleading static Dashboard metrics with real persisted data.
- Consequences: Dashboard remains coupled to the existing job response shape for this MVP. A dedicated summary endpoint should be reconsidered when pagination, authentication, multi-user ownership, cross-feature summaries, or analytics needs make client-side aggregation inappropriate.
- Status: Accepted
