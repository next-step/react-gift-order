import { useInput } from "@/hooks/useInput";
import { validateQuantity } from "../../utils/validation";
import { VALIDATE_LABELS } from "../../constants/validateLabels";

export function useReceiverQuantityInput() {
  const quantityInput = useInput({
    initialValue: "1",
    validator: (value: string) => {
      if (!validateQuantity(value)) {
        return VALIDATE_LABELS.QUANTITY_INVALID;
      }
    },
  });

  return {
    quantity: quantityInput.value,
    handleQuantityChange: quantityInput.handleValueChange,
    validateQuantity: quantityInput.validate,
    quantityErrorMessage: quantityInput.errorMessage,
    hasQuantityError: quantityInput.hasError,
  };
}
