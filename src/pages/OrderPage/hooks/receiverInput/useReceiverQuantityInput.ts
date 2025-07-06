import { useInput } from "@/hooks/useInput";
import { validateQuantity } from "../../utils/validation";
import { useMemo } from "react";
import { VALIDATE_LABELS } from "../../constants/validateLabels";

export function useReceiverQuantityInput() {
  const quantityInput = useInput("1", {
    invalidFormat: (value: string) => validateQuantity(value),
  });

  const quantityErrorMessage = useMemo(() => {
    if (quantityInput.errors.invalidFormat) {
      return VALIDATE_LABELS.QUANTITY_INVALID;
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
