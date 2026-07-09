import { useEffect, useMemo, useState } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://127.0.0.1:8000";

const emptyProfile = {
  full_name: "",
  email: "",
  phone: "",
  location: "",
  linkedin_url: "",
  github_url: "",
  work_authorization: "",
  target_roles: "",
  summary: "",
  education: [],
  work_experience: [],
  skills: [],
  projects: [],
};

const emptyItems = {
  education: {
    school: "",
    degree: "",
    field_of_study: "",
    start_date: "",
    end_date: "",
    notes: "",
  },
  work_experience: {
    company: "",
    title: "",
    location: "",
    start_date: "",
    end_date: "",
    description: "",
  },
  skills: {
    name: "",
    category: "",
  },
  projects: {
    name: "",
    url: "",
    description: "",
  },
};

const textInputClass =
  "mt-1 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-950 shadow-sm outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100";

const textAreaClass = `${textInputClass} min-h-28 resize-y`;

function Field({ label, name, value, onChange, type = "text", placeholder = "" }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-zinc-700">{label}</span>
      <input
        className={textInputClass}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </label>
  );
}

function TextArea({ label, name, value, onChange, placeholder = "" }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-zinc-700">{label}</span>
      <textarea
        className={textAreaClass}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </label>
  );
}

function SectionHeader({ title, onAdd }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-zinc-200 pb-3">
      <h3 className="text-lg font-semibold text-zinc-950">{title}</h3>
      <button
        className="rounded-md border border-zinc-300 px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50"
        onClick={onAdd}
        type="button"
      >
        Add
      </button>
    </div>
  );
}

function EmptyState({ label }) {
  return (
    <div className="rounded-md border border-dashed border-zinc-300 px-4 py-6 text-center text-sm text-zinc-500">
      No {label} added yet
    </div>
  );
}

