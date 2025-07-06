import { useInput } from "@/hooks/useInput";
import { isNotEmpty } from "@/utils/validation";
import { useMemo } from "react";
import { validatePhoneNumber } from "../../utils/validation";
import { VALIDATE_LABELS } from "../../constants/validateLabels";

export function useReceiverPhoneInput() {
  const receiverPhoneInput = useInput("", {
    isEmpty: (value: string) => isNotEmpty(value),
    invalidFormat: (value: string) => validatePhoneNumber(value),
  });

  const receiverPhoneErrorMessage = useMemo(() => {
    if (receiverPhoneInput.errors.isEmpty) {
      return VALIDATE_LABELS.PHONE_EMPTY;
    }
    if (receiverPhoneInput.errors.invalidFormat) {
      return VALIDATE_LABELS.PHONE_INVALID;
    }
    return null;
  }, [
    receiverPhoneInput.errors.isEmpty,
    receiverPhoneInput.errors.invalidFormat,
  ]);

  return {
    receiverPhone: receiverPhoneInput.value,
    handleReceiverPhoneChange: receiverPhoneInput.handleValueChange,
    validateReceiverPhone: receiverPhoneInput.validate,
    receiverPhoneErrorMessage,
    hasReceiverPhoneError: receiverPhoneInput.hasError,
  };
}
