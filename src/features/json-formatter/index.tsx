"use client";

import { toast } from "sonner";

import ToolHeader from "@/components/tool/ToolHeader";
import ToolLayout from "@/components/tool/ToolLayout";
import ToolSection from "@/components/tool/ToolSection";

import JsonEditor from "./components/JsonEditor";
import JsonToolbar from "./components/JsonToolbar";
import { useJsonFormatter } from "./hooks/useJsonFormatter";

export default function JsonFormatterPage() {
  const {
    json,
    updateJson,
    validation,
    formatJsonInput,
    minify,
    copy,
    clearJson,
    stats,
  } = useJsonFormatter();

  const hasInput = json.trim().length > 0;

  const handleCopy = async () => {
    const copied = await copy();

    if (copied) {
      toast.success("Copied to clipboard");
    } else {
      toast.error("Failed to copy");
    }
  };

  return (
    <ToolLayout>
      <ToolHeader
        title="JSON Formatter"
        description="Format, validate, and minify JSON."
      />

      <ToolSection title="Input">
        <JsonEditor
          value={json}
          onChange={updateJson}
        />
      </ToolSection>

      <ToolSection title="Actions">
        <JsonToolbar
          hasInput={hasInput}
          onFormat={formatJsonInput}
          onMinify={minify}
          onCopy={handleCopy}
          onClear={clearJson}
        />
      </ToolSection>

      <ToolSection title="Status">
        <div className="space-y-4">
          {!hasInput ? (
            <p className="text-sm text-muted-foreground">
              👋 Paste JSON to begin.
            </p>
          ) : validation.isValid ? (
            <div>
              <p className="font-medium text-green-600">
                ✅ Valid JSON
              </p>
            </div>
          ) : (
            <div>
              <p className="font-medium text-red-600">
                ❌ Invalid JSON
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                {validation.error}
              </p>
            </div>
          )}

          <div className="grid grid-cols-3 gap-4 rounded-lg border p-4">
            <div>
              <p className="text-xs text-muted-foreground">
                Characters
              </p>
              <p className="font-semibold">
                {stats.characters}
              </p>
            </div>

            <div>
              <p className="text-xs text-muted-foreground">
                Lines
              </p>
              <p className="font-semibold">
                {stats.lines}
              </p>
            </div>

            <div>
              <p className="text-xs text-muted-foreground">
                Size
              </p>
              <p className="font-semibold">
                {stats.bytes} B
              </p>
            </div>
          </div>
        </div>
      </ToolSection>
    </ToolLayout>
  );
}