export function decodeBase64(value: string): string {
  const binary = atob(value);

  const bytes = Uint8Array.from(binary, (char) =>
    char.charCodeAt(0)
  );

  return new TextDecoder().decode(bytes);
}