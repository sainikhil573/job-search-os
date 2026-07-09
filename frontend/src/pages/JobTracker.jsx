function JobTracker() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-3xl font-semibold">Job Tracker</h2>
        <p className="mt-2 text-zinc-600">Applications and next steps.</p>
      </div>

      <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white">
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-6 text-sm text-zinc-500" colSpan="3">
                No applications yet
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default JobTracker;
