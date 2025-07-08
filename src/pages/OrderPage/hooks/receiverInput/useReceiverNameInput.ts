import { useInput } from "@/hooks/useInput";
import { isNotEmpty } from "@/utils/validation";
import { VALIDATE_LABELS } from "../../constants/validateLabels";

export function useReceiverNameInput() {
  const receiverNameInput = useInput({
    initialValue: "",
    validator: (value: string) => {
      if (!isNotEmpty(value)) {
        return VALIDATE_LABELS.NAME_EMPTY;
      }
    },
  });

  return {
    receiverName: receiverNameInput.value,
    handleReceiverNameChange: receiverNameInput.handleValueChange,
    validateReceiverName: receiverNameInput.validate,
    receiverNameErrorMessage: receiverNameInput.errorMessage,
    hasReceiverNameError: receiverNameInput.hasError,
  };
}
