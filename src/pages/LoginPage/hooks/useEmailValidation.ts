import { useInput } from "@/hooks/useInput";
import { isNotEmpty } from "@/utils/validation";
import { validateEmailFormat } from "../utils/validation";
import { LOGIN_ERROR_MESSAGES } from "../constants/labels";

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
    },
  });

  return {
    email: emailInput.value,
    handleEmailValueChange: emailInput.handleValueChange,
    validateEmail: emailInput.validate,
    emailErrorMessage: emailInput.errorMessage,
    hasEmailError: emailInput.hasError,
  };
}
