function JobFilters({ includeArchived, onIncludeArchivedChange }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-zinc-200 bg-white p-4">
      <p className="text-sm font-medium text-zinc-700">Job list</p>
      <label className="flex items-center gap-2 text-sm font-medium text-zinc-700">
        <input
          checked={includeArchived}
          className="h-4 w-4 rounded border-zinc-300 text-teal-700 focus:ring-teal-600"
          onChange={(event) => onIncludeArchivedChange(event.target.checked)}
          type="checkbox"
        />
        Show archived
      </label>
    </div>
  );
}

export default JobFilters;
