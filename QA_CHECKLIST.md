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

## Dashboard Integration Automated Verification

- [ ] Frontend production build succeeds with `npm run build`.
- [ ] Backend compile/import smoke check succeeds.
- [ ] `git diff --check` passes.
- [ ] Changed files contain no merge-conflict markers.
- [ ] Changed files contain no accidental debug logging.
- [ ] Changed files contain no hidden or suspicious Unicode.
- [ ] Complete diff against `main` is limited to Dashboard Integration scope.

## Dashboard Integration Manual QA

- [ ] Dashboard loads from the existing navigation.
- [ ] Dashboard shows a loading state while Job Tracker data is loading.
- [ ] Dashboard shows an API error state with a retry action when jobs cannot be loaded.
- [ ] Dashboard shows a no-job state when no job records exist.
- [ ] Dashboard shows an all-archived state when every job is archived.
- [ ] Active job count includes non-archived rejected jobs.
- [ ] Archived job count includes archived jobs.
- [ ] Supported status cards always render, including zero values.
- [ ] Unknown or legacy statuses do not crash the Dashboard or create extra status cards.
- [ ] Recently Updated Jobs shows up to five records with company, job title, status, and update date when available.
- [ ] Missing company, title, or update date values show readable fallback text.
- [ ] Dashboard links navigate to Job Tracker.
- [ ] Dashboard remains usable at mobile and desktop viewport widths.
- [ ] Candidate Profile, Resume Studio, and Job Tracker still load after Dashboard changes.

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

## Job Tracker Manual QA

- [ ] Backend starts successfully.
- [ ] Frontend starts successfully.
- [ ] Dashboard still loads.
- [ ] Candidate Profile still loads and saves.
- [ ] Resume Studio still loads and persists data.
- [ ] Job Tracker page loads.
- [ ] Empty state appears when no jobs exist.
- [ ] Confirm blank or whitespace-only company and job title values show a validation error with no success message.
- [ ] Confirm invalid create/update attempts preserve the entered form data and do not mutate existing jobs.
- [ ] Create a job with company and job title.
- [ ] Save the job and confirm it appears in the list.
- [ ] Refresh the page and confirm the job persists.
- [ ] Edit the job.
- [ ] Refresh and confirm updated data persists.
- [ ] Change job status.
- [ ] Refresh and confirm status persists.
- [ ] Archive the job.
- [ ] Confirm the archived job disappears from the active list.
- [ ] Confirm the archive filter reads "Include archived jobs."
- [ ] Enable "Include archived jobs" and confirm active and archived jobs can be seen.
- [ ] Unarchive the job.
- [ ] Confirm no app-related console errors.
- [ ] Confirm no backend tracebacks.

## Manual QA Result - Resume Studio MVP

- Backend started: Pass.
- Frontend started: Pass.
- Dashboard smoke test: Pass.
- Candidate Profile regression: Pass.
- Resume Studio page loads: Pass.
- Create resume: Pass.
- Save resume API: Pass.
- Refresh persistence: Pass.
- Update resume: Pass.
- Second refresh persistence: Pass.
- Navigation regression: Pass.
- Browser console errors: No app-related errors.
- Backend errors: No.
- Hidden Unicode scan: Pass.
- Frontend build: Pass.
- Backend py_compile: Pass.

Notes:

- Chrome extension console errors were observed but confirmed unrelated to the application.
- Resume data persisted after refresh.
- Candidate Profile continued working after Resume Studio changes.

## Sprint 2.5 Verification Results

- Backend py_compile: Pass.
- Frontend npm run build: Pass.
- Hidden Unicode scan: Pass.
- Git hygiene check: Pass.
- Existing automated backend tests: Not available.
- Existing automated frontend tests: Not available.
- Manual QA status: Passed previously by Product Owner.

Known technical debt:

- Add backend endpoint tests for Resume API.
- Add frontend component and smoke tests.
- Consider cleaner API response field names instead of exposing `*_json`.
- Consider normalized resume section tables when versioning or analytics require them.

## Sprint 3 Job Tracker MVP Verification Results

- Backend py_compile: Pass.
- Frontend npm run build: Pass.
- Invalid create/update feedback behavior: Pass.
- Archive filter wording clarified to "Include archived jobs": Pass.
- Hidden Unicode scan: Pass.
- Git hygiene check: Pass.
- Existing automated backend tests: Not available.
- Existing automated frontend tests: Not available.

Known technical debt:

- Add backend endpoint tests for Job Tracker API.
- Add frontend component and workflow tests.
- Add authentication and job ownership.
- Add richer search and filtering.
- Add status history when analytics or audit needs require it.
- Add related recruiter, contact, interview, reminder, and AI matching tables in future scoped sprints.

## Release Readiness

- [ ] The Definition of Done is satisfied.
- [ ] Known issues are documented.
- [ ] Follow-up work is clearly identified.
- [ ] Pull request description includes summary, validation, and documentation notes.
- [ ] Reviewer can understand the change without private context.
- [ ] Version history is updated after merge.
