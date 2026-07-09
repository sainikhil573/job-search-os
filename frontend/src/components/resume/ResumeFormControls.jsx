export const textInputClass =
  "mt-1 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-950 shadow-sm outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100";

export const textAreaClass = `${textInputClass} min-h-28 resize-y`;

export function Field({
  label,
  name,
  onChange,
  placeholder = "",
  type = "text",
  value,
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-zinc-700">{label}</span>
      <input
        className={textInputClass}
        name={name}
        onChange={(event) => onChange(name, event.target.value)}
        placeholder={placeholder}
        type={type}
        value={value ?? ""}
      />
    </label>
  );
}

export function TextArea({ label, name, onChange, placeholder = "", value }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-zinc-700">{label}</span>
      <textarea
        className={textAreaClass}
        name={name}
        onChange={(event) => onChange(name, event.target.value)}
        placeholder={placeholder}
        value={value ?? ""}
      />
    </label>
  );
}

export function ResumeSectionShell({ children, title }) {
  return (
    <section className="space-y-4 rounded-lg border border-zinc-200 bg-white p-5">
      <h3 className="border-b border-zinc-200 pb-3 text-lg font-semibold text-zinc-950">
        {title}
      </h3>
      {children}
    </section>
  );
}

export function RepeatableSectionShell({ children, collection, onAdd, title }) {
  return (
    <section className="space-y-4 rounded-lg border border-zinc-200 bg-white p-5">
      <div className="flex items-center justify-between gap-3 border-b border-zinc-200 pb-3">
        <h3 className="text-lg font-semibold text-zinc-950">{title}</h3>
        <button
          className="rounded-md border border-zinc-300 px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50"
          onClick={() => onAdd(collection)}
          type="button"
        >
          Add
        </button>
      </div>
      {children}
    </section>
  );
}

export function EmptySection({ label }) {
  return (
    <div className="rounded-md border border-dashed border-zinc-300 px-4 py-6 text-center text-sm text-zinc-500">
      No {label} added yet
    </div>
  );
}

export function ItemFrame({ children, collection, index, onRemove, title }) {
  return (
    <div className="space-y-4 border-b border-zinc-100 pb-4 last:border-b-0 last:pb-0">
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
      {children}
    </div>
  );
}
