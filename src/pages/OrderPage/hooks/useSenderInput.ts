import { useInput } from "@/hooks/useInput";
import { isNotEmpty } from "@/utils/validation";
import { useMemo } from "react";
import { VALIDATE_LABELS } from "../constants/validateLabels";

export function useSenderInput(initialValue = "") {
  const senderInput = useInput(initialValue, {
    isEmpty: (value: string) => isNotEmpty(value),
  });

  const senderNameErrorMessage = useMemo(() => {
    if (senderInput.errors.isEmpty) {
      return VALIDATE_LABELS.NAME_EMPTY;
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
