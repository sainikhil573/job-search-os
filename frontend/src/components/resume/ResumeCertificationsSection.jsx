import {
  EmptySection,
  Field,
  ItemFrame,
  RepeatableSectionShell,
} from "./ResumeFormControls.jsx";

function ResumeCertificationsSection({ items, onAdd, onChange, onRemove }) {
  return (
    <RepeatableSectionShell
      collection="certifications_json"
      onAdd={onAdd}
      title="Certifications"
    >
      {items.length === 0 ? (
        <EmptySection label="certifications" />
      ) : (
        <div className="space-y-4">
          {items.map((item, index) => (
            <ItemFrame
              collection="certifications_json"
              index={index}
              key={`certification-${index}`}
              onRemove={onRemove}
              title="Certification"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <Field
                  label="Name"
                  name="name"
                  onChange={(name, value) =>
                    onChange("certifications_json", index, name, value)
                  }
                  value={item.name}
                />
                <Field
                  label="Issuer"
                  name="issuer"
                  onChange={(name, value) =>
                    onChange("certifications_json", index, name, value)
                  }
                  value={item.issuer}
                />
                <Field
                  label="Issue date"
                  name="issue_date"
                  onChange={(name, value) =>
                    onChange("certifications_json", index, name, value)
                  }
                  value={item.issue_date}
                />
                <Field
                  label="Credential URL"
                  name="credential_url"
                  onChange={(name, value) =>
                    onChange("certifications_json", index, name, value)
                  }
                  value={item.credential_url}
                />
              </div>
            </ItemFrame>
          ))}
        </div>
      )}
    </RepeatableSectionShell>
  );
}

export default ResumeCertificationsSection;
