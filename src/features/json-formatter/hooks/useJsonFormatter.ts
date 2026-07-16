"use client";

import { useState } from "react";

import { formatJson } from "../utils/formatJson";
import { validateJson } from "../utils/validateJson";
import { minifyJson } from "../utils/minifyJson";

export function useJsonFormatter() {
  const [json, setJson] = useState("");

  const validation = validateJson(json);

  const updateJson = (value: string) => {
    setJson(value);
  };

  const formatJsonInput = () => {
    const result = formatJson(json);

    if (result.success) {
      setJson(result.output);
    }

    return result;
  };

  const minify = () => {
  const result = minifyJson(json);

  if (result.success) {
    setJson(result.output);
  }

  return result;
};

  return {
    json,
    updateJson,
    validation,
    formatJsonInput,
    minify,
  };
}