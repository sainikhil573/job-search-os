from datetime import datetime, timezone

from sqlalchemy import DateTime, JSON, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from app.database import Base


def utc_now() -> datetime:
    return datetime.now(timezone.utc)


class Resume(Base):
    __tablename__ = "resumes"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    title: Mapped[str] = mapped_column(String(255), default="")
    target_role: Mapped[str] = mapped_column(String(255), default="")
    professional_summary: Mapped[str] = mapped_column(Text, default="")
    skills_json: Mapped[list] = mapped_column(JSON, default=list)
    experience_json: Mapped[list] = mapped_column(JSON, default=list)
    projects_json: Mapped[list] = mapped_column(JSON, default=list)
    education_json: Mapped[list] = mapped_column(JSON, default=list)
    certifications_json: Mapped[list] = mapped_column(JSON, default=list)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utc_now)
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=utc_now, onupdate=utc_now
    )
