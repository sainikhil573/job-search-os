import ResumeCertificationsSection from "./ResumeCertificationsSection.jsx";
import ResumeEducationSection from "./ResumeEducationSection.jsx";
import ResumeExperienceSection from "./ResumeExperienceSection.jsx";
import ResumeProjectsSection from "./ResumeProjectsSection.jsx";
import ResumeSkillsSection from "./ResumeSkillsSection.jsx";
import ResumeSummarySection from "./ResumeSummarySection.jsx";

function ResumeForm({
  isSaving,
  onAdd,
  onFieldChange,
  onRemove,
  onSectionChange,
  onSubmit,
  resume,
  saveLabel,
}) {
  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      <ResumeSummarySection resume={resume} onChange={onFieldChange} />
      <ResumeSkillsSection
        items={resume.skills_json}
        onAdd={onAdd}
        onChange={onSectionChange}
        onRemove={onRemove}
      />
      <ResumeExperienceSection
        items={resume.experience_json}
        onAdd={onAdd}
        onChange={onSectionChange}
        onRemove={onRemove}
      />
      <ResumeProjectsSection
        items={resume.projects_json}
        onAdd={onAdd}
        onChange={onSectionChange}
        onRemove={onRemove}
      />
      <ResumeEducationSection
        items={resume.education_json}
        onAdd={onAdd}
        onChange={onSectionChange}
        onRemove={onRemove}
      />
      <ResumeCertificationsSection
        items={resume.certifications_json}
        onAdd={onAdd}
        onChange={onSectionChange}
        onRemove={onRemove}
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
  );
}

export default ResumeForm;
