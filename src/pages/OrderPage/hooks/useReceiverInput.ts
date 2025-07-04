import { useInput } from "@/hooks/useInput";
import { isNotEmpty } from "@/utils/validation";
import { useMemo } from "react";
import { validatePhoneNumber, validateQuantity } from "../utils/validation";

export function useReceiverInput() {
  const receiverNameInput = useInput("", {
    isEmpty: (value: string) => isNotEmpty(value),
  });
  const receiverPhoneInput = useInput("", {
    isEmpty: (value: string) => isNotEmpty(value),
    invalidFormat: (value: string) => validatePhoneNumber(value),
  });
  const quantityInput = useInput("1", {
    invalidFormat: (value: string) => validateQuantity(value),
  });

  const receiverNameErrorMessage = useMemo(() => {
    if (receiverNameInput.errors.isEmpty) {
      return "이름을 입력해주세요.";
    }
    return null;
  }, [receiverNameInput.errors.isEmpty]);

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

  const quantityErrorMessage = useMemo(() => {
    if (quantityInput.errors.invalidFormat) {
      return "구매 수량은 1개 이상이어야 합니다.";
    }
    return null;
  }, [quantityInput.errors.invalidFormat]);

  return {
    receiverName: receiverNameInput.value,
    handleReceiverNameChange: receiverNameInput.handleValueChange,
    validateReceiverName: receiverNameInput.validate,
    receiverNameErrorMessage,
    hasReceiverNameError: receiverNameInput.hasError,

    receiverPhone: receiverPhoneInput.value,
    handleReceiverPhoneChange: receiverPhoneInput.handleValueChange,
    validateReceiverPhone: receiverPhoneInput.validate,
    receiverPhoneErrorMessage,
    hasReceiverPhoneError: receiverPhoneInput.hasError,

    quantity: quantityInput.value,
    handleQuantityChange: quantityInput.handleValueChange,
    validateQuantity: quantityInput.validate,
    quantityErrorMessage,
    hasQuantityError: quantityInput.hasError,
  };
}
