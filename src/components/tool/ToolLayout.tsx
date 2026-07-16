import type { ReactNode } from "react";

interface ToolLayoutProps {
  children: ReactNode;
}

export default function ToolLayout({
  children,
}: ToolLayoutProps) {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
      {children}
    </div>
  );
}