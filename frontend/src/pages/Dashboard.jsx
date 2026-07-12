import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { jobStatuses } from "../components/jobs/jobDefaults.js";
import { fetchJobs } from "../services/jobApi.js";

const recentJobLimit = 5;

function isArchivedJob(job) {
  return job?.archived === true;
}

function isActiveJob(job) {
  return job?.archived === false;
}

function getDisplayText(value, fallback) {
  return typeof value === "string" && value.trim() ? value.trim() : fallback;
}

function getDashboardStatusLabel(status) {
  return (
    jobStatuses.find((item) => item.value === status)?.label ?? "Unknown status"
  );
}

function getUpdatedTimestamp(job) {
  const timestamp = Date.parse(job?.updated_at ?? "");
  return Number.isNaN(timestamp) ? 0 : timestamp;
}

function formatDateTime(value) {
  if (!value) {
    return "Date not available";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "Date not available";
  }

  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function buildDashboardSummary(jobs) {
  const statusCounts = Object.fromEntries(
    jobStatuses.map((status) => [status.value, 0]),
  );

  let activeJobs = 0;
  let archivedJobs = 0;

  jobs.forEach((job) => {
    if (isActiveJob(job)) {
      activeJobs += 1;

      if (Object.hasOwn(statusCounts, job?.status)) {
        statusCounts[job.status] += 1;
      }
    } else if (isArchivedJob(job)) {
      archivedJobs += 1;
    }
  });

  const recentlyUpdatedJobs = [...jobs]
    .sort((firstJob, secondJob) => {
      const timestampDifference =
        getUpdatedTimestamp(secondJob) - getUpdatedTimestamp(firstJob);

      if (timestampDifference !== 0) {
        return timestampDifference;
      }

      return Number(secondJob?.id ?? 0) - Number(firstJob?.id ?? 0);
    })
    .slice(0, recentJobLimit);

  return {
    activeJobs,
    archivedJobs,
    recentlyUpdatedJobs,
    statusCounts,
    totalJobs: jobs.length,
    totalJobsAreArchived: jobs.length > 0 && archivedJobs === jobs.length,
  };
}

function SummaryCard({ label, value }) {
  return (
    <article className="rounded-lg border border-zinc-200 bg-white p-5">
      <p className="text-sm font-medium text-zinc-500">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-zinc-950">{value}</p>
    </article>
  );
}

function DashboardMessage({ action, children, title, tone = "neutral" }) {
  const toneClasses =
    tone === "error"
      ? "border-red-200 bg-red-50 text-red-800"
      : "border-zinc-200 bg-white text-zinc-700";

  return (
    <div className={`rounded-lg border p-5 ${toneClasses}`}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm">{children}</p>
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}

function JobTrackerLink({ children = "Open Job Tracker" }) {
  return (
    <Link
      className="inline-flex rounded-md bg-zinc-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800"
      to="/job-tracker"
    >
      {children}
    </Link>
  );
}

function Dashboard() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const summary = useMemo(() => buildDashboardSummary(jobs), [jobs]);

  async function loadDashboardJobs() {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const data = await fetchJobs({ includeArchived: true });
      if (!Array.isArray(data)) {
        throw new Error("Unable to load dashboard jobs.");
      }

      setJobs(data);
    } catch (error) {
      setJobs([]);
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadDashboardJobs();
  }, []);

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-3xl font-semibold">Dashboard</h2>
          <p className="mt-2 text-zinc-600">
            A live summary of your persisted Job Tracker data.
          </p>
        </div>
        <JobTrackerLink />
      </div>

      {isLoading ? (
        <div className="rounded-lg border border-zinc-200 bg-white p-5 text-sm text-zinc-500">
          Loading dashboard...
        </div>
      ) : errorMessage ? (
        <DashboardMessage
          action={
            <button
              className="rounded-md bg-zinc-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800"
              onClick={loadDashboardJobs}
              type="button"
            >
              Retry
            </button>
          }
          title="Dashboard data could not be loaded"
          tone="error"
        >
          {errorMessage}
        </DashboardMessage>
      ) : (
        <>
          {summary.totalJobs === 0 && (
            <DashboardMessage
              action={<JobTrackerLink>Start Tracking Jobs</JobTrackerLink>}
              title="No jobs tracked yet"
            >
              Add your first job in Job Tracker to see active totals, archived
              totals, status counts, and recently updated jobs here.
            </DashboardMessage>
          )}

          {summary.totalJobsAreArchived && (
            <DashboardMessage
              action={<JobTrackerLink>Review Archived Jobs</JobTrackerLink>}
              title="All jobs are archived"
            >
              Your job history is still available, but there are no active job
              records right now.
            </DashboardMessage>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <SummaryCard label="Active Jobs" value={summary.activeJobs} />
            <SummaryCard label="Archived Jobs" value={summary.archivedJobs} />
          </div>

          <section className="rounded-lg border border-zinc-200 bg-white p-5">
            <div className="flex flex-col gap-3 border-b border-zinc-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-zinc-950">
                  Jobs by Status
                </h3>
                <p className="mt-1 text-sm text-zinc-500">
                  Counts include active jobs only.
                </p>
              </div>
              <JobTrackerLink>Manage Jobs</JobTrackerLink>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {jobStatuses.map((status) => (
                <article
                  className="rounded-md border border-zinc-200 bg-zinc-50 p-4"
                  key={status.value}
                >
                  <p className="text-sm font-medium text-zinc-500">
                    {status.label}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-zinc-950">
                    {summary.statusCounts[status.value]}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-zinc-200 bg-white p-5">
            <div className="flex flex-col gap-3 border-b border-zinc-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-zinc-950">
                  Recently Updated Jobs
                </h3>
                <p className="mt-1 text-sm text-zinc-500">
                  Showing up to {recentJobLimit} records from Job Tracker.
                </p>
              </div>
              <JobTrackerLink>View All Jobs</JobTrackerLink>
            </div>

            {summary.recentlyUpdatedJobs.length === 0 ? (
              <p className="mt-4 text-sm text-zinc-500">
                No recently updated jobs to show.
              </p>
            ) : (
              <div className="mt-4 divide-y divide-zinc-100">
                {summary.recentlyUpdatedJobs.map((job, index) => (
                  <article
                    className="flex flex-col gap-3 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between"
                    key={job?.id ?? `dashboard-job-${index}`}
                  >
                    <div>
                      <p className="text-sm font-semibold text-zinc-950">
                        {getDisplayText(job?.company_name, "Company not set")}
                      </p>
                      <p className="mt-1 text-sm text-zinc-600">
                        {getDisplayText(job?.job_title, "Job title not set")}
                      </p>
                      {isArchivedJob(job) && (
                        <span className="mt-2 inline-flex rounded-md bg-zinc-200 px-2 py-1 text-xs font-medium text-zinc-700">
                          Archived
                        </span>
                      )}
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-sm font-medium text-zinc-700">
                        {getDashboardStatusLabel(job?.status)}
                      </p>
                      <p className="mt-1 text-sm text-zinc-500">
                        {formatDateTime(job?.updated_at)}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        </>
      )}
    </section>
  );
}

export default Dashboard;
