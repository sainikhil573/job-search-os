import {
  EmptySection,
  Field,
  ItemFrame,
  RepeatableSectionShell,
  TextArea,
} from "./ResumeFormControls.jsx";

function highlightsToText(highlights) {
  return (highlights ?? []).join("\n");
}

function textToHighlights(value) {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function ResumeExperienceSection({ items, onAdd, onChange, onRemove }) {
  return (
    <RepeatableSectionShell
      collection="experience_json"
      onAdd={onAdd}
      title="Experience"
    >
      {items.length === 0 ? (
        <EmptySection label="experience" />
      ) : (
        <div className="space-y-4">
          {items.map((item, index) => (
            <ItemFrame
              collection="experience_json"
              index={index}
              key={`experience-${index}`}
              onRemove={onRemove}
              title="Experience"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <Field
                  label="Company"
                  name="company"
                  onChange={(name, value) =>
                    onChange("experience_json", index, name, value)
                  }
                  value={item.company}
                />
                <Field
                  label="Title"
                  name="title"
                  onChange={(name, value) =>
                    onChange("experience_json", index, name, value)
                  }
                  value={item.title}
                />
                <Field
                  label="Location"
                  name="location"
                  onChange={(name, value) =>
                    onChange("experience_json", index, name, value)
                  }
                  value={item.location}
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Start"
                    name="start_date"
                    onChange={(name, value) =>
                      onChange("experience_json", index, name, value)
                    }
                    value={item.start_date}
                  />
                  <Field
                    label="End"
                    name="end_date"
                    onChange={(name, value) =>
                      onChange("experience_json", index, name, value)
                    }
                    value={item.end_date}
                  />
                </div>
                <div className="md:col-span-2">
                  <TextArea
                    label="Highlights"
                    name="highlights"
                    onChange={(_, value) =>
                      onChange(
                        "experience_json",
                        index,
                        "highlights",
                        textToHighlights(value),
                      )
                    }
                    placeholder="One resume bullet per line"
                    value={highlightsToText(item.highlights)}
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

export default ResumeExperienceSection;
