export const emptyResume = {
  id: null,
  title: "",
  target_role: "",
  professional_summary: "",
  skills_json: [],
  experience_json: [],
  projects_json: [],
  education_json: [],
  certifications_json: [],
  created_at: null,
  updated_at: null,
};

export const emptyResumeItems = {
  skills_json: {
    name: "",
    category: "",
  },
  experience_json: {
    company: "",
    title: "",
    location: "",
    start_date: "",
    end_date: "",
    highlights: [],
  },
  projects_json: {
    name: "",
    url: "",
    description: "",
    technologies: "",
  },
  education_json: {
    institution: "",
    degree: "",
    field_of_study: "",
    start_date: "",
    end_date: "",
    notes: "",
  },
  certifications_json: {
    name: "",
    issuer: "",
    issue_date: "",
    credential_url: "",
  },
};

export function sanitizeResume(resume) {
  return {
    ...emptyResume,
    ...resume,
    skills_json: resume?.skills_json ?? [],
    experience_json: resume?.experience_json ?? [],
    projects_json: resume?.projects_json ?? [],
    education_json: resume?.education_json ?? [],
    certifications_json: resume?.certifications_json ?? [],
  };
}

export function buildResumePayload(resume) {
  const sanitizedResume = sanitizeResume(resume);

  return {
    title: sanitizedResume.title,
    target_role: sanitizedResume.target_role,
    professional_summary: sanitizedResume.professional_summary,
    skills_json: sanitizedResume.skills_json,
    experience_json: sanitizedResume.experience_json.map((item) => ({
      ...item,
      highlights: item.highlights ?? [],
    })),
    projects_json: sanitizedResume.projects_json,
    education_json: sanitizedResume.education_json,
    certifications_json: sanitizedResume.certifications_json,
  };
}
