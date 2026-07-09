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
