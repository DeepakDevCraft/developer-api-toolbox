import type { JsonOperationResult } from "../types";

export function minifyJson(json: string): JsonOperationResult {
  if (!json.trim()) {
    return {
      success: false,
      output: "",
      error: "JSON input cannot be empty.",
    };
  }

  try {
    const parsed = JSON.parse(json);

    return {
      success: true,
      output: JSON.stringify(parsed),
    };
  } catch (error) {
    return {
      success: false,
      output: "",
      error:
        error instanceof Error
          ? error.message
          : "Unable to minify JSON.",
    };
  }
}