# Resume Studio

The Resume Studio MVP gives a user one structured base resume that can be created, edited, saved, reloaded, and updated.

## Scope

Included in Sprint 2A and 2B:

- One base resume.
- Structured resume content by major section.
- Create, read, and update persistence through the backend API.
- Frontend form sections for summary, skills, experience, projects, education, and certifications.
- A live preview of the current resume draft.

Not included yet:

- AI resume optimization.
- ATS scoring.
- PDF or DOCX export.
- Multiple resume versions.
- Authentication or user ownership.

## Frontend

The Resume Studio page is available at `/resume-studio`.

Frontend code is organized under:

- `frontend/src/pages/ResumeStudio.jsx`
- `frontend/src/components/resume/`
- `frontend/src/services/resumeApi.js`

The page loads the saved resume on mount, saves a new resume with `POST /api/resume`, and updates an existing resume with `PUT /api/resume/{resume_id}`.

## API

Base resource: `/api/resume`

### `GET /api/resume`

Returns the first base resume if one exists.

If no resume exists, returns an empty resume payload with `id` set to `null` and empty section arrays.

### `POST /api/resume`

Creates the base resume.

- Request body uses the Resume Studio structured payload.
- Returns `201 Created` with the saved resume.
- Returns `409 Conflict` if a base resume already exists.

### `PUT /api/resume/{resume_id}`

Updates the requested resume.

- Request body uses the Resume Studio structured payload.
- Returns the saved resume.
- Returns `404 Not Found` if the resume does not exist.

## Database

The Resume Studio MVP uses SQLite through SQLAlchemy.

Primary table:

- `resumes`

Fields:

- `id`
- `title`
- `target_role`
- `professional_summary`
- `skills_json`
- `experience_json`
- `projects_json`
- `education_json`
- `certifications_json`
- `created_at`
- `updated_at`

The section fields are JSON arrays of structured objects. This avoids a single unstructured text blob while keeping the MVP simpler than fully normalized resume section tables.

## Acceptance Criteria

- A new user can open Resume Studio without console errors.
- An empty resume form loads before first save.
- A user can enter resume data and save it.
- Saved data persists after browser refresh.
- A user can edit saved data and save updates.
- Updated data persists after browser refresh.
- Resume content is stored by structured section fields.
- Candidate Profile APIs continue to work.

## Manual QA

1. Start the backend.
2. Start the frontend.
3. Open Resume Studio.
4. Confirm the empty resume state loads.
5. Add a title, target role, and professional summary.
6. Add at least one skill.
7. Add at least one experience entry with highlights.
8. Add at least one project.
9. Add at least one education entry.
10. Add at least one certification.
11. Save the resume and confirm success messaging.
12. Refresh the browser and confirm the saved data still appears.
13. Edit the title and one section item.
14. Save the update.
15. Refresh again and confirm the updated values still appear.
16. Verify `GET /api/resume`, `POST /api/resume`, and `PUT /api/resume/{resume_id}` return expected status codes and payloads.
17. Open the Profile page and confirm existing profile behavior still works.

## Future Improvements

- Add automated backend tests for resume endpoints.
- Add frontend component and workflow tests.
- Add authentication and resume ownership.
- Add AI-assisted resume suggestions.
- Add ATS scoring.
- Add PDF and DOCX export.
- Add multiple resume versions.
