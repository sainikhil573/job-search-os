function JobEmptyState({
  hasActiveFilters = false,
  includeArchived,
  onClearFilters,
  onCreateNew,
}) {
  if (hasActiveFilters) {
    return (
      <div className="rounded-lg border border-dashed border-zinc-300 bg-white px-4 py-10 text-center">
        <h3 className="text-lg font-semibold text-zinc-950">
          No jobs match these filters
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-zinc-600">
          Adjust your search, status, or priority to widen the job list.
        </p>
        <button
          className="mt-5 rounded-md bg-zinc-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800"
          onClick={onClearFilters}
          type="button"
        >
          Clear filters
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-dashed border-zinc-300 bg-white px-4 py-10 text-center">
      <h3 className="text-lg font-semibold text-zinc-950">
        {includeArchived ? "No jobs found" : "No active jobs yet"}
      </h3>
      <p className="mx-auto mt-2 max-w-md text-sm text-zinc-600">
        Add a job to start tracking company, role, status, dates, and notes in
        one place.
      </p>
      <button
        className="mt-5 rounded-md bg-zinc-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800"
        onClick={onCreateNew}
        type="button"
      >
        Add job
      </button>
    </div>
  );
}

export default JobEmptyState;
