import { Button } from "@/components/ui/button";

interface JsonToolbarProps {
  hasInput: boolean;
  onFormat: () => void;
  onMinify: () => void;
  onCopy: () => void;
  onClear: () => void;
}

export default function JsonToolbar({
  hasInput,
  onFormat,
  onMinify,
  onCopy,
  onClear
}: JsonToolbarProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <Button
  disabled={!hasInput}
  onClick={onFormat}
>
  Format
</Button>

<Button
  disabled={!hasInput}
  onClick={onMinify}
>
  Minify
</Button>

<Button
  disabled={!hasInput}
  onClick={onCopy}
>
  Copy
</Button>

<Button
  variant="destructive"
  disabled={!hasInput}
  onClick={onClear}
>
  Clear
</Button>
    </div>
  );
}