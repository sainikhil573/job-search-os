from datetime import datetime

from pydantic import BaseModel, ConfigDict, Field


class ResumeSkill(BaseModel):
    name: str = ""
    category: str = ""


class ResumeExperience(BaseModel):
    company: str = ""
    title: str = ""
    location: str = ""
    start_date: str = ""
    end_date: str = ""
    highlights: list[str] = Field(default_factory=list)


class ResumeProject(BaseModel):
    name: str = ""
    url: str = ""
    description: str = ""
    technologies: str = ""


class ResumeEducation(BaseModel):
    institution: str = ""
    degree: str = ""
    field_of_study: str = ""
    start_date: str = ""
    end_date: str = ""
    notes: str = ""


class ResumeCertification(BaseModel):
    name: str = ""
    issuer: str = ""
    issue_date: str = ""
    credential_url: str = ""


class ResumeBase(BaseModel):
    title: str = ""
    target_role: str = ""
    professional_summary: str = ""
    skills_json: list[ResumeSkill] = Field(default_factory=list)
    experience_json: list[ResumeExperience] = Field(default_factory=list)
    projects_json: list[ResumeProject] = Field(default_factory=list)
    education_json: list[ResumeEducation] = Field(default_factory=list)
    certifications_json: list[ResumeCertification] = Field(default_factory=list)


class ResumeCreate(ResumeBase):
    pass


class ResumeUpdate(ResumeBase):
    pass


class ResumeRead(ResumeBase):
    id: int | None = None
    created_at: datetime | None = None
    updated_at: datetime | None = None

    model_config = ConfigDict(from_attributes=True)
