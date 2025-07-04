import { useMemo } from "react";
import { useInput } from "@/hooks/useInput";
import { isNotEmpty } from "@/utils/validation";
import { validatePasswordFormat } from "../utils/validation";
import { LOGIN_ERROR_MESSAGES } from "../constants/labels";

function usePasswordValidation() {
  const passwordInput = useInput("", {
    isEmpty: (value: string) => isNotEmpty(value),
    invalidFormat: (value: string) => validatePasswordFormat(value),
  });

  const passwordErrorMessage = useMemo(() => {
    if (passwordInput.errors.isEmpty) {
      return LOGIN_ERROR_MESSAGES.PASSWORD_EMPTY;
    }
    if (passwordInput.errors.invalidFormat) {
      return LOGIN_ERROR_MESSAGES.PASSWORD_FORMAT_INVALID;
    }
    return null;
  }, [passwordInput.errors.isEmpty, passwordInput.errors.invalidFormat]);

  return {
    password: passwordInput.value,
    handlePasswordValueChange: passwordInput.handleValueChange,
    validatePassword: passwordInput.validate,
    passwordErrorMessage,
    hasPasswordError: passwordInput.hasError,
  };
}

export default usePasswordValidation;
