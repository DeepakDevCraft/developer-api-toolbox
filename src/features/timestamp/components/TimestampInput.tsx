interface TimestampInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function TimestampInput({
  value,
  onChange,
}: TimestampInputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Enter Unix timestamp..."
      className="w-full rounded-md border bg-background p-3 font-mono"
    />
  );
}