# Contributing

This guide explains how to contribute to Job Search OS in a consistent, reviewable way.

## Create a Branch

Start each change on a focused branch.

Recommended branch prefixes:

- `feature/` for user-facing product features.
- `fix/` for bug fixes.
- `docs/` for documentation-only changes.
- `chore/` for maintenance tasks.
- `refactor/` for behavior-preserving code restructuring.
- `test/` for test-only improvements.

Examples:

```text
feature/profile-module
docs/engineering-guide
fix/profile-empty-state
```

Keep one branch focused on one outcome. Do not commit directly to `main`.

## Submit a Pull Request

Before opening a pull request:

- Confirm the branch contains only intended changes.
- Run relevant validation.
- Update documentation that is affected by the change.
- Write a clear commit message.
- Push the branch to the remote.

Pull requests should include:

- Summary of the change.
- Why the change is needed.
- Validation performed.
- Documentation updated.
- Known issues or follow-up work.

Do not merge a pull request until review is complete.

## Coding Standards

Follow `DEVELOPMENT_RULES.md` and `AI_ENGINEERING_GUIDE.md`.

General expectations:

- Keep changes small and focused.
- Prefer readable, maintainable code.
- Follow existing project patterns.
- Avoid unrelated refactors.
- Keep frontend, backend, database, and AI concerns separated.
- Handle loading, empty, success, and error states for user-facing workflows.
- Do not commit secrets, credentials, tokens, private user data, local databases, or generated environment files.

Frontend expectations:

- Use React patterns already present in the project.
- Keep components and state clear.
- Preserve responsive behavior.
- Validate with the Vite development server and production build when frontend code changes.

Backend expectations:

- Use FastAPI, Pydantic, SQLAlchemy, and existing backend patterns.
- Keep route handlers readable.
- Validate request and response shapes.
- Keep database models and schemas aligned.
- Verify changed API endpoints manually until automated tests are introduced.

## Documentation Expectations

Documentation is part of the Definition of Done.

Update the relevant files when behavior, architecture, workflow, or status changes:

- `README.md` for setup and onboarding changes.
- `PROJECT_STATUS.md` for current phase, milestones, recent merges, known issues, and QA notes.
- `DECISIONS.md` for major product, architecture, workflow, or tooling decisions.
- `CHANGELOG.md` for merged features and releases.
- `docs/architecture.md` for architecture changes.
- `docs/features/` for feature-specific behavior and acceptance criteria.

Keep historical records append-only unless correcting a factual error.

## Review Process

Reviewers should check:

- The change matches the requested scope.
- The branch does not contain unrelated edits.
- The implementation follows existing patterns.
- The validation is appropriate for the risk.
- Documentation is accurate.
- Known issues are documented.
- The pull request can be safely merged into `main`.

If issues are found, address them on the same branch before merge.
