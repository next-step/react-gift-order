import { useInput } from "@/hooks/useInput";
import { isNotEmpty } from "@/utils/validation";
import { VALIDATE_LABELS } from "../constants/validateLabels";

export function useSenderInput(initialValue = "") {
  const senderInput = useInput({
    initialValue,
    validator: (value: string) => {
      if (!isNotEmpty(value)) {
        return VALIDATE_LABELS.NAME_EMPTY;
      }
    },
  });

  return {
    senderName: senderInput.value,
    handleSenderNameChange: senderInput.handleValueChange,
    validateSenderName: senderInput.validate,
    senderNameErrorMessage: senderInput.errorMessage,
    hasSenderNameError: senderInput.hasError,
  };
}
