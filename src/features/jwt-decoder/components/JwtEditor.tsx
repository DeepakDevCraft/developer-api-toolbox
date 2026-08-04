interface JwtEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function JwtEditor({
  value,
  onChange,
}: JwtEditorProps) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="min-h-[180px] w-full rounded-md border p-3 font-mono text-sm"
      placeholder="Paste JWT token here..."
    />
  );
}