import { Button } from "@/components/ui/button";

interface JsonToolbarProps {
  onFormat: () => void;
  onMinify: () => void;
}

export default function JsonToolbar({
  onFormat,onMinify,
}: JsonToolbarProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <Button onClick={onFormat}>
        Format JSON
      </Button>

      <Button onClick={onMinify}>
  Minify JSON
</Button>
    </div>
  );
}