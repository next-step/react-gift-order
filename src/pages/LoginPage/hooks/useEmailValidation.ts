import { useInput } from "@/hooks/useInput";
import { isNotEmpty } from "@/utils/validation";
import { validateEmailFormat } from "../utils/validation";
import { LOGIN_ERROR_MESSAGES } from "../constants/labels";
import { VALIDATION_CONSTANTS } from "@/constants/validation";

export function useEmailValidation(initialValue = "") {
  const emailInput = useInput({
    initialValue,
    validator: (value: string) => {
      if (!isNotEmpty(value)) {
        return LOGIN_ERROR_MESSAGES.EMAIL_EMPTY;
      }
      if (!validateEmailFormat(value)) {
        return LOGIN_ERROR_MESSAGES.EMAIL_FORMAT_INVALID;
      }
      return VALIDATION_CONSTANTS.NO_ERROR;
    },
  });

  return {
    email: emailInput.value,
    handleEmailValueChange: emailInput.handleValueChange,
    validateEmail: emailInput.validate,
    emailErrorMessage: emailInput.errorMessage,
  };
}
