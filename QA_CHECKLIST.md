# QA Checklist

Use this checklist before marking a branch ready for review. Not every item applies to every change, but skipped items should be intentional.

## Backend

- [ ] Backend dependencies install successfully.
- [ ] FastAPI server starts without errors.
- [ ] `GET /health` returns the expected healthy response.
- [ ] Changed endpoints return the expected status codes.
- [ ] Request validation behaves as expected.
- [ ] Error responses are understandable and consistent.
- [ ] No unexpected backend exceptions appear in logs.

## Environment

- [ ] Required environment variables are documented.
- [ ] Local setup instructions are accurate.
- [ ] New dependencies are recorded in the appropriate manifest file.
- [ ] The project can be started from a clean local setup.
- [ ] No secrets, tokens, credentials, private data, or local-only artifacts are committed.

## Frontend

- [ ] Frontend dependencies install successfully.
- [ ] Vite development server starts without errors.
- [ ] Production build succeeds when frontend code changed.
- [ ] Changed pages render at supported viewport sizes.
- [ ] Loading, empty, success, and error states are covered where applicable.
- [ ] Forms preserve user input as expected.
- [ ] Browser console has no unexpected errors.

## Database

- [ ] Tables, migrations, or schema changes are documented.
- [ ] Data can be created, read, updated, and deleted where applicable.
- [ ] Required relationships and foreign keys behave as expected.
- [ ] Data persists after refresh or service restart when required.
- [ ] Existing data is not unintentionally lost.

## Documentation

- [ ] `README.md` remains accurate for local setup.
- [ ] `PROJECT_STATUS.md` reflects current work, milestones, known issues, and QA notes.
- [ ] `DECISIONS.md` records major decisions.
- [ ] `CHANGELOG.md` is updated for merged features.
- [ ] Feature documentation is updated under `docs/features/` when behavior changes.
- [ ] Markdown headings, file references, and terminology are consistent.

## Git

- [ ] Work is on the correct branch.
- [ ] Branch name follows the documented convention.
- [ ] `git status` contains only intended files.
- [ ] Commit messages are concise and outcome-focused.
- [ ] The branch is pushed to the remote.
- [ ] No merge is performed unless explicitly approved.

## Manual Testing

- [ ] The primary user workflow was exercised end to end.
- [ ] Relevant edge cases were checked.
- [ ] Refresh or restart behavior was tested when persistence matters.
- [ ] API responses were checked when backend behavior changed.
- [ ] Browser console and server logs were reviewed.
- [ ] Manual QA results were recorded in project documentation or the pull request.

## Resume Studio Manual QA

- [ ] Open the Resume Studio page from the existing navigation.
- [ ] Confirm an empty base resume form loads before first save.
- [ ] Enter title, target role, professional summary, skills, experience, projects, education, and certifications.
- [ ] Save the resume and confirm success messaging.
- [ ] Refresh the page and confirm the saved resume data still appears.
- [ ] Edit at least one top-level field and one repeatable section item.
- [ ] Save updates, refresh again, and confirm the updated data persists.
- [ ] Confirm `GET /api/resume`, `POST /api/resume`, and `PUT /api/resume/{resume_id}` return the expected payloads.
- [ ] Confirm Candidate Profile pages and APIs still load after Resume Studio changes.

## Release Readiness

- [ ] The Definition of Done is satisfied.
- [ ] Known issues are documented.
- [ ] Follow-up work is clearly identified.
- [ ] Pull request description includes summary, validation, and documentation notes.
- [ ] Reviewer can understand the change without private context.
- [ ] Version history is updated after merge.
