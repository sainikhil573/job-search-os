import {
  EmptySection,
  Field,
  ItemFrame,
  RepeatableSectionShell,
  TextArea,
} from "./ResumeFormControls.jsx";

function ResumeProjectsSection({ items, onAdd, onChange, onRemove }) {
  return (
    <RepeatableSectionShell
      collection="projects_json"
      onAdd={onAdd}
      title="Projects"
    >
      {items.length === 0 ? (
        <EmptySection label="projects" />
      ) : (
        <div className="space-y-4">
          {items.map((item, index) => (
            <ItemFrame
              collection="projects_json"
              index={index}
              key={`project-${index}`}
              onRemove={onRemove}
              title="Project"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <Field
                  label="Project name"
                  name="name"
                  onChange={(name, value) =>
                    onChange("projects_json", index, name, value)
                  }
                  value={item.name}
                />
                <Field
                  label="URL"
                  name="url"
                  onChange={(name, value) =>
                    onChange("projects_json", index, name, value)
                  }
                  value={item.url}
                />
                <Field
                  label="Technologies"
                  name="technologies"
                  onChange={(name, value) =>
                    onChange("projects_json", index, name, value)
                  }
                  placeholder="React, FastAPI, SQLAlchemy"
                  value={item.technologies}
                />
                <div className="md:col-span-2">
                  <TextArea
                    label="Description"
                    name="description"
                    onChange={(name, value) =>
                      onChange("projects_json", index, name, value)
                    }
                    value={item.description}
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

export default ResumeProjectsSection;
