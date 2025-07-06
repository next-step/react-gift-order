import { useInput } from "@/hooks/useInput";
import { validateQuantity } from "../../utils/validation";
import { useMemo } from "react";

export function useReceiverQuantityInput() {
  const quantityInput = useInput("1", {
    invalidFormat: (value: string) => validateQuantity(value),
  });

  const quantityErrorMessage = useMemo(() => {
    if (quantityInput.errors.invalidFormat) {
      return "구매 수량은 1개 이상이어야 합니다.";
    }
    return null;
  }, [quantityInput.errors.invalidFormat]);

  return {
    quantity: quantityInput.value,
    handleQuantityChange: quantityInput.handleValueChange,
    validateQuantity: quantityInput.validate,
    quantityErrorMessage,
    hasQuantityError: quantityInput.hasError,
  };
}
