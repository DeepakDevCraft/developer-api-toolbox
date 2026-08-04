import { useState } from "react";

import { decodeBase64 } from "../utils/decodeBase64";
import { encodeBase64 } from "../utils/encodeBase64";

export function useBase64() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const [validation, setValidation] = useState({
    isValid: false,
    error: "",
  });

  const encode = () => {
    try {
      setOutput(encodeBase64(input));

      setValidation({
        isValid: true,
        error: "",
      });
    } catch {
      setOutput("");

      setValidation({
        isValid: false,
        error: "Unable to encode text.",
      });
    }
  };

  const decode = () => {
    try {
      setOutput(decodeBase64(input));

      setValidation({
        isValid: true,
        error: "",
      });
    } catch {
      setOutput("");

      setValidation({
        isValid: false,
        error: "Invalid Base64 string.",
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