function RepeatableSection({ title, collection, items, onAdd, onChange, onRemove }) {
  return (
    <section className="space-y-4 rounded-lg border border-zinc-200 bg-white p-5">
      <SectionHeader title={title} onAdd={() => onAdd(collection)} />

      {items.length === 0 ? (
        <EmptyState label={title.toLowerCase()} />
      ) : (
        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              className="space-y-4 border-b border-zinc-100 pb-4 last:border-b-0 last:pb-0"
              key={item.id ?? `${collection}-${index}`}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-medium text-zinc-500">
                  {title} {index + 1}
                </p>
                <button
                  className="rounded-md px-2 py-1 text-sm font-medium text-red-700 transition hover:bg-red-50"
                  onClick={() => onRemove(collection, index)}
                  type="button"
                >
                  Remove
                </button>
              </div>

              {collection === "education" && (
                <div className="grid gap-4 md:grid-cols-2">
                  <Field
                    label="School"
                    name="school"
                    onChange={(event) => onChange(collection, index, event)}
                    value={item.school}
                  />
                  <Field
                    label="Degree"
                    name="degree"
                    onChange={(event) => onChange(collection, index, event)}
                    value={item.degree}
                  />
                  <Field
                    label="Field of study"
                    name="field_of_study"
                    onChange={(event) => onChange(collection, index, event)}
                    value={item.field_of_study}
                  />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      label="Start"
                      name="start_date"
                      onChange={(event) => onChange(collection, index, event)}
                      value={item.start_date}
                    />
                    <Field
                      label="End"
                      name="end_date"
                      onChange={(event) => onChange(collection, index, event)}
                      value={item.end_date}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <TextArea
                      label="Notes"
                      name="notes"
                      onChange={(event) => onChange(collection, index, event)}
                      value={item.notes}
                    />
                  </div>
                </div>
              )}

              {collection === "work_experience" && (
                <div className="grid gap-4 md:grid-cols-2">
                  <Field
                    label="Company"
                    name="company"
                    onChange={(event) => onChange(collection, index, event)}
                    value={item.company}
                  />
                  <Field
                    label="Title"
                    name="title"
                    onChange={(event) => onChange(collection, index, event)}
                    value={item.title}
                  />
                  <Field
                    label="Location"
                    name="location"
                    onChange={(event) => onChange(collection, index, event)}
                    value={item.location}
                  />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      label="Start"
                      name="start_date"
                      onChange={(event) => onChange(collection, index, event)}
                      value={item.start_date}
                    />
                    <Field
                      label="End"
                      name="end_date"
                      onChange={(event) => onChange(collection, index, event)}
                      value={item.end_date}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <TextArea
                      label="Description"
                      name="description"
                      onChange={(event) => onChange(collection, index, event)}
                      value={item.description}
                    />
                  </div>
                </div>
              )}

              {collection === "skills" && (
                <div className="grid gap-4 md:grid-cols-2">
                  <Field
                    label="Skill"
                    name="name"
                    onChange={(event) => onChange(collection, index, event)}
                    value={item.name}
                  />
                  <Field
                    label="Category"
                    name="category"
                    onChange={(event) => onChange(collection, index, event)}
                    value={item.category}
                  />
                </div>
              )}

              {collection === "projects" && (
                <div className="grid gap-4 md:grid-cols-2">
                  <Field
                    label="Project name"
                    name="name"
                    onChange={(event) => onChange(collection, index, event)}
                    value={item.name}
                  />
                  <Field
                    label="URL"
                    name="url"
                    onChange={(event) => onChange(collection, index, event)}
                    value={item.url}
                  />
                  <div className="md:col-span-2">
                    <TextArea
                      label="Description"
                      name="description"
                      onChange={(event) => onChange(collection, index, event)}
                      value={item.description}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function sanitizeProfile(profile) {
  return {
    ...emptyProfile,
    ...profile,
    education: profile.education ?? [],
    work_experience: profile.work_experience ?? [],
    skills: profile.skills ?? [],
    projects: profile.projects ?? [],
  };
}

function Profile() {
  const [profile, setProfile] = useState(emptyProfile);
  const [hasExistingProfile, setHasExistingProfile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState(null);

  const saveLabel = useMemo(
    () => (hasExistingProfile ? "Update profile" : "Save profile"),
    [hasExistingProfile],
  );

  useEffect(() => {
    async function loadProfile() {
      try {
        const response = await fetch(`${API_BASE_URL}/profile`);

        if (response.status === 404) {
          setHasExistingProfile(false);
          return;
        }

        if (!response.ok) {
          throw new Error("Unable to load profile.");
        }

        const data = await response.json();
        setProfile(sanitizeProfile(data));
        setHasExistingProfile(true);
      } catch (error) {
        setMessage({ type: "error", text: error.message });
      } finally {
        setIsLoading(false);
      }
    }

    loadProfile();
  }, []);

  function handleFieldChange(event) {
    const { name, value } = event.target;
    setProfile((current) => ({ ...current, [name]: value }));
  }

  function handleAdd(collection) {
    setProfile((current) => ({
      ...current,
      [collection]: [...current[collection], { ...emptyItems[collection] }],
    }));
  }

  function handleNestedChange(collection, index, event) {
    const { name, value } = event.target;
    setProfile((current) => ({
      ...current,
      [collection]: current[collection].map((item, itemIndex) =>
        itemIndex === index ? { ...item, [name]: value } : item,
      ),
    }));
  }

  function handleRemove(collection, index) {
    setProfile((current) => ({
      ...current,
      [collection]: current[collection].filter((_, itemIndex) => itemIndex !== index),
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSaving(true);
    setMessage(null);

    const payload = sanitizeProfile(profile);
    const method = hasExistingProfile ? "PUT" : "POST";

    try {
      const response = await fetch(`${API_BASE_URL}/profile`, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.detail ?? "Unable to save profile.");
      }

      const savedProfile = await response.json();
      setProfile(sanitizeProfile(savedProfile));
      setHasExistingProfile(true);
      setMessage({ type: "success", text: "Profile saved." });
    } catch (error) {
      setMessage({ type: "error", text: error.message });
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-3xl font-semibold">Profile</h2>
        <p className="mt-2 text-zinc-600">
          Candidate details, career history, skills, and project highlights.
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

      {isLoading ? (
        <div className="rounded-lg border border-zinc-200 bg-white p-5 text-sm text-zinc-500">
          Loading profile...
        </div>
      ) : (
        <form className="space-y-6" onSubmit={handleSubmit}>
          <section className="space-y-4 rounded-lg border border-zinc-200 bg-white p-5">
            <h3 className="border-b border-zinc-200 pb-3 text-lg font-semibold text-zinc-950">
              Basics
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <Field
                label="Full name"
                name="full_name"
                onChange={handleFieldChange}
                value={profile.full_name}
              />
              <Field
                label="Email"
                name="email"
                onChange={handleFieldChange}
                type="email"
                value={profile.email}
              />
              <Field
                label="Phone"
                name="phone"
                onChange={handleFieldChange}
                value={profile.phone}
              />
              <Field
                label="Location"
                name="location"
                onChange={handleFieldChange}
                value={profile.location}
              />
              <Field
                label="LinkedIn URL"
                name="linkedin_url"
                onChange={handleFieldChange}
                value={profile.linkedin_url}
              />
              <Field
                label="GitHub URL"
                name="github_url"
                onChange={handleFieldChange}
                value={profile.github_url}
              />
              <Field
                label="Work authorization / visa status"
                name="work_authorization"
                onChange={handleFieldChange}
                value={profile.work_authorization}
              />
              <Field
                label="Target roles"
                name="target_roles"
                onChange={handleFieldChange}
                placeholder="Product Manager, Data Analyst"
                value={profile.target_roles}
              />
              <div className="md:col-span-2">
                <TextArea
                  label="Summary"
                  name="summary"
                  onChange={handleFieldChange}
                  value={profile.summary}
                />
              </div>
            </div>
          </section>

          <RepeatableSection
            collection="education"
            items={profile.education}
            onAdd={handleAdd}
            onChange={handleNestedChange}
            onRemove={handleRemove}
            title="Education"
          />

          <RepeatableSection
            collection="work_experience"
            items={profile.work_experience}
            onAdd={handleAdd}
            onChange={handleNestedChange}
            onRemove={handleRemove}
            title="Work Experience"
          />

          <RepeatableSection
            collection="skills"
            items={profile.skills}
            onAdd={handleAdd}
            onChange={handleNestedChange}
            onRemove={handleRemove}
            title="Skills"
          />

          <RepeatableSection
            collection="projects"
            items={profile.projects}
            onAdd={handleAdd}
            onChange={handleNestedChange}
            onRemove={handleRemove}
            title="Projects"
          />

          <div className="sticky bottom-0 flex justify-end border-t border-zinc-200 bg-stone-50 py-4">
            <button
              className="rounded-md bg-zinc-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:bg-zinc-400"
              disabled={isSaving}
              type="submit"
            >
              {isSaving ? "Saving..." : saveLabel}
            </button>
          </div>
        </form>
      )}
    </section>
  );
}

export default Profile;
