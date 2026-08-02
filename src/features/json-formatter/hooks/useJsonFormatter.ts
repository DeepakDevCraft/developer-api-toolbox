"use client";

import { useState } from "react";

import { formatJson } from "../utils/formatJson";
import { validateJson } from "../utils/validateJson";
import { minifyJson } from "../utils/minifyJson";
import { copyJson } from "../utils/copyJson"
import { getJsonStats } from "../utils/getJsonStats";

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

const copy = async () => {
  return await copyJson(json);
};

const clearJson = () => {
  setJson("");
};

const stats = getJsonStats(json);

  return {
    json,
    updateJson,
    validation,
    formatJsonInput,
    minify,
    copy,
    clearJson,
    stats
  };
}