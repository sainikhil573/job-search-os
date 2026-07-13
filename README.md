# Job Search OS

Job Search OS is a full-stack career management application for organizing the job search lifecycle. It currently focuses on core manual workflows: maintaining a candidate profile, building a structured resume, and tracking job applications.

The project is also being developed as a professional software engineering portfolio project, with emphasis on clear architecture, incremental delivery, REST API design, data modeling, documentation, and disciplined Git workflow.

## Current Status

Implemented on `main`:

- Dashboard
- Candidate Profile
- Resume Studio
- Job Tracker

## Feature Summaries

### Dashboard

- Summarizes persisted Job Tracker records.
- Shows active jobs, archived jobs, active-job status counts, and recently updated jobs.
- Links Dashboard sections to Job Tracker.
- Provides loading, empty, all-archived, and API error states.

### Candidate Profile

- Create and update candidate information.
- Store core details, education, work experience, skills, and projects.
- Persist data through the backend API and SQLite database.
- Preserve saved data after browser refresh.

### Resume Studio

- Create and edit one structured base resume.
- Store resume title, target role, professional summary, skills, experience, projects, education, and certifications.
- Persist resume data through the backend API and SQLite database.
- Provide a foundation for future resume tailoring, optimization, export, and versioning.

### Job Tracker

- Create job records.
- Edit saved jobs.
- Update application status.
- Archive and unarchive jobs.
- Include archived jobs alongside active jobs.
- Persist job records through the backend API and SQLite database.
- Trim and validate required company and job title fields.
- Provide loading, empty, success, and error states.

## Technology Stack

- React
- Vite
- Tailwind CSS
- JavaScript
- FastAPI
- Python
- Pydantic
- SQLAlchemy
- SQLite
- Git and GitHub

SQLite is the current MVP database. PostgreSQL is a planned future migration option when the product needs production-grade multi-user persistence and operations.

## Project Structure

```text
.
|-- backend/
|   |-- app/
|   |   |-- models/
|   |   |-- routes/
|   |   |-- schemas/
|   |   |-- services/
|   |   |-- database.py
|   |   `-- main.py
|   `-- requirements.txt
|-- frontend/
|   |-- src/
|   |   |-- components/
|   |   |-- pages/
|   |   |-- services/
|   |   |-- App.jsx
|   |   `-- main.jsx
|   `-- package.json
|-- docs/
|   |-- DECISIONS.md
|   |-- PROJECT_OVERVIEW.md
|   |-- ROADMAP.md
|   |-- architecture.md
|   `-- features/
|-- AGENTS.md
|-- AI_ENGINEERING_GUIDE.md
|-- CHANGELOG.md
|-- CONTRIBUTING.md
|-- DECISIONS.md
|-- DEVELOPMENT_RULES.md
|-- PROJECT_ROADMAP.md
|-- PROJECT_STATUS.md
|-- QA_CHECKLIST.md
`-- README.md
```

## Local Development

Run the backend and frontend in separate terminals.

### Backend

```bash
cd backend
python -m venv .venv
```

Activate the virtual environment for your shell, then install dependencies:

```bash
pip install -r requirements.txt
uvicorn app.main:app --reload
```

On Windows PowerShell, activation is typically:

```powershell
.\.venv\Scripts\Activate.ps1
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Application URLs

- Frontend: `http://localhost:5173`
- Backend API: `http://127.0.0.1:8000`
- FastAPI docs: `http://127.0.0.1:8000/docs`
- Health endpoint: `http://127.0.0.1:8000/health`

Expected health response:

```json
{"status":"ok"}
```

## API Capabilities

### Candidate Profile

Base path: `/profile`

- `GET /profile` reads the current profile or returns an empty profile shape.
- `POST /profile` creates the profile.
- `PUT /profile` updates the profile, creating one if needed.

### Resume Studio

Base path: `/api/resume`

- `GET /api/resume` reads the current base resume or returns an empty resume shape.
- `POST /api/resume` creates the base resume.
- `PUT /api/resume/{resume_id}` updates an existing resume.

### Job Tracker

Base path: `/api/jobs`

- `GET /api/jobs` lists non-archived jobs by default.
- `GET /api/jobs?include_archived=true` lists active and archived jobs.
- `GET /api/jobs/{job_id}` reads one job.
- `POST /api/jobs` creates a job.
- `PUT /api/jobs/{job_id}` updates job details.
- `PATCH /api/jobs/{job_id}/status` updates job status.
- `PATCH /api/jobs/{job_id}/archive` archives or unarchives a job.

## Engineering Workflow

- Use feature branches for product work.
- Keep commits focused and outcome-oriented.
- Update documentation with behavior changes.
- Run manual QA for changed workflows.
- Open pull requests for review before merging feature work into `main`.
- Review the diff before merge.
- After merge, synchronize local `main` and clean up completed feature branches.

Small documentation-only housekeeping may be committed directly to `main` when repository rules allow it.

## Documentation

- `PROJECT_STATUS.md` tracks project progress, completed work, known issues, and technical debt.
- `docs/PROJECT_OVERVIEW.md` describes product vision, users, architecture, major features, and limitations.
- `docs/ROADMAP.md` is the proposed canonical roadmap for completed, candidate, and future milestones.
- `CHANGELOG.md` records notable merged changes.
- `docs/DECISIONS.md` is the proposed canonical record for architecture, product, and workflow decisions.
- `AGENTS.md` defines permanent Codex operating rules.
- `QA_CHECKLIST.md` provides reusable validation checklists.
- `docs/features/` contains feature-specific documentation for Dashboard, Profile, Resume Studio, and Job Tracker.

Root `PROJECT_ROADMAP.md` and `DECISIONS.md` are compatibility notices only. Do not edit them for roadmap or decision content.

## Current Limitations

- No authentication.
- No user ownership or multi-user data scoping.
- No PostgreSQL database yet.
- No database migration system yet.
- No permanent automated backend test suite.
- No permanent automated frontend test suite.
- No AI job matching.
- No AI resume optimization.
- No recruiter CRM.
- No interview tracking.
- No reminders.
- No production deployment.
- No advanced analytics.

## Roadmap

Planned future work includes:

- Expanding dashboard summaries and progress insights.
- Adding authentication and user-owned records.
- Migrating beyond local MVP persistence when production needs require it.
- Adding AI resume optimization and job matching.
- Adding interview tracking, reminders, and recruiter CRM workflows.
- Adding document export, resume versioning, and analytics.
- Improving automated backend and frontend test coverage.

See `docs/ROADMAP.md` for the full phase plan.

## Portfolio Value

This project demonstrates full-stack architecture, REST API design, relational data modeling, frontend component design, state and error handling, Git and pull request discipline, project documentation, and incremental delivery across multiple product modules.
