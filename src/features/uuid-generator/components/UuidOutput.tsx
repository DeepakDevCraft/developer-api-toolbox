interface UuidOutputProps {
  uuid: string;
}

export default function UuidOutput({
  uuid,
}: UuidOutputProps) {
  if (!uuid) {
    return (
      <div className="rounded-md border p-4 text-sm text-muted-foreground">
        Click Generate to create a UUID.
      </div>
    );
  }

  return (
    <pre className="overflow-auto rounded-lg border bg-muted p-4 font-mono text-sm">
      {uuid}
    </pre>
  );
}