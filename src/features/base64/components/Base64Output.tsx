interface Base64OutputProps {
  output: string;
}

export default function Base64Output({
  output,
}: Base64OutputProps) {
  if (!output) {
    return (
      <div className="rounded-md border p-4 text-sm text-muted-foreground">
        Output will appear here.
      </div>
    );
  }

  return (
    <pre className="overflow-auto rounded-lg border bg-muted p-4 text-sm leading-6">
      <code>{output}</code>
    </pre>
  );
}