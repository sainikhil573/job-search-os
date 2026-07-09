const metrics = [
  { label: "Applications", value: "0" },
  { label: "Resumes", value: "0" },
  { label: "Interviews", value: "0" },
];

function Dashboard() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-3xl font-semibold">Dashboard</h2>
        <p className="mt-2 text-zinc-600">Your job search command center.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {metrics.map((metric) => (
          <article
            key={metric.label}
            className="rounded-lg border border-zinc-200 bg-white p-5"
          >
            <p className="text-sm font-medium text-zinc-500">{metric.label}</p>
            <p className="mt-3 text-3xl font-semibold">{metric.value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Dashboard;
