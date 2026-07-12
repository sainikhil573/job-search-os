# Dashboard

The Dashboard Integration MVP gives the user a lightweight overview of persisted Job Tracker records without adding a separate Dashboard backend endpoint.

Status: Sprint 4 implemented on the `feature/dashboard-integration` branch. Technical review and Product Owner manual QA are still required before merge.

## Scope

Included in Sprint 4:

- Total active jobs.
- Total archived jobs.
- Counts for supported job statuses.
- A bounded "Recently Updated Jobs" list.
- Links from Dashboard sections to Job Tracker.
- Loading, API error, no-job, all-archived, and normal mixed-data states.
- Responsive layout using existing Tailwind and application patterns.

Not included yet:

- Upcoming follow-ups.
- Follow-up reminders.
- Dedicated Dashboard API endpoint.
- Backend or database changes.
- Status history.
- Interview tracking.
- Resume metrics.
- Recruiter CRM.
- Authentication.
- AI features.
- Notifications.
- Advanced analytics.
- Pagination.

## Data Source

The Dashboard uses the existing Job Tracker endpoint:

```text
GET /api/jobs?include_archived=true
```

The frontend performs lightweight aggregation because the current application is an early local, single-user MVP without pagination or analytics-scale data.

No Dashboard-specific backend route, database table, or dependency is introduced in this sprint.

## Current Behavior

The Dashboard displays:

- Active Jobs: jobs where `archived` is not `true`.
- Archived Jobs: jobs where `archived` is `true`.
- Jobs by Status: counts for `saved`, `applied`, `interviewing`, `offer`, and `rejected`.
- Recently Updated Jobs: up to five job records sorted by `updated_at` when available.

Rejected jobs still count as active unless they are archived. Active means not archived; it does not mean still viable.

Supported status cards always render, including zero values. Unknown or legacy status values are ignored for supported status cards and do not create extra Dashboard status cards.

## UI States

The Dashboard handles:

- Loading while job data is being fetched.
- API error with a retry action.
- No jobs at all.
- All jobs archived.
- Normal mixed active and archived job data.

The no-job and all-archived states are intentionally distinct so the user can tell whether they have no job history or only archived records.

## Defensive Handling

The Dashboard tolerates:

- A non-array API response by showing an error state.
- Missing or malformed archive values.
- Unknown, null, or malformed status values.
- Missing or invalid `updated_at` values.
- Missing company or job title values in legacy data.

## Architecture Notes

Dashboard aggregation currently lives in the frontend page implementation and reuses:

- `frontend/src/services/jobApi.js`
- `frontend/src/components/jobs/jobDefaults.js`

This keeps the sprint small and avoids premature API surface. A dedicated Dashboard summary endpoint can be reconsidered later if pagination, multi-user data ownership, broader analytics, or cross-feature summaries make client-side aggregation inappropriate.

## Acceptance Criteria

- Dashboard no longer displays unsupported static resume or interview metrics.
- Dashboard loads job data from the existing jobs API with archived jobs included.
- Dashboard shows active and archived totals correctly.
- Dashboard renders all supported status cards with accurate counts.
- Dashboard shows up to five recently updated jobs.
- Dashboard provides clear navigation to Job Tracker.
- Dashboard shows loading, error, no-job, all-archived, and mixed-data states.
- Dashboard does not crash on unknown statuses or legacy incomplete job records.
- Job Tracker behavior is unchanged.

## Manual QA

Recommended manual QA:

1. Start the backend server.
2. Start the frontend development server.
3. Open the Dashboard from navigation.
4. Confirm the Dashboard loading state appears before data resolves.
5. Confirm the no-job state appears when there are no job records.
6. Create active jobs across the supported statuses in Job Tracker.
7. Confirm active total and status counts update on Dashboard.
8. Confirm a rejected non-archived job still counts as active.
9. Archive every job and confirm the all-archived state appears.
10. Confirm archived total includes archived jobs.
11. Confirm Recently Updated Jobs shows no more than five records.
12. Confirm Dashboard links navigate to Job Tracker.
13. Stop or block the backend and confirm the Dashboard error state and retry action appear.
14. Confirm Dashboard remains usable at mobile and desktop viewport widths.
15. Confirm Candidate Profile, Resume Studio, and Job Tracker still load.

## Future Improvements

- Add automated frontend tests once a permanent frontend test framework exists.
- Add a Dashboard summary endpoint if pagination, authentication, analytics, or cross-feature summaries justify it.
- Add upcoming follow-ups when date semantics and reminder scope are approved.
- Add interview previews after an Interview Tracker exists.
- Add resume metrics after product requirements define them.
