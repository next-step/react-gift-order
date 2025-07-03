import { useState, useMemo } from "react";
import { isNotEmpty, validatePasswordFormat } from "../utils/validation";
import { LOGIN_ERROR_MESSAGES } from "../constants/labels";

function usePasswordValidation() {
  const [password, setPassword] = useState("");
  const [passwordErrors, setPasswordErrors] = useState({
    isEmpty: false,
    invalidFormat: false,
  });

  const handlePasswordValueChange = (value: string) => {
    setPassword(value);
  };

  const validatePassword = (value: string) => {
    const trimmedValue = value.trim();
    const hasValue = isNotEmpty(trimmedValue);
    const isFormatValid = validatePasswordFormat(trimmedValue);

    const errors = {
      isEmpty: !hasValue,
      invalidFormat: hasValue && !isFormatValid,
    };

    setPasswordErrors(errors);
  };

  const passwordErrorMessage = useMemo(() => {
    if (passwordErrors.isEmpty) {
      return LOGIN_ERROR_MESSAGES.PASSWORD_EMPTY;
    }
    if (passwordErrors.invalidFormat) {
      return LOGIN_ERROR_MESSAGES.PASSWORD_FORMAT_INVALID;
    }
    return null;
  }, [passwordErrors.isEmpty, passwordErrors.invalidFormat]);

  const hasPasswordError =
    passwordErrors.isEmpty || passwordErrors.invalidFormat;

  return {
    password,
    handlePasswordValueChange,
    validatePassword,
    passwordErrorMessage,
    hasPasswordError,
  };
}

export default usePasswordValidation;
