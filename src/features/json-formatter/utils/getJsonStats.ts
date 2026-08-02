export interface JsonStats {
  characters: number;
  lines: number;
  bytes: number;
}

export function getJsonStats(json: string): JsonStats {
  if (!json) {
    return {
      characters: 0,
      lines: 0,
      bytes: 0,
    };
  }

  return {
    characters: json.length,
    lines: json.split("\n").length,
    bytes: new TextEncoder().encode(json).length,
  };
}