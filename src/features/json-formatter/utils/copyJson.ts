export async function copyJson(json: string): Promise<boolean> {
  if (!json.trim()) {
    return false;
  }

  try {
    await navigator.clipboard.writeText(json);
    return true;
  } catch {
    return false;
  }
}