function PreviewList({ children, isEmpty }) {
  if (isEmpty) {
    return <p className="text-sm text-zinc-500">Nothing added yet.</p>;
  }

  return <div className="space-y-3">{children}</div>;
}

function ResumePreview({ resume }) {
  return (
    <aside className="space-y-5 rounded-lg border border-zinc-200 bg-white p-5">
      <div className="border-b border-zinc-200 pb-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Preview
        </p>
        <h3 className="mt-1 text-2xl font-semibold text-zinc-950">
          {resume.title || "Untitled resume"}
        </h3>
        {resume.target_role && (
          <p className="mt-1 text-sm font-medium text-zinc-600">
            {resume.target_role}
          </p>
        )}
      </div>

      <section className="space-y-2">
        <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
          Summary
        </h4>
        <p className="whitespace-pre-line text-sm leading-6 text-zinc-700">
          {resume.professional_summary || "No professional summary added yet."}
        </p>
      </section>

      <section className="space-y-2">
        <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
          Skills
        </h4>
        <PreviewList isEmpty={resume.skills_json.length === 0}>
          <div className="flex flex-wrap gap-2">
            {resume.skills_json.map((skill, index) => (
              <span
                className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700"
                key={`preview-skill-${index}`}
              >
                {skill.name || "Unnamed skill"}
              </span>
            ))}
          </div>
        </PreviewList>
      </section>

      <section className="space-y-2">
        <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
          Experience
        </h4>
        <PreviewList isEmpty={resume.experience_json.length === 0}>
          {resume.experience_json.map((item, index) => (
            <div key={`preview-experience-${index}`}>
              <p className="text-sm font-semibold text-zinc-900">
                {item.title || "Untitled role"}
              </p>
              <p className="text-sm text-zinc-600">
                {[item.company, item.location].filter(Boolean).join(" - ")}
              </p>
              {item.highlights?.length > 0 && (
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
                  {item.highlights.map((highlight, highlightIndex) => (
                    <li key={`preview-highlight-${index}-${highlightIndex}`}>
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </PreviewList>
      </section>

      <section className="space-y-2">
        <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
          Projects
        </h4>
        <PreviewList isEmpty={resume.projects_json.length === 0}>
          {resume.projects_json.map((item, index) => (
            <div key={`preview-project-${index}`}>
              <p className="text-sm font-semibold text-zinc-900">
                {item.name || "Untitled project"}
              </p>
              <p className="text-sm text-zinc-700">{item.description}</p>
            </div>
          ))}
        </PreviewList>
      </section>
    </aside>
  );
}

export default ResumePreview;
