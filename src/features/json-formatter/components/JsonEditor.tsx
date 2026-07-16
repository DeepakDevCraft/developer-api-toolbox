"use client";

import { Textarea } from "@/components/ui/textarea";

interface JsonEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function JsonEditor({
  value,
  onChange,
}: JsonEditorProps) {
  return (
    <Textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Paste your JSON here..."
      className="min-h-[400px] resize-y font-mono text-sm"
      spellCheck={false}
    />
  );
}