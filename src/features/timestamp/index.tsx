"use client";

import ToolActions from "@/components/tool/ToolActions";
import ToolHeader from "@/components/tool/ToolHeader";
import ToolLayout from "@/components/tool/ToolLayout";
import ToolSection from "@/components/tool/ToolSection";

import TimestampInput from "./components/TimestampInput";
import TimestampOutput from "./components/TimestampOutput";
import TimestampStatus from "./components/TimestampStatus";
import { useTimestampConverter } from "./hooks/useTimestampConverter";

export default function TimestampConverterPage() {
  const {
    timestamp,
    updateTimestamp,
    result,
    validation,
    convert,
    current,
    copy,
    clear,
  } = useTimestampConverter();

  return (
    <ToolLayout>
      <ToolHeader
        title="Unix Timestamp Converter"
        description="Convert Unix timestamps into local, UTC and ISO dates."
      />

      <ToolSection title="Input">
        <TimestampInput
          value={timestamp}
          onChange={updateTimestamp}
        />
      </ToolSection>

      <ToolSection title="Actions">
        <ToolActions
          actions={[
            {
              label: "Convert",
              onClick: convert,
              disabled: !timestamp.trim(),
            },
            {
              label: "Current Time",
              onClick: current,
            },
            {
              label: "Copy ISO",
              onClick: copy,
              disabled: !result,
            },
            {
              label: "Clear",
              onClick: clear,
              variant: "destructive",
              disabled: !timestamp.trim(),
            },
          ]}
        />
      </ToolSection>

      <ToolSection title="Output">
        <TimestampOutput result={result} />
      </ToolSection>

      <ToolSection title="Status">
        <TimestampStatus validation={validation} />
      </ToolSection>
    </ToolLayout>
  );
}