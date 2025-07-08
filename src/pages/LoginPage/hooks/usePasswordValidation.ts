import { useInput } from "@/hooks/useInput";
import { isNotEmpty } from "@/utils/validation";
import { validatePasswordFormat } from "../utils/validation";
import { LOGIN_ERROR_MESSAGES } from "../constants/labels";
import { VALIDATION_CONSTANTS } from "@/constants/validation";

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
      return VALIDATION_CONSTANTS.NO_ERROR;
    },
  });

  return {
    password: passwordInput.value,
    handlePasswordValueChange: passwordInput.handleValueChange,
    validatePassword: passwordInput.validate,
    passwordErrorMessage: passwordInput.errorMessage,
  };
}

export default usePasswordValidation;
