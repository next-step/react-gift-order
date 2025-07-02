import { useState } from "react";
import { isNotEmpty, validatePasswordFormat } from "../utils/validation";
import { LOGIN_ERROR_MESSAGES } from "../const/lables";

function usePasswordValidation() {
  const [password, setPassword] = useState("");
  const [passwordErrors, setPasswordErrors] = useState({
    isEmpty: false,
    invalidFormat: false,
  });

  const handleChange = (value: string) => {
    setPassword(value);
  };

  const validatePassword = (value: string) => {
    const hasValue = isNotEmpty(value);
    const isFormatValid = validatePasswordFormat(value);

    const errors = {
      isEmpty: !hasValue,
      invalidFormat: hasValue && !isFormatValid,
    };

    setPasswordErrors(errors);
  };

  const getFormErrorMessage = () => {
    if (passwordErrors.isEmpty) {
      return LOGIN_ERROR_MESSAGES.PASSWORD_EMPTY;
    }
    if (passwordErrors.invalidFormat) {
      return LOGIN_ERROR_MESSAGES.PASSWORD_FORMAT_INVALID;
    }
    return null;
  };

  const hasError = passwordErrors.isEmpty || passwordErrors.invalidFormat;

  return {
    password,
    handleChange,
    validatePassword,
    getFormErrorMessage,
    hasError,
  };
}

export default usePasswordValidation;
