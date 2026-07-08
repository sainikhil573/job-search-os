# Development Rules

These rules guide how Job Search OS should be built over time. They apply to every feature, fix, refactor, and documentation update.

## Workflow Standards

- Use small commits with focused, meaningful changes.
- Work on one feature per branch.
- Name branches clearly, such as `feature/resume-generator` or `fix/job-tracker-status`.
- Do not merge directly into `main` without review.
- Keep pull requests focused and easy to review.
- Update `PROJECT_STATUS.md` after every completed feature.
- Never remove previous history from `PROJECT_STATUS.md`; append updates chronologically.

## Code Quality

- Write clean, readable, maintainable code.
- Prefer simple solutions before introducing abstractions.
- Keep modules focused on one responsibility.
- Avoid duplicate logic.
- Reuse shared utilities when behavior is needed in more than one place.
- Use clear names for files, functions, variables, components, and database fields.
- Add comments only when they clarify non-obvious behavior.
- Keep formatting consistent across the repository.

## Architecture Standards

- Maintain a proper folder structure as the project grows.
- Keep frontend, backend, database, and AI concerns separated.
- Design modules so they can evolve independently.
- Avoid tightly coupling features that should be reusable.
- Define API contracts clearly before relying on them across features.
- Store shared types, schemas, and validation logic in predictable locations.
- Prefer modular architecture over large, hard-to-change files.

## Feature Development

- Build one complete feature at a time.
- Verify existing features still work before marking a task complete.
- Never break existing features intentionally.
- When behavior changes, document the reason.
- Add or update tests for meaningful logic once the test stack exists.
- Handle loading, error, empty, and success states for user-facing flows.
- Keep user experience consistent across related workflows.

## Documentation Standards

- Keep `README.md` useful for onboarding.
- Keep `PROJECT_ROADMAP.md` aligned with product direction.
- Keep `docs/architecture.md` aligned with implementation decisions.
- Record completed features and decisions in `PROJECT_STATUS.md`.
- Document setup steps whenever new tools or services are introduced.

## Data and Security

- Do not commit secrets, API keys, credentials, tokens, or private user data.
- Use environment variables for configuration.
- Validate user input on both client and server when applicable.
- Protect personally identifiable information, especially resumes, job history, and contact data.
- Follow least-privilege access patterns for authentication and authorization.

## Release Discipline

- Keep `main` stable.
- Prefer incremental releases over large, risky batches.
- Fix regressions before starting unrelated feature work.
- Track known issues honestly in `PROJECT_STATUS.md`.
- Do not leave unfinished application code on feature branches without documenting its state.
