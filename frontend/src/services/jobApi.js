const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://127.0.0.1:8000";

const JOBS_ENDPOINT = `${API_BASE_URL}/api/jobs`;

async function parseApiError(response, fallbackMessage) {
  const errorData = await response.json().catch(() => null);
  return new Error(errorData?.detail ?? fallbackMessage);
}

export async function fetchJobs({ includeArchived = false } = {}) {
  const query = includeArchived ? "?include_archived=true" : "";
  const response = await fetch(`${JOBS_ENDPOINT}${query}`);

  if (!response.ok) {
    throw await parseApiError(response, "Unable to load jobs.");
  }

  return response.json();
}

export async function createJob(payload) {
  const response = await fetch(JOBS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw await parseApiError(response, "Unable to save job.");
  }

  return response.json();
}

export async function updateJob(jobId, payload) {
  const response = await fetch(`${JOBS_ENDPOINT}/${jobId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw await parseApiError(response, "Unable to update job.");
  }

  return response.json();
}

export async function updateJobStatus(jobId, status) {
  const response = await fetch(`${JOBS_ENDPOINT}/${jobId}/status`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });

  if (!response.ok) {
    throw await parseApiError(response, "Unable to update job status.");
  }

  return response.json();
}

export async function updateJobArchive(jobId, archived) {
  const response = await fetch(`${JOBS_ENDPOINT}/${jobId}/archive`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ archived }),
  });

  if (!response.ok) {
    throw await parseApiError(response, "Unable to update archive status.");
  }

  return response.json();
}
