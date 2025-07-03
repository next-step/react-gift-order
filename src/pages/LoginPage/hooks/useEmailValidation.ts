import { useMemo } from "react";
import { useInput } from "@/hooks/useInput";
import { isNotEmpty, validateEmailFormat } from "../utils/validation";
import { LOGIN_ERROR_MESSAGES } from "../constants/labels";

export function useEmailValidation(initialValue = "") {
  const emailInput = useInput(initialValue, {
    isEmpty: (value: string) => isNotEmpty(value),
    invalidFormat: (value: string) => validateEmailFormat(value),
  });

  const emailErrorMessage = useMemo(() => {
    if (emailInput.errors.isEmpty) {
      return LOGIN_ERROR_MESSAGES.EMAIL_EMPTY;
    }
    if (emailInput.errors.invalidFormat) {
      return LOGIN_ERROR_MESSAGES.EMAIL_FORMAT_INVALID;
    }
    return null;
  }, [emailInput.errors.isEmpty, emailInput.errors.invalidFormat]);

  return {
    email: emailInput.value,
    handleEmailValueChange: emailInput.handleValueChange,
    validateEmail: emailInput.validate,
    emailErrorMessage,
    hasEmailError: emailInput.hasError,
  };
}
