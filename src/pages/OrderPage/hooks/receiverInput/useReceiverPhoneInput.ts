import { useInput } from "@/hooks/useInput";
import { isNotEmpty } from "@/utils/validation";
import { useMemo } from "react";
import { validatePhoneNumber } from "../../utils/validation";

export function useReceiverPhoneInput() {
  const receiverPhoneInput = useInput("", {
    isEmpty: (value: string) => isNotEmpty(value),
    invalidFormat: (value: string) => validatePhoneNumber(value),
  });

  const receiverPhoneErrorMessage = useMemo(() => {
    if (receiverPhoneInput.errors.isEmpty) {
      return "전화번호를 입력해주세요.";
    }
    if (receiverPhoneInput.errors.invalidFormat) {
      return "올바른 전화번호 형식이 아닙니다.";
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
