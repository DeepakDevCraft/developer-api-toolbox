"use client";

import { Button } from "@/components/ui/button";

export interface ToolAction {
  label: string;
  onClick: () => void | Promise<void>;
  disabled?: boolean;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
}

interface ToolActionsProps {
  actions: ToolAction[];
}

export default function ToolActions({
  actions,
}: ToolActionsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {actions.map((action) => (
        <Button
          key={action.label}
          onClick={action.onClick}
          disabled={action.disabled}
          variant={action.variant ?? "default"}
        >
          {action.label}
        </Button>
      ))}
    </div>
  );
}