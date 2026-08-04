interface UrlEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function UrlEditor({
  value,
  onChange,
}: UrlEditorProps) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Enter text or URL..."
      className="min-h-[220px] w-full rounded-md border bg-background p-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary"
    />
  );
}