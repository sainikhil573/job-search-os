# Job Search OS

Job Search OS is an application foundation for organizing the job search workflow.

## Project Structure

- `frontend/`: React + Vite application with Tailwind CSS.
- `backend/`: FastAPI application with SQLAlchemy and SQLite configuration.
- `docs/`: Architecture and planning documentation.

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend runs at `http://localhost:5173` by default.

## Backend Setup

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

The backend runs at `http://localhost:8000` by default.

## Health Check

```bash
curl http://localhost:8000/health
```

Expected response:

```json
{"status":"ok"}
```
