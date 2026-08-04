interface Base64EditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function Base64Editor({
  value,
  onChange,
}: Base64EditorProps) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Enter text or Base64..."
      className="min-h-[200px] w-full rounded-md border bg-background p-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary"
    />
  );
}