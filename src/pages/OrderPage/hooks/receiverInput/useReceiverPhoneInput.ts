import { useInput } from "@/hooks/useInput";
import { isNotEmpty } from "@/utils/validation";
import { validatePhoneNumber } from "../../utils/validation";
import { VALIDATE_LABELS } from "../../constants/validateLabels";

export function useReceiverPhoneInput() {
  const receiverPhoneInput = useInput({
    initialValue: "",
    validator: (value: string) => {
      if (!isNotEmpty(value)) {
        return VALIDATE_LABELS.PHONE_EMPTY;
      }
      if (!validatePhoneNumber(value)) {
        return VALIDATE_LABELS.PHONE_INVALID;
      }
    },
  });

  return {
    receiverPhone: receiverPhoneInput.value,
    handleReceiverPhoneChange: receiverPhoneInput.handleValueChange,
    validateReceiverPhone: receiverPhoneInput.validate,
    receiverPhoneErrorMessage: receiverPhoneInput.errorMessage,
    hasReceiverPhoneError: receiverPhoneInput.hasError,
  };
}
