"use client";

import ToolHeader from "@/components/tool/ToolHeader";
import ToolLayout from "@/components/tool/ToolLayout";
import ToolSection from "@/components/tool/ToolSection";

import JsonEditor from "./components/JsonEditor";
import { useJsonFormatter } from "./hooks/useJsonFormatter";

export default function JsonFormatterPage() {
  const { json, updateJson } = useJsonFormatter();

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
        Toolbar coming next...
      </ToolSection>

      <ToolSection title="Status">
        <p className="text-sm text-muted-foreground">
          Characters: {json.length}
        </p>
      </ToolSection>
    </ToolLayout>
  );
}