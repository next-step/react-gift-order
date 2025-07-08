import { useInput } from "@/hooks/useInput";
import { validateQuantity } from "../../utils/validation";
import { VALIDATE_LABELS } from "../../constants/validateLabels";
import { VALIDATION_CONSTANTS } from "@/constants/validation";

export function useReceiverQuantityInput() {
  const quantityInput = useInput({
    initialValue: "1",
    validator: (value: string) => {
      if (!validateQuantity(value)) {
        return VALIDATE_LABELS.QUANTITY_INVALID;
      }
      return VALIDATION_CONSTANTS.NO_ERROR;
    },
  });

  return {
    quantity: quantityInput.value,
    onQuantityChange: quantityInput.handleValueChange,
    onValidateQuantity: quantityInput.validate,
    quantityErrorMessage: quantityInput.errorMessage,
  };
}
