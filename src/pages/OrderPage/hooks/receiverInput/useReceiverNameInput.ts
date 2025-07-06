import { useMemo } from "react";
import { useInput } from "@/hooks/useInput";
import { isNotEmpty } from "@/utils/validation";
import { VALIDATE_LABELS } from "../../constants/validateLabels";

export function useReceiverNameInput() {
  const receiverNameInput = useInput("", {
    isEmpty: (value: string) => isNotEmpty(value),
  });

  const receiverNameErrorMessage = useMemo(() => {
    if (receiverNameInput.errors.isEmpty) {
      return VALIDATE_LABELS.NAME_EMPTY;
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
