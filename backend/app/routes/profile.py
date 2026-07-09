from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.profile import CandidateProfile, Education, Project, Skill, WorkExperience
from app.schemas.profile import CandidateProfileCreate, CandidateProfileRead

router = APIRouter(prefix="/profile", tags=["profile"])


def get_existing_profile(db: Session) -> CandidateProfile | None:
    return db.query(CandidateProfile).order_by(CandidateProfile.id).first()


def apply_profile_payload(
    profile: CandidateProfile, payload: CandidateProfileCreate
) -> CandidateProfile:
    profile.full_name = payload.full_name
    profile.email = payload.email
    profile.phone = payload.phone
    profile.location = payload.location
    profile.linkedin_url = payload.linkedin_url
    profile.github_url = payload.github_url
    profile.work_authorization = payload.work_authorization
    profile.target_roles = payload.target_roles
    profile.summary = payload.summary

    profile.education = [Education(**item.model_dump()) for item in payload.education]
    profile.work_experience = [
        WorkExperience(**item.model_dump()) for item in payload.work_experience
    ]
    profile.skills = [Skill(**item.model_dump()) for item in payload.skills]
    profile.projects = [Project(**item.model_dump()) for item in payload.projects]

    return profile


@router.get("", response_model=CandidateProfileRead)
def read_profile(db: Session = Depends(get_db)):
    profile = get_existing_profile(db)
    if profile is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Profile not found"
        )
    return profile


@router.post(
    "", response_model=CandidateProfileRead, status_code=status.HTTP_201_CREATED
)
def create_profile(payload: CandidateProfileCreate, db: Session = Depends(get_db)):
    if get_existing_profile(db) is not None:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT, detail="Profile already exists"
        )

    profile = apply_profile_payload(CandidateProfile(), payload)
    db.add(profile)
    db.commit()
    db.refresh(profile)
    return profile


@router.put("", response_model=CandidateProfileRead)
def update_profile(payload: CandidateProfileCreate, db: Session = Depends(get_db)):
    profile = get_existing_profile(db)
    if profile is None:
        profile = CandidateProfile()
        db.add(profile)

    apply_profile_payload(profile, payload)
    db.commit()
    db.refresh(profile)
    return profile
