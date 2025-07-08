import { useInput } from "@/hooks/useInput";
import { isNotEmpty } from "@/utils/validation";
import { validatePhoneNumber } from "../../utils/validation";
import { VALIDATE_LABELS } from "../../constants/validateLabels";
import { VALIDATION_CONSTANTS } from "@/constants/validation";

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
      return VALIDATION_CONSTANTS.NO_ERROR;
    },
  });

  return {
    receiverPhone: receiverPhoneInput.value,
    onReceiverPhoneChange: receiverPhoneInput.handleValueChange,
    onValidateReceiverPhone: receiverPhoneInput.validate,
    receiverPhoneErrorMessage: receiverPhoneInput.errorMessage,
  };
}
