import JobStatusSelect from "./JobStatusSelect.jsx";

const textInputClass =
  "mt-1 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-950 shadow-sm outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100";

const textAreaClass = `${textInputClass} min-h-28 resize-y`;

function Field({
  label,
  name,
  onChange,
  placeholder = "",
  required = false,
  type = "text",
  value,
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-zinc-700">{label}</span>
      <input
        className={textInputClass}
        name={name}
        onChange={(event) => onChange(name, event.target.value)}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value ?? ""}
      />
    </label>
  );
}

function SelectField({ label, name, onChange, options, value }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-zinc-700">{label}</span>
      <select
        className={textInputClass}
        name={name}
        onChange={(event) => onChange(name, event.target.value)}
        value={value ?? ""}
      >
        <option value="">Not specified</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextArea({ label, name, onChange, placeholder = "", value }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-zinc-700">{label}</span>
      <textarea
        className={textAreaClass}
        name={name}
        onChange={(event) => onChange(name, event.target.value)}
        placeholder={placeholder}
        value={value ?? ""}
      />
    </label>
  );
}

function JobForm({
  formJob,
  isEditing,
  isSaving,
  onCancelEdit,
  onChange,
  onSubmit,
}) {
  return (
    <form
      className="space-y-5 rounded-lg border border-zinc-200 bg-white p-5"
      noValidate
      onSubmit={onSubmit}
    >
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-zinc-200 pb-3">
        <div>
          <h3 className="text-lg font-semibold text-zinc-950">
            {isEditing ? "Edit job" : "Add job"}
          </h3>
          <p className="mt-1 text-sm text-zinc-500">
            Company and job title are required.
          </p>
        </div>
        {isEditing && (
          <button
            className="rounded-md border border-zinc-300 px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50"
            onClick={onCancelEdit}
            type="button"
          >
            Cancel
          </button>
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field
          label="Company"
          name="company_name"
          onChange={onChange}
          required
          value={formJob.company_name}
        />
        <Field
          label="Job title"
          name="job_title"
          onChange={onChange}
          required
          value={formJob.job_title}
        />
        <Field
          label="Location"
          name="location"
          onChange={onChange}
          placeholder="Remote, New York, NY"
          value={formJob.location}
        />
        <label className="block">
          <span className="text-sm font-medium text-zinc-700">Status</span>
          <div className="mt-1">
            <JobStatusSelect
              onChange={(value) => onChange("status", value)}
              value={formJob.status}
            />
          </div>
        </label>
        <SelectField
          label="Workplace type"
          name="workplace_type"
          onChange={onChange}
          options={["Remote", "Hybrid", "On-site"]}
          value={formJob.workplace_type}
        />
        <SelectField
          label="Employment type"
          name="employment_type"
          onChange={onChange}
          options={["Full-time", "Part-time", "Contract", "Internship"]}
          value={formJob.employment_type}
        />
        <Field
          label="Source"
          name="source"
          onChange={onChange}
          placeholder="LinkedIn, referral, company site"
          value={formJob.source}
        />
        <Field
          label="Priority"
          name="priority"
          onChange={onChange}
          placeholder="High, medium, low"
          value={formJob.priority}
        />
        <Field
          label="Salary range"
          name="salary_range"
          onChange={onChange}
          placeholder="$120k-$150k"
          value={formJob.salary_range}
        />
        <Field
          label="Job URL"
          name="job_url"
          onChange={onChange}
          type="url"
          value={formJob.job_url}
        />
        <Field
          label="Date applied"
          name="date_applied"
          onChange={onChange}
          type="date"
          value={formJob.date_applied}
        />
        <Field
          label="Follow-up date"
          name="follow_up_date"
          onChange={onChange}
          type="date"
          value={formJob.follow_up_date}
        />
        <div className="md:col-span-2">
          <TextArea
            label="Job description"
            name="job_description"
            onChange={onChange}
            value={formJob.job_description}
          />
        </div>
        <div className="md:col-span-2">
          <TextArea
            label="Notes"
            name="notes"
            onChange={onChange}
            value={formJob.notes}
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          className="rounded-md bg-zinc-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:bg-zinc-400"
          disabled={isSaving}
          type="submit"
        >
          {isSaving ? "Saving..." : isEditing ? "Update job" : "Save job"}
        </button>
      </div>
    </form>
  );
}

export default JobForm;
