"use client";

import ToolActions from "@/components/tool/ToolActions";
import ToolHeader from "@/components/tool/ToolHeader";
import ToolLayout from "@/components/tool/ToolLayout";
import ToolSection from "@/components/tool/ToolSection";

import Base64Editor from "./components/Base64Editor";
import Base64Output from "./components/Base64Output";
import Base64Status from "./components/Base64Status";
import { useBase64 } from "./hooks/useBase64";

export default function Base64Page() {
  const {
    input,
    output,
    updateInput,
    validation,
    encode,
    decode,
    copy,
    clear,
  } = useBase64();

  return (
    <ToolLayout>
      <ToolHeader
        title="Base64 Encoder / Decoder"
        description="Encode and decode Base64 strings instantly."
      />

      <ToolSection title="Input">
        <Base64Editor
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
        <Base64Output output={output} />
      </ToolSection>

      <ToolSection title="Status">
        <Base64Status validation={validation} />
      </ToolSection>
    </ToolLayout>
  );
}