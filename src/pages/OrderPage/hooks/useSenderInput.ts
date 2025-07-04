import { useInput } from "@/hooks/useInput";
import { isNotEmpty } from "@/utils/validation";
import { useMemo } from "react";

export function useSenderInput(initialValue = "") {
  const senderInput = useInput(initialValue, {
    isEmpty: (value: string) => isNotEmpty(value),
  });

  const senderNameErrorMessage = useMemo(() => {
    if (senderInput.errors.isEmpty) {
      return "이름을 입력해주세요.";
    }
    return null;
  }, [senderInput.errors.isEmpty]);

  return {
    senderName: senderInput.value,
    handleSenderNameChange: senderInput.handleValueChange,
    validateSenderName: senderInput.validate,
    senderNameErrorMessage,
    hasSenderNameError: senderInput.hasError,
  };
}
