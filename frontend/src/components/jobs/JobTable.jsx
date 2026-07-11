import JobStatusSelect from "./JobStatusSelect.jsx";
import { getStatusLabel } from "./jobDefaults.js";

function formatDate(value) {
  if (!value) {
    return "-";
  }
  return value;
}

function JobTable({
  isMutating,
  jobs,
  onArchiveChange,
  onEdit,
  onStatusChange,
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-zinc-200">
          <thead className="bg-zinc-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-zinc-700">
                Company
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-zinc-700">
                Role
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-zinc-700">
                Status
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-zinc-700">
                Dates
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-zinc-700">
                Source
              </th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-zinc-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {jobs.map((job) => (
              <tr key={job.id} className={job.archived ? "bg-zinc-50" : "bg-white"}>
                <td className="px-4 py-4 align-top">
                  <p className="text-sm font-semibold text-zinc-950">
                    {job.company_name}
                  </p>
                  <p className="mt-1 text-sm text-zinc-500">
                    {job.location || "Location not set"}
                  </p>
                  {job.archived && (
                    <span className="mt-2 inline-flex rounded-md bg-zinc-200 px-2 py-1 text-xs font-medium text-zinc-700">
                      Archived
                    </span>
                  )}
                </td>
                <td className="px-4 py-4 align-top">
                  <p className="text-sm font-medium text-zinc-900">{job.job_title}</p>
                  <p className="mt-1 text-sm text-zinc-500">
                    {[job.workplace_type, job.employment_type]
                      .filter(Boolean)
                      .join(" · ") || "Details not set"}
                  </p>
                </td>
                <td className="min-w-40 px-4 py-4 align-top">
                  <JobStatusSelect
                    disabled={isMutating}
                    onChange={(status) => onStatusChange(job.id, status)}
                    value={job.status}
                  />
                  <p className="sr-only">{getStatusLabel(job.status)}</p>
                </td>
                <td className="px-4 py-4 align-top text-sm text-zinc-600">
                  <p>Saved: {formatDate(job.date_saved)}</p>
                  <p className="mt-1">Applied: {formatDate(job.date_applied)}</p>
                  <p className="mt-1">Follow-up: {formatDate(job.follow_up_date)}</p>
                </td>
                <td className="px-4 py-4 align-top text-sm text-zinc-600">
                  <p>{job.source || "-"}</p>
                  {job.job_url && (
                    <a
                      className="mt-1 inline-block font-medium text-teal-700 hover:text-teal-900"
                      href={job.job_url}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Open posting
                    </a>
                  )}
                </td>
                <td className="px-4 py-4 align-top">
                  <div className="flex flex-col items-end gap-2">
                    <button
                      className="rounded-md border border-zinc-300 px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50"
                      disabled={isMutating}
                      onClick={() => onEdit(job)}
                      type="button"
                    >
                      Edit
                    </button>
                    <button
                      className="rounded-md px-3 py-2 text-sm font-medium text-red-700 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:text-zinc-400"
                      disabled={isMutating}
                      onClick={() => onArchiveChange(job.id, !job.archived)}
                      type="button"
                    >
                      {job.archived ? "Unarchive" : "Archive"}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default JobTable;
