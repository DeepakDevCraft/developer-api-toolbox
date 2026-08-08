"use client";

import ToolActions from "@/components/tool/ToolActions";
import ToolHeader from "@/components/tool/ToolHeader";
import ToolLayout from "@/components/tool/ToolLayout";
import ToolSection from "@/components/tool/ToolSection";

import UuidOutput from "./components/UuidOutput";
import UuidStatus from "./components/UuidStatus";
import { useUuidGenerator } from "./hooks/useUuidGenerator";

export default function UuidGeneratorPage() {
  const {
    uuid,
    generate,
    copy,
    clear,
  } = useUuidGenerator();

  return (
    <ToolLayout>
      <ToolHeader
        title="UUID Generator"
        description="Generate secure UUID v4 identifiers."
      />

      <ToolSection title="Actions">
        <ToolActions
          actions={[
            {
              label: "Generate",
              onClick: generate,
            },
            {
              label: "Copy",
              onClick: () => {
  void copy();
},
              disabled: !uuid,
            },
            {
              label: "Clear",
              onClick: clear,
              variant: "destructive",
              disabled: !uuid,
            },
          ]}
        />
      </ToolSection>

      <ToolSection title="Generated UUID">
        <UuidOutput uuid={uuid} />
      </ToolSection>

      <ToolSection title="Status">
        <UuidStatus uuid={uuid} />
      </ToolSection>
    </ToolLayout>
  );
}