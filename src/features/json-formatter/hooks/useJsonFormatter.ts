"use client";

import { useState } from "react";

export function useJsonFormatter() {
  const [json, setJson] = useState("");

  const updateJson = (value: string) => {
    setJson(value);
  };

  return {
    json,
    updateJson,
  };
}