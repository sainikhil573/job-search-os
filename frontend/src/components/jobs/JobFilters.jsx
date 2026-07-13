import { jobStatuses } from "./jobDefaults.js";

function JobFilters({
  includeArchived,
  matchCount,
  onClearFilters,
  onIncludeArchivedChange,
  onPriorityFilterChange,
  onSearchTermChange,
  onStatusFilterChange,
  priorityFilter,
  priorityOptions,
  searchTerm,
  statusFilter,
  totalCount,
}) {
  const hasFilters = searchTerm.trim() || statusFilter || priorityFilter;

  return (
    <div className="space-y-4 rounded-lg border border-zinc-200 bg-white p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-zinc-700">Job list</p>
          <p className="mt-1 text-sm text-zinc-500">
            Showing {matchCount} of {totalCount} loaded jobs
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {hasFilters && (
            <button
              className="rounded-md border border-zinc-300 px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50"
              onClick={onClearFilters}
              type="button"
            >
              Clear filters
            </button>
          )}
          <label className="flex items-center gap-2 text-sm font-medium text-zinc-700">
            <input
              checked={includeArchived}
              className="h-4 w-4 rounded border-zinc-300 text-teal-700 focus:ring-teal-600"
              onChange={(event) => onIncludeArchivedChange(event.target.checked)}
              type="checkbox"
            />
            Include archived jobs
          </label>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_180px_180px]">
        <label className="block">
          <span className="text-sm font-medium text-zinc-700">Search</span>
          <input
            className="mt-1 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-950 shadow-sm outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            onChange={(event) => onSearchTermChange(event.target.value)}
            placeholder="Company, title, location, source, notes"
            type="search"
            value={searchTerm}
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-zinc-700">Status</span>
          <select
            className="mt-1 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-950 shadow-sm outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            onChange={(event) => onStatusFilterChange(event.target.value)}
            value={statusFilter}
          >
            <option value="">Any status</option>
            {jobStatuses.map((status) => (
              <option key={status.value} value={status.value}>
                {status.label}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-zinc-700">Priority</span>
          <select
            className="mt-1 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-950 shadow-sm outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            onChange={(event) => onPriorityFilterChange(event.target.value)}
            value={priorityFilter}
          >
            <option value="">Any priority</option>
            {priorityOptions.map((priority) => (
              <option key={priority} value={priority}>
                {priority}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}

export default JobFilters;
