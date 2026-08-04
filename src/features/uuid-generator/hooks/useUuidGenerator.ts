import { useState } from "react";

export function useUuidGenerator() {
  const [uuid, setUuid] = useState("");

  const generate = () => {
    setUuid(crypto.randomUUID());
  };

  const copy = async () => {
    if (!uuid) {
      return false;
    }

    await navigator.clipboard.writeText(uuid);

    return true;
  };

  const clear = () => {
    setUuid("");
  };

  return {
    uuid,
    generate,
    copy,
    clear,
  };
}