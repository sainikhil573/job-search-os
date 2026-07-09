import { Field, ResumeSectionShell, TextArea } from "./ResumeFormControls.jsx";

function ResumeSummarySection({ resume, onChange }) {
  return (
    <ResumeSectionShell title="Basics">
      <div className="grid gap-4 md:grid-cols-2">
        <Field
          label="Resume title"
          name="title"
          onChange={onChange}
          placeholder="Base resume"
          value={resume.title}
        />
        <Field
          label="Target role"
          name="target_role"
          onChange={onChange}
          placeholder="Product Manager"
          value={resume.target_role}
        />
        <div className="md:col-span-2">
          <TextArea
            label="Professional summary"
            name="professional_summary"
            onChange={onChange}
            placeholder="A concise summary of your experience, strengths, and target direction."
            value={resume.professional_summary}
          />
        </div>
      </div>
    </ResumeSectionShell>
  );
}

export default ResumeSummarySection;
