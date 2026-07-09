const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://127.0.0.1:8000";

const RESUME_ENDPOINT = `${API_BASE_URL}/api/resume`;

async function parseApiError(response, fallbackMessage) {
  const errorData = await response.json().catch(() => null);
  return new Error(errorData?.detail ?? fallbackMessage);
}

export async function fetchResume() {
  const response = await fetch(RESUME_ENDPOINT);

  if (!response.ok) {
    throw await parseApiError(response, "Unable to load resume.");
  }

  return response.json();
}

export async function createResume(payload) {
  const response = await fetch(RESUME_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw await parseApiError(response, "Unable to save resume.");
  }

  return response.json();
}

export async function updateResume(resumeId, payload) {
  const response = await fetch(`${RESUME_ENDPOINT}/${resumeId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw await parseApiError(response, "Unable to update resume.");
  }

  return response.json();
}
