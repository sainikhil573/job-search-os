import { useEffect, useMemo, useState } from "react";
import ResumeForm from "../components/resume/ResumeForm.jsx";
import ResumePreview from "../components/resume/ResumePreview.jsx";
import {
  buildResumePayload,
  emptyResume,
  emptyResumeItems,
  sanitizeResume,
} from "../components/resume/resumeDefaults.js";
import {
  createResume,
  fetchResume,
  updateResume,
} from "../services/resumeApi.js";

function ResumeStudio() {
  const [resume, setResume] = useState(emptyResume);
  const [hasExistingResume, setHasExistingResume] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState(null);

  const saveLabel = useMemo(
    () => (hasExistingResume ? "Update resume" : "Save resume"),
    [hasExistingResume],
  );

  useEffect(() => {
    async function loadResume() {
      try {
        const data = await fetchResume();
        setResume(sanitizeResume(data));
        setHasExistingResume(Boolean(data.id));
      } catch (error) {
        setMessage({ type: "error", text: error.message });
      } finally {
        setIsLoading(false);
      }
    }

    loadResume();
  }, []);

  function handleFieldChange(name, value) {
    setResume((current) => ({ ...current, [name]: value }));
  }

  function handleAdd(collection) {
    setResume((current) => ({
      ...current,
      [collection]: [...current[collection], { ...emptyResumeItems[collection] }],
    }));
  }

  function handleSectionChange(collection, index, name, value) {
    setResume((current) => ({
      ...current,
      [collection]: current[collection].map((item, itemIndex) =>
        itemIndex === index ? { ...item, [name]: value } : item,
      ),
    }));
  }

  function handleRemove(collection, index) {
    setResume((current) => ({
      ...current,
      [collection]: current[collection].filter((_, itemIndex) => itemIndex !== index),
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSaving(true);
    setMessage(null);

    try {
      const payload = buildResumePayload(resume);
      const savedResume = hasExistingResume
        ? await updateResume(resume.id, payload)
        : await createResume(payload);

      setResume(sanitizeResume(savedResume));
      setHasExistingResume(Boolean(savedResume.id));
      setMessage({ type: "success", text: "Resume saved." });
    } catch (error) {
      setMessage({ type: "error", text: error.message });
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-3xl font-semibold">Resume Studio</h2>
        <p className="mt-2 text-zinc-600">
          Build and maintain one structured base resume.
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
          Loading resume...
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <ResumeForm
            isSaving={isSaving}
            onAdd={handleAdd}
            onFieldChange={handleFieldChange}
            onRemove={handleRemove}
            onSectionChange={handleSectionChange}
            onSubmit={handleSubmit}
            resume={resume}
            saveLabel={saveLabel}
          />
          <ResumePreview resume={resume} />
        </div>
      )}
    </section>
  );
}

export default ResumeStudio;
