interface TimestampStatusProps {
  validation: {
    isValid: boolean;
    error: string;
  };
}

export default function TimestampStatus({
  validation,
}: TimestampStatusProps) {
  if (!validation.error && !validation.isValid) {
    return (
      <p className="text-sm text-muted-foreground">
        Enter a Unix timestamp to convert.
      </p>
    );
  }

  if (validation.isValid) {
    return (
      <p className="font-medium text-green-600">
        ✅ Timestamp converted successfully.
      </p>
    );
  }

  return (
    <>
      <p className="font-medium text-red-600">
        ❌ Invalid timestamp.
      </p>

      <p className="mt-1 text-sm text-muted-foreground">
        {validation.error}
      </p>
    </>
  );
}