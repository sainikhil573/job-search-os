from datetime import date, datetime, timezone

from sqlalchemy import Boolean, Date, DateTime, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from app.database import Base


def utc_now() -> datetime:
    return datetime.now(timezone.utc)


class JobApplication(Base):
    __tablename__ = "job_applications"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    company_name: Mapped[str] = mapped_column(String(255), default="")
    job_title: Mapped[str] = mapped_column(String(255), default="")
    location: Mapped[str] = mapped_column(String(255), default="")
    workplace_type: Mapped[str] = mapped_column(String(100), default="")
    employment_type: Mapped[str] = mapped_column(String(100), default="")
    job_url: Mapped[str] = mapped_column(String(1000), default="")
    source: Mapped[str] = mapped_column(String(255), default="")
    status: Mapped[str] = mapped_column(String(50), default="saved", index=True)
    priority: Mapped[str] = mapped_column(String(50), default="")
    salary_range: Mapped[str] = mapped_column(String(255), default="")
    job_description: Mapped[str] = mapped_column(Text, default="")
    notes: Mapped[str] = mapped_column(Text, default="")
    date_saved: Mapped[date] = mapped_column(Date, default=date.today)
    date_applied: Mapped[str] = mapped_column(String(100), default="")
    follow_up_date: Mapped[str] = mapped_column(String(100), default="")
    archived: Mapped[bool] = mapped_column(Boolean, default=False, index=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utc_now)
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=utc_now, onupdate=utc_now
    )
