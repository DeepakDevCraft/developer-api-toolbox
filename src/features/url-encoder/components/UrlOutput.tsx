interface UrlOutputProps {
  output: string;
}

export default function UrlOutput({
  output,
}: UrlOutputProps) {
  if (!output) {
    return (
      <div className="rounded-md border p-4 text-sm text-muted-foreground">
        Encoded or decoded output will appear here.
      </div>
    );
  }

  return (
    <pre className="overflow-auto rounded-lg border bg-muted p-4 text-sm leading-6">
      <code>{output}</code>
    </pre>
  );
}