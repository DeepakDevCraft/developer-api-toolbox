"use client";

import ToolActions from "@/components/tool/ToolActions";
import ToolHeader from "@/components/tool/ToolHeader";
import ToolLayout from "@/components/tool/ToolLayout";
import ToolSection from "@/components/tool/ToolSection";

import UrlEditor from "./components/UrlEditor";
import UrlOutput from "./components/UrlOutput";
import UrlStatus from "./components/UrlStatus";
import { useUrlEncoder } from "./hooks/useUrlEncoder";

export default function UrlEncoderPage() {
  const {
    input,
    output,
    validation,
    updateInput,
    encode,
    decode,
    copy,
    clear,
  } = useUrlEncoder();

  return (
    <ToolLayout>
      <ToolHeader
        title="URL Encoder / Decoder"
        description="Encode and decode URLs instantly."
      />

      <ToolSection title="Input">
        <UrlEditor
          value={input}
          onChange={updateInput}
        />
      </ToolSection>

      <ToolSection title="Actions">
        <ToolActions
          actions={[
            {
              label: "Encode",
              onClick: encode,
              disabled: !input.trim(),
            },
            {
              label: "Decode",
              onClick: decode,
              disabled: !input.trim(),
            },
            {
              label: "Copy",
              onClick: copy,
              disabled: !output,
            },
            {
              label: "Clear",
              onClick: clear,
              variant: "destructive",
              disabled: !input.trim(),
            },
          ]}
        />
      </ToolSection>

      <ToolSection title="Output">
        <UrlOutput output={output} />
      </ToolSection>

      <ToolSection title="Status">
        <UrlStatus validation={validation} />
      </ToolSection>
    </ToolLayout>
  );
}