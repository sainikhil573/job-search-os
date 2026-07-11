from datetime import date, datetime
from typing import Literal

from pydantic import BaseModel, ConfigDict, Field, field_validator


JobStatus = Literal["saved", "applied", "interviewing", "offer", "rejected"]


class JobApplicationBase(BaseModel):
    company_name: str = Field(min_length=1)
    job_title: str = Field(min_length=1)
    location: str = ""
    workplace_type: str = ""
    employment_type: str = ""
    job_url: str = ""
    source: str = ""
    status: JobStatus = "saved"
    priority: str = ""
    salary_range: str = ""
    job_description: str = ""
    notes: str = ""
    date_applied: str = ""
    follow_up_date: str = ""
    archived: bool = False

    @field_validator("company_name", "job_title", mode="before")
    @classmethod
    def strip_required_text(cls, value):
        if isinstance(value, str):
            return value.strip()
        return value


class JobApplicationCreate(JobApplicationBase):
    pass


class JobApplicationUpdate(JobApplicationBase):
    pass


class JobStatusUpdate(BaseModel):
    status: JobStatus


class JobArchiveUpdate(BaseModel):
    archived: bool


class JobApplicationRead(JobApplicationBase):
    id: int
    date_saved: date | None = None
    created_at: datetime | None = None
    updated_at: datetime | None = None

    model_config = ConfigDict(from_attributes=True)
