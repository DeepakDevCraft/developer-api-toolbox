interface JwtStatusProps {
  validation: {
    isValid: boolean;
    error?: string;
  };
}

export default function JwtStatus({
  validation,
}: JwtStatusProps) {
  if (!validation.error) {
    return (
      <p className="text-muted-foreground">
        Paste a JWT token to begin.
      </p>
    );
  }

  return validation.isValid ? (
    <p className="font-medium text-green-600">
      ✅ Valid JWT
    </p>
  ) : (
    <div>
      <p className="font-medium text-red-600">
        ❌ Invalid JWT
      </p>

      <p className="mt-2 text-sm text-muted-foreground">
        {validation.error}
      </p>
    </div>
  );
}