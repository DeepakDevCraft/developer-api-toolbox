import { useState } from "react";

import {
  convertTimestamp,
  type ConvertedTimestamp,
} from "../utils/convertTimestamp";

export function useTimestampConverter() {
  const [timestamp, setTimestamp] = useState("");

  const [result, setResult] =
    useState<ConvertedTimestamp | null>(null);

  const [validation, setValidation] = useState({
    isValid: false,
    error: "",
  });

  const convert = () => {
    try {
      const converted =
        convertTimestamp(timestamp);

      setResult(converted);

      setValidation({
        isValid: true,
        error: "",
      });
    } catch (error) {
      setResult(null);

      setValidation({
        isValid: false,
        error:
          error instanceof Error
            ? error.message
            : "Invalid timestamp.",
      });
    }
  };

  const current = () => {
    setTimestamp(
      Math.floor(Date.now() / 1000).toString()
    );
  };

  const clear = () => {
    setTimestamp("");
    setResult(null);

    setValidation({
      isValid: false,
      error: "",
    });
  };

  const copy = async () => {
    if (!result) {
      return false;
    }

    await navigator.clipboard.writeText(
      result.iso
    );

    return true;
  };

  return {
    timestamp,
    updateTimestamp: setTimestamp,
    result,
    validation,
    convert,
    current,
    copy,
    clear,
  };
}