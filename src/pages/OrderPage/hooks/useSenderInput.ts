import { useState } from "react";

export function useSenderInput() {
  const [senderName, setSenderName] = useState("");

  const handleSenderNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenderName(e.target.value);
  };

  return {
    senderName,
    handleSenderNameChange,
  };
}
