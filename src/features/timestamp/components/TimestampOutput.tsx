import type { ConvertedTimestamp } from "../utils/convertTimestamp";

interface TimestampOutputProps {
  result: ConvertedTimestamp | null;
}

export default function TimestampOutput({
  result,
}: TimestampOutputProps) {
  if (!result) {
    return (
      <div className="rounded-md border p-4 text-sm text-muted-foreground">
        Converted date will appear here.
      </div>
    );
  }

  return (
    <div className="space-y-4 rounded-lg border p-4">

      <div>
        <p className="text-xs text-muted-foreground">
          Local Time
        </p>

        <p className="font-mono break-all">
          {result.local}
        </p>
      </div>

      <div>
        <p className="text-xs text-muted-foreground">
          UTC
        </p>

        <p className="font-mono break-all">
          {result.utc}
        </p>
      </div>

      <div>
        <p className="text-xs text-muted-foreground">
          ISO
        </p>

        <p className="font-mono break-all">
          {result.iso}
        </p>
      </div>
    </div>
  );
}