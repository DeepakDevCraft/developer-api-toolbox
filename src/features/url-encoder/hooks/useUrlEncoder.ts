import { useState } from "react";

import { decodeUrl } from "../utils/decodeUrl";
import { encodeUrl } from "../utils/encodeUrl";

export function useUrlEncoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const [validation, setValidation] = useState({
    isValid: false,
    error: "",
  });

  const encode = () => {
    try {
      setOutput(encodeUrl(input));

      setValidation({
        isValid: true,
        error: "",
      });
    } catch {
      setOutput("");

      setValidation({
        isValid: false,
        error: "Unable to encode input.",
      });
    }
  };

  const decode = () => {
    try {
      setOutput(decodeUrl(input));

      setValidation({
        isValid: true,
        error: "",
      });
    } catch {
      setOutput("");

      setValidation({
        isValid: false,
        error: "Invalid URL-encoded string.",
      });
    }
  };

  const copy = async () => {
    if (!output) {
      return false;
    }

    await navigator.clipboard.writeText(output);

    return true;
  };

  const clear = () => {
    setInput("");
    setOutput("");

    setValidation({
      isValid: false,
      error: "",
    });
  };

  return {
    input,
    output,
    updateInput: setInput,
    validation,
    encode,
    decode,
    copy,
    clear,
  };
}