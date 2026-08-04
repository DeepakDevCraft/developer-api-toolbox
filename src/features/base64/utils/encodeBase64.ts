export function encodeBase64(text: string): string {
  const bytes = new TextEncoder().encode(text);

  let binary = "";

  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });

  return btoa(binary);
}