# Profile Module

## Purpose

The Profile module captures the candidate information that future resume generation, job matching, dashboards, and AI-assisted career workflows will depend on.

It provides a structured place for users to maintain core identity details, target roles, professional summary, education, work experience, skills, and projects.

## Business Requirements

- Users can view an empty profile before any data has been saved.
- Users can create a candidate profile.
- Users can update an existing candidate profile.
- Users can add and remove education entries.
- Users can add and remove work experience entries.
- Users can add and remove skill entries.
- Users can add and remove project entries.
- Profile data persists in the local SQLite database.
- The profile API returns a stable shape for frontend use and future modules.

## UI

The Profile page includes:

- Basic candidate details:
  - Full name
  - Email
  - Phone
  - Location
  - LinkedIn URL
  - GitHub URL
  - Work authorization or visa status
  - Target roles
  - Summary
- Repeatable education entries.
- Repeatable work experience entries.
- Repeatable skills.
- Repeatable projects.
- Save or update action based on whether a profile already exists.
- Success and error messaging after save attempts.
- Loading state while the profile is fetched.
- Empty states for repeatable sections.

## API Endpoints

Base resource: `/profile`

### `GET /profile`

Returns the first candidate profile if one exists.

If no profile exists, returns an empty profile payload with `id` set to `null` and empty collections.

### `POST /profile`

Creates a candidate profile.

Expected behavior:

- Returns `201 Created` on successful creation.
- Returns `409 Conflict` if a profile already exists.
- Persists nested education, work experience, skills, and projects.

### `PUT /profile`

Updates the existing candidate profile.

Expected behavior:

- Creates a profile if one does not already exist.
- Replaces nested education, work experience, skills, and projects with the submitted payload.
- Returns the saved profile.

## Database

The Profile module currently uses SQLite through SQLAlchemy.

Tables:

- `candidate_profiles`
- `education`
- `work_experience`
- `skills`
- `projects`

Relationships:

- `education.profile_id` references `candidate_profiles.id`.
- `work_experience.profile_id` references `candidate_profiles.id`.
- `skills.profile_id` references `candidate_profiles.id`.
- `projects.profile_id` references `candidate_profiles.id`.

Nested records use delete-orphan cascade behavior so submitted profile updates replace the profile's child collections.

## Acceptance Criteria

- A new user can load the Profile page without console errors.
- An empty profile loads without an API error state.
- A user can enter basic candidate details and save them.
- A user can add education, work experience, skills, and projects.
- Saved data is visible after the API returns.
- Saved data persists after browser refresh.
- A user can update previously saved profile data.
- Profile API endpoints return expected status codes and payloads.
- No unrelated application modules are changed when working on the Profile module.

## Manual QA

Recommended manual QA:

1. Start the backend server.
2. Start the frontend development server.
3. Open the Profile page.
4. Confirm the page loads with no unexpected browser console errors.
5. Confirm an empty profile state loads before first save.
6. Fill in basic details.
7. Add at least one education item.
8. Add at least one work experience item.
9. Add at least one skill.
10. Add at least one project.
11. Save the profile and confirm success messaging.
12. Refresh the browser and confirm data persists.
13. Update one or more fields and confirm the update is saved.
14. Check backend logs for unexpected errors.

## Future Improvements

- Add automated backend tests for profile endpoints.
- Add frontend component and workflow tests.
- Add stronger field validation.
- Add profile ownership once authentication exists.
- Add resume preview integration.
- Add resume versioning support.
- Add AI-assisted summary and bullet improvement suggestions.
- Add import or export support for existing resume content.
