import { useInput } from "@/hooks/useInput";
import { isNotEmpty } from "@/utils/validation";
import { validatePasswordFormat } from "../utils/validation";
import { LOGIN_ERROR_MESSAGES } from "../constants/labels";

function usePasswordValidation() {
  const passwordInput = useInput({
    initialValue: "",
    validator: (value: string) => {
      if (!isNotEmpty(value)) {
        return LOGIN_ERROR_MESSAGES.PASSWORD_EMPTY;
      }
      if (!validatePasswordFormat(value)) {
        return LOGIN_ERROR_MESSAGES.PASSWORD_FORMAT_INVALID;
      }
    },
  });

  return {
    password: passwordInput.value,
    handlePasswordValueChange: passwordInput.handleValueChange,
    validatePassword: passwordInput.validate,
    passwordErrorMessage: passwordInput.errorMessage,
    hasPasswordError: passwordInput.hasError,
  };
}

export default usePasswordValidation;
