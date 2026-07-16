"use client";

import ToolHeader from "@/components/tool/ToolHeader";
import ToolLayout from "@/components/tool/ToolLayout";
import ToolSection from "@/components/tool/ToolSection";

import JsonEditor from "./components/JsonEditor";
import { useJsonFormatter } from "./hooks/useJsonFormatter";
import JsonToolbar from "./components/JsonToolbar";


export default function JsonFormatterPage() {
  const {
    json,
    updateJson,
    validation,
    formatJsonInput,
    minify,
} = useJsonFormatter();

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
    <JsonToolbar onFormat={formatJsonInput} onMinify={minify} />
</ToolSection>

     <ToolSection title="Status">
  <div className="space-y-2">
    <p
      className={`font-medium ${
        validation.isValid ? "text-green-600" : "text-red-600"
      }`}
    >
      {validation.isValid ? "✅ Valid JSON" : "❌ Invalid JSON"}
    </p>

    {!validation.isValid && validation.error && (
      <p className="text-sm text-muted-foreground">
        {validation.error}
      </p>
    )}
  </div>
</ToolSection>
    </ToolLayout>
  );
}