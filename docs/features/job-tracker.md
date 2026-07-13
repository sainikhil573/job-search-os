# Job Tracker

The Job Tracker MVP gives a user a manual way to create, view, edit, status-update, archive, unarchive, and persist job application records.

Status: Sprint 3 MVP completed and merged to `main` through PR #8.

## Scope

Included in Sprint 3:

- Create job records.
- View saved active jobs.
- Edit job details.
- Update job status.
- Archive and unarchive jobs.
- Optionally include archived jobs in the list.
- Persist jobs through the backend API and local SQLite database.
- Basic loading, empty, success, and error states.

Not included yet:

- AI job matching.
- AI resume tailoring.
- ATS scoring.
- Auto-apply.
- Recruiter CRM.
- Interview tracker.
- Email parsing.
- Chrome extension.
- Analytics dashboard.
- Job scraping.
- Automated reminders.
- Resume-job comparison.
- Deeper Dashboard analytics beyond the Sprint 4 summary integration.

## Frontend

The Job Tracker page is available at `/job-tracker`.

Frontend code is organized under:

- `frontend/src/pages/JobTracker.jsx`
- `frontend/src/components/jobs/`
- `frontend/src/services/jobApi.js`

The page loads jobs on mount, creates jobs with `POST /api/jobs`, updates details with `PUT /api/jobs/{job_id}`, updates status with `PATCH /api/jobs/{job_id}/status`, and archives or unarchives jobs with `PATCH /api/jobs/{job_id}/archive`.

The frontend trims `company_name` and `job_title` before submission. Blank or whitespace-only required values show a validation error, do not call the API, preserve the form data for correction, and do not show a success message.

## API

Base resource: `/api/jobs`

### `GET /api/jobs`

Returns job records.

Default behavior:

- Returns non-archived jobs.

Optional query parameter:

- `include_archived=true` returns active and archived jobs.

### `GET /api/jobs/{job_id}`

Returns one job by id.

- Returns `404 Not Found` if the job does not exist.

### `POST /api/jobs`

Creates a job.

- Requires `company_name`.
- Requires `job_title`.
- Trims leading and trailing whitespace from `company_name` and `job_title`.
- Returns `422 Unprocessable Entity` if either required field is blank after trimming.
- Defaults `status` to `saved`.
- Defaults `archived` to `false`.
- Returns `201 Created` with the saved job.

### `PUT /api/jobs/{job_id}`

Updates job details.

- Requires `company_name`.
- Requires `job_title`.
- Trims leading and trailing whitespace from `company_name` and `job_title`.
- Returns `422 Unprocessable Entity` if either required field is blank after trimming.
- Returns the saved job.
- Returns `404 Not Found` if the job does not exist.

### `PATCH /api/jobs/{job_id}/status`

Updates only the job status.

Allowed status values:

- `saved`
- `applied`
- `interviewing`
- `offer`
- `rejected`

Returns `404 Not Found` if the job does not exist.

### `PATCH /api/jobs/{job_id}/archive`

Archives or unarchives a job.

Request body:

```json
{
  "archived": true
}
```

Returns `404 Not Found` if the job does not exist.

## Database

The Job Tracker MVP uses SQLite through SQLAlchemy.

Primary table:

- `job_applications`

Fields:

- `id`
- `company_name`
- `job_title`
- `location`
- `workplace_type`
- `employment_type`
- `job_url`
- `source`
- `status`
- `priority`
- `salary_range`
- `job_description`
- `notes`
- `date_saved`
- `date_applied`
- `follow_up_date`
- `archived`
- `created_at`
- `updated_at`

The MVP uses one normalized job application table and archive-first deletion. This keeps the workflow small while preserving future paths for analytics, AI job matching, recruiter CRM, interview tracking, and job-specific resume generation.

## Acceptance Criteria

- A new user can open Job Tracker without console errors.
- An empty state appears before any jobs are saved.
- A user can create a job with company and job title.
- Saved jobs appear in the list.
- Jobs persist after browser refresh.
- A user can edit job details.
- Updated details persist after browser refresh.
- A user can update job status.
- Updated status persists after browser refresh.
- A user can archive a job.
- Archived jobs disappear from the active list.
- A user can include archived jobs alongside active jobs.
- A user can unarchive a job.
- Candidate Profile and Resume Studio continue to work.

## Manual QA

Recommended manual QA:

1. Start the backend server.
2. Start the frontend development server.
3. Open the Dashboard page and confirm it loads.
4. Open Candidate Profile and confirm it loads and saves.
5. Open Resume Studio and confirm it loads and persists data.
6. Open Job Tracker.
7. Confirm the empty state appears when no jobs exist.
8. Try blank or whitespace-only required fields on create and confirm a validation error appears with no success message.
9. Create a job with company and job title.
10. Confirm the saved job appears in the list.
11. Refresh the browser and confirm the job persists.
12. Edit the job.
13. Try blank or whitespace-only required fields on update and confirm the original listed job remains unchanged.
14. Correct the fields and confirm the updated details persist after refresh.
15. Change job status.
16. Refresh and confirm the status persists.
17. Archive the job.
18. Confirm the archived job disappears from the active list.
19. Confirm the checkbox reads "Include archived jobs."
20. Enable "Include archived jobs" and confirm active and archived jobs appear.
21. Unarchive the job and confirm it returns to the active list.
22. Confirm no app-related browser console errors.
23. Confirm no backend tracebacks.

## Codex Verification

- Backend py_compile: Pass.
- Frontend npm run build: Pass.
- Isolated FastAPI TestClient validation smoke checks: Pass.
- Existing automated backend tests: Not available.
- Existing automated frontend tests: Not available.
- Later Sprint 4 Product Owner regression validation covered Job Tracker navigation and smoke behavior.

## Future Improvements

- Add automated backend tests for job endpoints.
- Add frontend component and workflow tests.
- Add authentication and job ownership.
- Add search and filtering beyond archived visibility.
- Add status history.
- Add reminders.
- Add recruiter/contact records.
- Add interview records linked to jobs.
- Add dashboard metrics after analytics scope is approved.
- Add AI job matching and job-specific resume generation after the manual workflow is stable.
