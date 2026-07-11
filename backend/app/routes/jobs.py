from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.job import JobApplication
from app.schemas.job import (
    JobApplicationCreate,
    JobApplicationRead,
    JobApplicationUpdate,
    JobArchiveUpdate,
    JobStatusUpdate,
)

router = APIRouter(prefix="/api/jobs", tags=["jobs"])


def get_job_or_404(job_id: int, db: Session) -> JobApplication:
    job = db.get(JobApplication, job_id)
    if job is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Job not found"
        )
    return job


def apply_job_payload(
    job: JobApplication, payload: JobApplicationCreate | JobApplicationUpdate
) -> JobApplication:
    job.company_name = payload.company_name
    job.job_title = payload.job_title
    job.location = payload.location
    job.workplace_type = payload.workplace_type
    job.employment_type = payload.employment_type
    job.job_url = payload.job_url
    job.source = payload.source
    job.status = payload.status
    job.priority = payload.priority
    job.salary_range = payload.salary_range
    job.job_description = payload.job_description
    job.notes = payload.notes
    job.date_applied = payload.date_applied
    job.follow_up_date = payload.follow_up_date
    job.archived = payload.archived
    return job


@router.get("", response_model=list[JobApplicationRead])
def list_jobs(
    include_archived: bool = Query(default=False), db: Session = Depends(get_db)
):
    query = db.query(JobApplication)
    if not include_archived:
        query = query.filter(JobApplication.archived.is_(False))
    return query.order_by(JobApplication.updated_at.desc(), JobApplication.id.desc()).all()


@router.get("/{job_id}", response_model=JobApplicationRead)
def read_job(job_id: int, db: Session = Depends(get_db)):
    return get_job_or_404(job_id, db)


@router.post(
    "", response_model=JobApplicationRead, status_code=status.HTTP_201_CREATED
)
def create_job(payload: JobApplicationCreate, db: Session = Depends(get_db)):
    job = apply_job_payload(JobApplication(), payload)
    db.add(job)
    db.commit()
    db.refresh(job)
    return job


@router.put("/{job_id}", response_model=JobApplicationRead)
def update_job(
    job_id: int, payload: JobApplicationUpdate, db: Session = Depends(get_db)
):
    job = get_job_or_404(job_id, db)
    apply_job_payload(job, payload)
    db.commit()
    db.refresh(job)
    return job


@router.patch("/{job_id}/status", response_model=JobApplicationRead)
def update_job_status(
    job_id: int, payload: JobStatusUpdate, db: Session = Depends(get_db)
):
    job = get_job_or_404(job_id, db)
    job.status = payload.status
    db.commit()
    db.refresh(job)
    return job


@router.patch("/{job_id}/archive", response_model=JobApplicationRead)
def update_job_archive(
    job_id: int, payload: JobArchiveUpdate, db: Session = Depends(get_db)
):
    job = get_job_or_404(job_id, db)
    job.archived = payload.archived
    db.commit()
    db.refresh(job)
    return job
