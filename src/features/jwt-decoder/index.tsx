"use client";

import ToolActions from "@/components/tool/ToolActions";
import ToolHeader from "@/components/tool/ToolHeader";
import ToolLayout from "@/components/tool/ToolLayout";
import ToolSection from "@/components/tool/ToolSection";

import JwtEditor from "./components/JwtEditor";
import JwtOutput from "./components/JwtOutput";
import JwtStatus from "./components/JwtStatus";
import { useJwtDecoder } from "./hooks/useJwtDecoder";



export default function JwtDecoderPage() {
  const {
    token,
    updateToken,
    header,
    payload,
    validation,
    decode,
    clear,
    copyPayload,
    copyHeader,
  } = useJwtDecoder();

  return (
    <ToolLayout>
      <ToolHeader
        title="JWT Decoder"
        description="Decode and inspect JWT tokens instantly."
      />

      <ToolSection title="Input">
        <JwtEditor value={token} onChange={updateToken} />
      </ToolSection>

      <ToolSection title="Actions">
        <ToolActions
  actions={[
    {
      label: "Decode",
      onClick: decode,
      disabled: !token.trim(),
    },
    {
      label: "Copy Header",
      onClick: copyHeader,
      disabled: !header,
    },
    {
      label: "Copy Payload",
      onClick: copyPayload,
      disabled: !payload,
    },
    {
      label: "Clear",
      onClick: clear,
      variant: "destructive",
      disabled: !token.trim(),
    },
  ]}
/>
      </ToolSection>

      <ToolSection title="Header">
        <JwtOutput
          data={header}
          emptyMessage="Decoded header will appear here."
        />
      </ToolSection>

      <ToolSection title="Payload">
        <JwtOutput
          data={payload}
          emptyMessage="Decoded payload will appear here."
        />
      </ToolSection>

      <ToolSection title="Status">
        <JwtStatus validation={validation} />
      </ToolSection>
    </ToolLayout>
  );
}