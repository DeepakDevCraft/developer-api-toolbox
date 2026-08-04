export interface ConvertedTimestamp {
  local: string;
  utc: string;
  iso: string;
}

export function convertTimestamp(
  value: string
): ConvertedTimestamp {
  const trimmed = value.trim();

  if (!trimmed) {
    throw new Error("Timestamp cannot be empty.");
  }

  if (!/^\d+$/.test(trimmed)) {
    throw new Error("Timestamp must contain only numbers.");
  }

  const timestamp = Number(trimmed);

  const date =
    trimmed.length === 10
      ? new Date(timestamp * 1000)
      : new Date(timestamp);

  if (Number.isNaN(date.getTime())) {
    throw new Error("Invalid timestamp.");
  }

  return {
    local: date.toString(),
    utc: date.toUTCString(),
    iso: date.toISOString(),
  };
}