from pydantic import BaseModel, ConfigDict, Field


class EducationBase(BaseModel):
    school: str = ""
    degree: str = ""
    field_of_study: str = ""
    start_date: str = ""
    end_date: str = ""
    notes: str = ""


class EducationCreate(EducationBase):
    pass


class EducationRead(EducationBase):
    id: int

    model_config = ConfigDict(from_attributes=True)


class WorkExperienceBase(BaseModel):
    company: str = ""
    title: str = ""
    location: str = ""
    start_date: str = ""
    end_date: str = ""
    description: str = ""


class WorkExperienceCreate(WorkExperienceBase):
    pass


class WorkExperienceRead(WorkExperienceBase):
    id: int

    model_config = ConfigDict(from_attributes=True)


class SkillBase(BaseModel):
    name: str = ""
    category: str = ""


class SkillCreate(SkillBase):
    pass


class SkillRead(SkillBase):
    id: int

    model_config = ConfigDict(from_attributes=True)


class ProjectBase(BaseModel):
    name: str = ""
    url: str = ""
    description: str = ""


class ProjectCreate(ProjectBase):
    pass


class ProjectRead(ProjectBase):
    id: int

    model_config = ConfigDict(from_attributes=True)


class CandidateProfileBase(BaseModel):
    full_name: str = ""
    email: str = ""
    phone: str = ""
    location: str = ""
    linkedin_url: str = ""
    github_url: str = ""
    work_authorization: str = ""
    target_roles: str = ""
    summary: str = ""
    education: list[EducationCreate] = Field(default_factory=list)
    work_experience: list[WorkExperienceCreate] = Field(default_factory=list)
    skills: list[SkillCreate] = Field(default_factory=list)
    projects: list[ProjectCreate] = Field(default_factory=list)


class CandidateProfileCreate(CandidateProfileBase):
    pass


class CandidateProfileRead(CandidateProfileBase):
    id: int
    education: list[EducationRead] = Field(default_factory=list)
    work_experience: list[WorkExperienceRead] = Field(default_factory=list)
    skills: list[SkillRead] = Field(default_factory=list)
    projects: list[ProjectRead] = Field(default_factory=list)

    model_config = ConfigDict(from_attributes=True)
