interface JwtOutputProps {
  data: object | null;
  emptyMessage: string;
}

export default function JwtOutput({
  data,
  emptyMessage,
}: JwtOutputProps) {
  if (!data) {
    return (
      <div className="rounded-md border p-4 text-sm text-muted-foreground">
        {emptyMessage}
      </div>
    );
  }

  return (
    <pre className="overflow-auto rounded-lg border bg-muted p-4 text-sm leading-6">
  <code>
    {JSON.stringify(data, null, 2)}
  </code>
</pre>
  );
}