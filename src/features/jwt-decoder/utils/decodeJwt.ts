export interface DecodedJwt {
  header: Record<string, unknown>;
  payload: Record<string, unknown>;
}

function base64UrlDecode(value: string): string {
  const base64 = value
    .replace(/-/g, "+")
    .replace(/_/g, "/");

  const padded = base64.padEnd(
    base64.length + ((4 - (base64.length % 4)) % 4),
    "="
  );

  const binary = atob(padded);

  const bytes = Uint8Array.from(binary, (char) =>
    char.charCodeAt(0)
  );

  return new TextDecoder().decode(bytes);
}

export function decodeJwt(token: string): DecodedJwt {
  const parts = token.split(".");

  if (parts.length !== 3) {
    throw new Error("JWT must contain exactly 3 parts.");
  }

  const [header, payload] = parts;

  return {
    header: JSON.parse(base64UrlDecode(header)),
    payload: JSON.parse(base64UrlDecode(payload)),
  };
}