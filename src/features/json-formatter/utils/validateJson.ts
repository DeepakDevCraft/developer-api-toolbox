import type { JsonValidationResult } from "../types";

export function validateJson(json: string): JsonValidationResult {
  if (!json.trim()) {
    return {
      isValid: false,
      error: "JSON input cannot be empty.",
    };
  }

  try {
    JSON.parse(json);

    return {
      isValid: true,
    };
  } catch (error) {
    return {
      isValid: false,
      error: error instanceof Error ? error.message : "Invalid JSON.",
    };
  }
}