export const jobStatuses = [
  { value: "saved", label: "Saved" },
  { value: "applied", label: "Applied" },
  { value: "interviewing", label: "Interviewing" },
  { value: "offer", label: "Offer" },
  { value: "rejected", label: "Rejected" },
];

export const emptyJob = {
  id: null,
  company_name: "",
  job_title: "",
  location: "",
  workplace_type: "",
  employment_type: "",
  job_url: "",
  source: "",
  status: "saved",
  priority: "",
  salary_range: "",
  job_description: "",
  notes: "",
  date_applied: "",
  follow_up_date: "",
  archived: false,
  date_saved: null,
  created_at: null,
  updated_at: null,
};

export function sanitizeJob(job) {
  return {
    ...emptyJob,
    ...job,
    status: job?.status ?? "saved",
    archived: Boolean(job?.archived),
  };
}

export function buildJobPayload(job) {
  const sanitizedJob = sanitizeJob(job);

  return {
    company_name: sanitizedJob.company_name.trim(),
    job_title: sanitizedJob.job_title.trim(),
    location: sanitizedJob.location,
    workplace_type: sanitizedJob.workplace_type,
    employment_type: sanitizedJob.employment_type,
    job_url: sanitizedJob.job_url,
    source: sanitizedJob.source,
    status: sanitizedJob.status,
    priority: sanitizedJob.priority,
    salary_range: sanitizedJob.salary_range,
    job_description: sanitizedJob.job_description,
    notes: sanitizedJob.notes,
    date_applied: sanitizedJob.date_applied,
    follow_up_date: sanitizedJob.follow_up_date,
    archived: sanitizedJob.archived,
  };
}

export function getStatusLabel(status) {
  return jobStatuses.find((item) => item.value === status)?.label ?? "Saved";
}
