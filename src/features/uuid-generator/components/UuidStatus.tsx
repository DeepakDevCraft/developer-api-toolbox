interface UuidStatusProps {
  uuid: string;
}

export default function UuidStatus({
  uuid,
}: UuidStatusProps) {
  if (!uuid) {
    return (
      <p className="text-sm text-muted-foreground">
        Generate a UUID to begin.
      </p>
    );
  }

  return (
    <p className="font-medium text-green-600">
      ✅ UUID generated successfully.
    </p>
  );
}