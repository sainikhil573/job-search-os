import {
  EmptySection,
  Field,
  ItemFrame,
  RepeatableSectionShell,
  TextArea,
} from "./ResumeFormControls.jsx";

function ResumeEducationSection({ items, onAdd, onChange, onRemove }) {
  return (
    <RepeatableSectionShell
      collection="education_json"
      onAdd={onAdd}
      title="Education"
    >
      {items.length === 0 ? (
        <EmptySection label="education" />
      ) : (
        <div className="space-y-4">
          {items.map((item, index) => (
            <ItemFrame
              collection="education_json"
              index={index}
              key={`education-${index}`}
              onRemove={onRemove}
              title="Education"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <Field
                  label="Institution"
                  name="institution"
                  onChange={(name, value) =>
                    onChange("education_json", index, name, value)
                  }
                  value={item.institution}
                />
                <Field
                  label="Degree"
                  name="degree"
                  onChange={(name, value) =>
                    onChange("education_json", index, name, value)
                  }
                  value={item.degree}
                />
                <Field
                  label="Field of study"
                  name="field_of_study"
                  onChange={(name, value) =>
                    onChange("education_json", index, name, value)
                  }
                  value={item.field_of_study}
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Start"
                    name="start_date"
                    onChange={(name, value) =>
                      onChange("education_json", index, name, value)
                    }
                    value={item.start_date}
                  />
                  <Field
                    label="End"
                    name="end_date"
                    onChange={(name, value) =>
                      onChange("education_json", index, name, value)
                    }
                    value={item.end_date}
                  />
                </div>
                <div className="md:col-span-2">
                  <TextArea
                    label="Notes"
                    name="notes"
                    onChange={(name, value) =>
                      onChange("education_json", index, name, value)
                    }
                    value={item.notes}
                  />
                </div>
              </div>
            </ItemFrame>
          ))}
        </div>
      )}
    </RepeatableSectionShell>
  );
}

export default ResumeEducationSection;
