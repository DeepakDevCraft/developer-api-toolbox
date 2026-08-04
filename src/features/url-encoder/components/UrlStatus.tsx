interface UrlStatusProps {
  validation: {
    isValid: boolean;
    error: string;
  };
}

export default function UrlStatus({
  validation,
}: UrlStatusProps) {
  if (!validation.error && !validation.isValid) {
    return (
      <p className="text-sm text-muted-foreground">
        Enter text to encode or a URL-encoded string to decode.
      </p>
    );
  }

  if (validation.isValid) {
    return (
      <p className="font-medium text-green-600">
        ✅ Operation completed successfully.
      </p>
    );
  }

  return (
    <div>
      <p className="font-medium text-red-600">
        ❌ Operation failed.
      </p>

      <p className="mt-2 text-sm text-muted-foreground">
        {validation.error}
      </p>
    </div>
  );
}