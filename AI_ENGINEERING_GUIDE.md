# AI Engineering Guide

This handbook defines how AI-assisted engineering sessions should operate in Job Search OS. It is intended to keep the project professional, reviewable, and easy to maintain as the product grows.

## Project Vision

Job Search OS is an AI-powered operating system for job seekers. The product will help users manage resumes, applications, interviews, recruiter relationships, and career guidance across the full job search lifecycle.

The repository should be built as a durable product codebase, not as a prototype. Every change should improve the ability to ship reliable features, preserve context, and onboard future contributors.

## Engineering Philosophy

- Build small, complete increments.
- Prefer clear, boring solutions before introducing abstractions.
- Keep product, architecture, workflow, and decision history visible in version control.
- Maintain separation between frontend, backend, database, documentation, and future AI modules.
- Treat documentation as part of the product, especially while requirements and architecture are still evolving.
- Keep `main` stable through branch-based development and review.
- Leave the project easier to understand than it was before the change.

## Team Roles

### Product Owner

The Product Owner owns product direction and acceptance criteria.

Responsibilities:

- Define the user problem and business value.
- Prioritize milestones and feature scope.
- Confirm acceptance criteria before implementation begins.
- Review completed work from a user and product perspective.
- Decide whether a feature is ready to merge.

### Technical Lead

The Technical Lead owns architecture, quality standards, and technical direction.

Responsibilities:

- Maintain the architecture direction and engineering standards.
- Review tradeoffs before large implementation decisions.
- Ensure feature work fits the product roadmap.
- Protect long-term maintainability.
- Confirm the Definition of Done is satisfied before merge.

### Senior Software Engineer (Codex)

Codex acts as the implementation engineer during AI coding sessions.

Responsibilities:

- Inspect the repository before making changes.
- Work only on the active branch and requested scope.
- Keep edits focused and consistent with existing patterns.
- Update required documentation after meaningful changes.
- Run appropriate validation before finishing.
- Commit and push only when requested.
- Never merge unless explicitly instructed.

## Git Workflow

1. Start from an up-to-date `main` branch unless continuing approved branch work.
2. Create a focused branch for each feature, fix, refactor, documentation change, or engineering improvement.
3. Keep commits small enough to review.
4. Run relevant validation before committing.
5. Push the branch and open a pull request.
6. Merge only after review and acceptance.

Do not commit directly to `main`.

## Branch Naming Convention

Use lowercase, hyphenated branch names with a clear category prefix.

Recommended prefixes:

- `feature/` for user-facing product features.
- `fix/` for bug fixes.
- `docs/` for documentation-only changes.
- `chore/` for maintenance work.
- `refactor/` for behavior-preserving code restructuring.
- `test/` for test-only improvements.

Examples:

- `feature/profile-module`
- `docs/engineering-guide`
- `fix/profile-empty-state`
- `chore/backend-dependencies`

Branches such as `feature/engineering-guide` may be used for engineering-quality improvements when explicitly defined for that purpose.

## Commit Message Convention

Use concise imperative commit messages.

Format:

```text
<verb> <specific outcome>
```

Examples:

- `Add profile module documentation`
- `Document engineering workflow`
- `Fix empty profile response handling`
- `Update backend dependency list`

Guidelines:

- Use present-tense verbs such as `Add`, `Update`, `Fix`, `Document`, `Refactor`, or `Remove`.
- Describe the outcome, not the activity.
- Avoid vague messages such as `changes`, `updates`, or `work in progress`.

## Pull Request Process

Every pull request should include:

- Summary of the change.
- Reason for the change.
- Files or areas affected.
- Validation performed.
- Screenshots or manual QA notes for frontend changes.
- Known limitations or follow-up work.
- Documentation updates made, or a clear explanation if none were needed.

Pull requests should remain focused. If unrelated work is discovered, create a separate branch or document it as follow-up.

## Documentation Standards

Documentation should be accurate, reviewable, and close to the work it describes.

Repository-level documents:

- `README.md` explains local setup and basic project orientation.
- `PROJECT_STATUS.md` tracks concise current state and immediate next action.
- `docs/PROJECT_OVERVIEW.md` tracks product vision, users, architecture, major features, and limitations.
- `docs/ROADMAP.md` tracks completed, current, and future milestones.
- `docs/DECISIONS.md` records major product, architecture, and workflow decisions.
- `CHANGELOG.md` records merged feature history using semantic versioning.
- `AGENTS.md` defines permanent Codex operating rules.
- `DEVELOPMENT_RULES.md` defines baseline engineering rules.
- `AI_ENGINEERING_GUIDE.md` defines how AI coding sessions should operate.
- `QA_CHECKLIST.md` provides reusable validation coverage.
- `docs/architecture.md` documents technical architecture.
- `docs/features/` documents feature-specific requirements and behavior.

Documentation rules:

- Update docs in the same branch as the related change.
- Keep historical logs append-only unless correcting a factual error.
- Prefer concrete facts over vague summaries.
- Record dates in `YYYY-MM-DD` format.
- Link related files with relative paths when useful.
- Do not claim validation was performed unless it actually was.

## Definition of Done

A change is done when:

