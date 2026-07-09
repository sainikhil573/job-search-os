function Profile() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-3xl font-semibold">Profile</h2>
        <p className="mt-2 text-zinc-600">Career details and preferences.</p>
      </div>

      <div className="rounded-lg border border-zinc-200 bg-white p-5">
        <dl className="grid gap-4 sm:grid-cols-2">
          <div>
            <dt className="text-sm font-medium text-zinc-500">Name</dt>
            <dd className="mt-1 text-lg font-medium">Not set</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-zinc-500">Target role</dt>
            <dd className="mt-1 text-lg font-medium">Not set</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export default Profile;
