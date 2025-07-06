import { useMemo } from "react";
import { useInput } from "@/hooks/useInput";
import { isNotEmpty } from "@/utils/validation";

export function useReceiverNameInput() {
  const receiverNameInput = useInput("", {
    isEmpty: (value: string) => isNotEmpty(value),
  });

  const receiverNameErrorMessage = useMemo(() => {
    if (receiverNameInput.errors.isEmpty) {
      return "이름을 입력해주세요.";
    }
    return null;
  }, [receiverNameInput.errors.isEmpty]);

  return {
    receiverName: receiverNameInput.value,
    handleReceiverNameChange: receiverNameInput.handleValueChange,
    validateReceiverName: receiverNameInput.validate,
    receiverNameErrorMessage,
    hasReceiverNameError: receiverNameInput.errors.isEmpty,
  };
}
