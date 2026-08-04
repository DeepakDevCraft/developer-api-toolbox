import { useState } from "react";

import { decodeJwt } from "../utils/decodeJwt";

export function useJwtDecoder() {
  const [token, setToken] = useState("");

  const [header, setHeader] = useState<Record<string, unknown> | null>(null);
  const [payload, setPayload] = useState<Record<string, unknown> | null>(null);

  const [validation, setValidation] = useState({
    isValid: false,
    error: "",
  });

  const decode = () => {
    if (!token.trim()) {
      setValidation({
        isValid: false,
        error: "JWT token cannot be empty.",
      });

      return;
    }

    try {
      const decoded = decodeJwt(token);

      setHeader(decoded.header);
      setPayload(decoded.payload);

      setValidation({
        isValid: true,
        error: "",
      });
    } catch (error) {
      setHeader(null);
      setPayload(null);

      setValidation({
        isValid: false,
        error:
          error instanceof Error
            ? error.message
            : "Invalid JWT.",
      });
    }
  };

  const clear = () => {
    setToken("");
    setHeader(null);
    setPayload(null);

    setValidation({
      isValid: false,
      error: "",
    });
  };

  const copyPayload = async () => {
    if (!payload) {
      return;
    }

    await navigator.clipboard.writeText(
      JSON.stringify(payload, null, 2)
    );
  };

  const copyHeader = async () => {
  if (!header) {
    return false;
  }

  await navigator.clipboard.writeText(
    JSON.stringify(header, null, 2)
  );

  return true;
};

  return {
    token,
    updateToken: setToken,
    header,
    payload,
    validation,
    decode,
    clear,
    copyPayload,
    copyHeader,
  };
}