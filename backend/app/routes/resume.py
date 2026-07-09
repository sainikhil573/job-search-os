from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.resume import Resume
from app.schemas.resume import ResumeCreate, ResumeRead, ResumeUpdate

router = APIRouter(prefix="/api/resume", tags=["resume"])


def get_existing_resume(db: Session) -> Resume | None:
    return db.query(Resume).order_by(Resume.id).first()


def apply_resume_payload(resume: Resume, payload: ResumeCreate | ResumeUpdate) -> Resume:
    resume.title = payload.title
    resume.target_role = payload.target_role
    resume.professional_summary = payload.professional_summary
    resume.skills_json = [item.model_dump() for item in payload.skills_json]
    resume.experience_json = [item.model_dump() for item in payload.experience_json]
    resume.projects_json = [item.model_dump() for item in payload.projects_json]
    resume.education_json = [item.model_dump() for item in payload.education_json]
    resume.certifications_json = [
        item.model_dump() for item in payload.certifications_json
    ]
    return resume


@router.get("", response_model=ResumeRead)
def read_resume(db: Session = Depends(get_db)):
    resume = get_existing_resume(db)
    if resume is None:
        return ResumeRead()
    return resume


@router.post("", response_model=ResumeRead, status_code=status.HTTP_201_CREATED)
def create_resume(payload: ResumeCreate, db: Session = Depends(get_db)):
    if get_existing_resume(db) is not None:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT, detail="Resume already exists"
        )

    resume = apply_resume_payload(Resume(), payload)
    db.add(resume)
    db.commit()
    db.refresh(resume)
    return resume


@router.put("/{resume_id}", response_model=ResumeRead)
def update_resume(
    resume_id: int, payload: ResumeUpdate, db: Session = Depends(get_db)
):
    resume = db.get(Resume, resume_id)
    if resume is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Resume not found"
        )

    apply_resume_payload(resume, payload)
    db.commit()
    db.refresh(resume)
    return resume
