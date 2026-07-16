import type { ReactNode } from "react";

interface ToolSectionProps {
  children: ReactNode;
  title?: string;
}

export default function ToolSection({
  children,
  title,
}: ToolSectionProps) {
  return (
    <section className="rounded-xl border bg-card p-6 shadow-sm">
      {title && (
        <h2 className="mb-4 text-lg font-semibold">
          {title}
        </h2>
      )}

      {children}
    </section>
  );
}