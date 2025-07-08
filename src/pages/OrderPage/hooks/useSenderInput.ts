import { useInput } from "@/hooks/useInput";
import { isNotEmpty } from "@/utils/validation";
import { VALIDATE_LABELS } from "../constants/validateLabels";
import { VALIDATION_CONSTANTS } from "@/constants/validation";

export function useSenderInput(initialValue = "") {
  const senderInput = useInput({
    initialValue,
    validator: (value: string) => {
      if (!isNotEmpty(value)) {
        return VALIDATE_LABELS.NAME_EMPTY;
      }
      return VALIDATION_CONSTANTS.NO_ERROR;
    },
  });

  return {
    senderName: senderInput.value,
    onSenderNameChange: senderInput.handleValueChange,
    onValidateSenderName: senderInput.validate,
    senderNameErrorMessage: senderInput.errorMessage,
  };
}