- The requested scope is complete.
- Existing functionality was not intentionally broken.
- Relevant application, documentation, or workflow files were updated.
- Relevant validation was run and results were recorded.
- Known issues or limitations were documented.
- The branch has a clear commit history.
- The pull request is ready for review.

For documentation-only changes:

- No application code was modified.
- The new or updated documents are internally consistent.
- References to project phases, branches, features, and validation are accurate.

## Environment Validation

Before application work is accepted, verify the relevant environment.

Frontend validation may include:

- `npm install`
- `npm run dev`
- `npm run build`
- Browser smoke testing at the documented local URL.

Backend validation may include:

- Creating and activating a virtual environment.
- `pip install -r requirements.txt`
- Starting the FastAPI server with Uvicorn.
- Calling `GET /health`.
- Exercising changed API endpoints.

Database validation may include:

- Confirming tables are created or migrations run.
- Verifying create, read, update, and delete behavior as applicable.
- Confirming data persists after refresh or restart when required.

Documentation-only validation may include:

- Reviewing changed Markdown files for consistency.
- Checking links and file references.
- Confirming no application files were modified.

## Manual QA Process

Manual QA should be specific to the changed behavior.

Recommended process:

1. Start the required local services.
2. Confirm the app loads without startup errors.
3. Exercise the changed workflow from a user perspective.
4. Verify loading, empty, success, and error states when applicable.
5. Refresh the browser or restart services when persistence matters.
6. Check terminal output, API responses, and browser console for errors.
7. Record the exact validation performed in `PROJECT_STATUS.md` or the pull request.

Use `QA_CHECKLIST.md` as the reusable baseline.

## Code Review Checklist

Reviewers should check:

- The change matches the requested scope.
- The implementation follows existing project patterns.
- The code is readable and maintainable.
- API contracts are clear and documented when changed.
- Data handling protects private job search information.
- Error, loading, empty, and success states are handled where relevant.
- Tests or manual QA are appropriate for the risk.
- Documentation reflects the completed work.
- No unrelated files or application areas were changed.

## Folder Structure Standards

Current top-level structure:

```text
job-search-os/
  backend/
  docs/
    DECISIONS.md
    PROJECT_OVERVIEW.md
    ROADMAP.md
    architecture.md
    features/
  frontend/
  AGENTS.md
  AI_ENGINEERING_GUIDE.md
  CHANGELOG.md
  CONTRIBUTING.md
  DECISIONS.md
  DEVELOPMENT_RULES.md
  PROJECT_ROADMAP.md
  PROJECT_STATUS.md
  QA_CHECKLIST.md
  README.md
```

Documentation structure:

```text
docs/
  DECISIONS.md
  PROJECT_OVERVIEW.md
  ROADMAP.md
  architecture.md
  features/
    dashboard.md
    job-tracker.md
    profile.md
    resume-studio.md
```

Standards:

- Keep feature documentation in `docs/features/`.
- Keep repository process documents at the repository root.
- Keep frontend code under `frontend/`.
- Keep backend code under `backend/`.
- Avoid adding broad catch-all folders without a clear ownership purpose.

## Naming Conventions

General:

- Use clear, descriptive names.
- Prefer lowercase kebab-case for Markdown feature files.
- Use branch names with category prefixes.
- Keep headings concise and scannable.

Frontend:

- Use PascalCase for React components.
- Use camelCase for JavaScript variables and functions.
- Use feature-oriented file names when modules grow.

Backend:

- Use snake_case for Python files, functions, variables, and database fields.
- Use PascalCase for Python classes and Pydantic models.
- Keep route names aligned with API resources.

Documentation:

- Use uppercase root documentation names when they represent standing project records.
- Use lowercase feature document names inside `docs/features/`.

## Coding Standards

Coding standards are defined in `DEVELOPMENT_RULES.md` and expanded here for AI-assisted work.

Expectations:

- Read existing files before editing.
- Keep changes scoped to the task.
- Avoid unrelated refactors.
- Add comments only for non-obvious behavior.
- Reuse existing patterns before introducing new libraries or frameworks.
- Validate changed behavior before reporting completion.
- Do not commit secrets, credentials, tokens, private user data, or generated local databases.

## Responsibilities for Updating Project Records

### `PROJECT_STATUS.md`

Update when:

- A phase, sprint, or milestone changes.
- A feature is completed or merged.
- Manual QA is performed.
- Known issues are discovered or resolved.
- Current or upcoming work changes.

Keep chronological history append-only.

### `docs/DECISIONS.md`

Update when:

- A major product, architecture, workflow, or tooling decision is made.
- A decision affects future contributors or AI coding sessions.
- Alternatives, reasoning, and consequences should be preserved.

Each decision should include date, decision, context, alternatives, reasoning, consequences, and status.

### `CHANGELOG.md`

Update after features are merged.

Use semantic versioning:

- `MAJOR` for incompatible or product-changing releases.
- `MINOR` for completed features and milestones.
- `PATCH` for fixes and small improvements.

Each entry should include:

- Version.
- Date when known.
- Summary.
- Added, changed, fixed, or documented items.

Do not record unmerged work as released.
