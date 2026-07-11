import { useEffect, useMemo, useState } from "react";
import JobEmptyState from "../components/jobs/JobEmptyState.jsx";
import JobFilters from "../components/jobs/JobFilters.jsx";
import JobForm from "../components/jobs/JobForm.jsx";
import JobTable from "../components/jobs/JobTable.jsx";
import {
  buildJobPayload,
  emptyJob,
  sanitizeJob,
} from "../components/jobs/jobDefaults.js";
import {
  createJob,
  fetchJobs,
  updateJob,
  updateJobArchive,
  updateJobStatus,
} from "../services/jobApi.js";

function JobTracker() {
  const [jobs, setJobs] = useState([]);
  const [formJob, setFormJob] = useState(emptyJob);
  const [editingJobId, setEditingJobId] = useState(null);
  const [includeArchived, setIncludeArchived] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isMutating, setIsMutating] = useState(false);
  const [message, setMessage] = useState(null);

  const isEditing = useMemo(() => Boolean(editingJobId), [editingJobId]);

  async function loadJobs(showArchived = includeArchived) {
    setIsLoading(true);
    try {
      const data = await fetchJobs({ includeArchived: showArchived });
      setJobs(data.map(sanitizeJob));
    } catch (error) {
      setMessage({ type: "error", text: error.message });
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadJobs();
  }, []);

  function handleFieldChange(name, value) {
    setFormJob((current) => ({ ...current, [name]: value }));
  }

  function resetForm() {
    setFormJob(emptyJob);
    setEditingJobId(null);
  }

  function handleEdit(job) {
    setFormJob(sanitizeJob(job));
    setEditingJobId(job.id);
    setMessage(null);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const payload = buildJobPayload(formJob);

    if (!payload.company_name || !payload.job_title) {
      setMessage({ type: "error", text: "Company and job title are required." });
      return;
    }

    setIsSaving(true);
    setMessage(null);
    try {
      const savedJob = isEditing
        ? await updateJob(editingJobId, payload)
        : await createJob(payload);

      setJobs((current) => {
        const sanitizedJob = sanitizeJob(savedJob);
        if (isEditing) {
          return current.map((job) => (job.id === sanitizedJob.id ? sanitizedJob : job));
        }
        return [sanitizedJob, ...current];
      });
      resetForm();
      setMessage({ type: "success", text: "Job saved." });
      if (!includeArchived && savedJob.archived) {
        await loadJobs(false);
      }
    } catch (error) {
      setMessage({ type: "error", text: error.message });
    } finally {
      setIsSaving(false);
    }
  }

  async function handleStatusChange(jobId, status) {
    setIsMutating(true);
    setMessage(null);

    try {
      const savedJob = sanitizeJob(await updateJobStatus(jobId, status));
      setJobs((current) =>
        current.map((job) => (job.id === savedJob.id ? savedJob : job)),
      );
      setMessage({ type: "success", text: "Job status updated." });
    } catch (error) {
      setMessage({ type: "error", text: error.message });
    } finally {
      setIsMutating(false);
    }
  }

  async function handleArchiveChange(jobId, archived) {
    setIsMutating(true);
    setMessage(null);

    try {
      const savedJob = sanitizeJob(await updateJobArchive(jobId, archived));
      setJobs((current) => {
        if (!includeArchived && savedJob.archived) {
          return current.filter((job) => job.id !== savedJob.id);
        }
        return current.map((job) => (job.id === savedJob.id ? savedJob : job));
      });
      if (editingJobId === jobId) {
        resetForm();
      }
      setMessage({
        type: "success",
        text: archived ? "Job archived." : "Job unarchived.",
      });
    } catch (error) {
      setMessage({ type: "error", text: error.message });
    } finally {
      setIsMutating(false);
    }
  }

  async function handleIncludeArchivedChange(value) {
    setIncludeArchived(value);
    await loadJobs(value);
  }

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-3xl font-semibold">Job Tracker</h2>
        <p className="mt-2 text-zinc-600">
          Manually track jobs, statuses, posting details, and follow-up notes.
        </p>
      </div>

      {message && (
        <div
          className={[
            "rounded-md border px-4 py-3 text-sm font-medium",
            message.type === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-800"
              : "border-red-200 bg-red-50 text-red-800",
          ].join(" ")}
        >
          {message.text}
        </div>
      )}

      <div className="grid gap-6 xl:grid-cols-[420px_minmax(0,1fr)]">
        <JobForm
          formJob={formJob}
          isEditing={isEditing}
          isSaving={isSaving}
          onCancelEdit={resetForm}
          onChange={handleFieldChange}
          onSubmit={handleSubmit}
        />

        <div className="space-y-4">
          <JobFilters
            includeArchived={includeArchived}
            onIncludeArchivedChange={handleIncludeArchivedChange}
          />

          {isLoading ? (
            <div className="rounded-lg border border-zinc-200 bg-white p-5 text-sm text-zinc-500">
              Loading jobs...
            </div>
          ) : jobs.length === 0 ? (
            <JobEmptyState
              includeArchived={includeArchived}
              onCreateNew={resetForm}
            />
          ) : (
            <JobTable
              isMutating={isMutating}
              jobs={jobs}
              onArchiveChange={handleArchiveChange}
              onEdit={handleEdit}
              onStatusChange={handleStatusChange}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default JobTracker;
