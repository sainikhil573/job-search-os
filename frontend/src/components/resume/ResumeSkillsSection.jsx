import {
  EmptySection,
  Field,
  ItemFrame,
  RepeatableSectionShell,
} from "./ResumeFormControls.jsx";

function ResumeSkillsSection({ items, onAdd, onChange, onRemove }) {
  return (
    <RepeatableSectionShell
      collection="skills_json"
      onAdd={onAdd}
      title="Skills"
    >
      {items.length === 0 ? (
        <EmptySection label="skills" />
      ) : (
        <div className="space-y-4">
          {items.map((item, index) => (
            <ItemFrame
              collection="skills_json"
              index={index}
              key={`skill-${index}`}
              onRemove={onRemove}
              title="Skill"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <Field
                  label="Skill"
                  name="name"
                  onChange={(name, value) =>
                    onChange("skills_json", index, name, value)
                  }
                  value={item.name}
                />
                <Field
                  label="Category"
                  name="category"
                  onChange={(name, value) =>
                    onChange("skills_json", index, name, value)
                  }
                  placeholder="Tools, Leadership, Analytics"
                  value={item.category}
                />
              </div>
            </ItemFrame>
          ))}
        </div>
      )}
    </RepeatableSectionShell>
  );
}

export default ResumeSkillsSection;
