import { useState } from "react";
import { isNotEmpty, validateEmailFormat } from "../utils/validation";
import { LOGIN_ERROR_MESSAGES } from "../const/lables";

export function useEmailValidation(initialValue = "") {
  const [email, setEmail] = useState(initialValue);
  const [emailErrors, setEmailErrors] = useState({
    isEmpty: false,
    invalidFormat: false,
  });
  const handleChange = (value: string) => {
    setEmail(value);
  };

  const validateEmail = (value: string) => {
    const hasValue = isNotEmpty(value);
    const isFormatValid = validateEmailFormat(value);

    const errors = {
      isEmpty: !hasValue,
      invalidFormat: hasValue && !isFormatValid,
    };

    setEmailErrors(errors);
  };

  const getFormErrorMessage = () => {
    if (emailErrors.isEmpty) {
      return LOGIN_ERROR_MESSAGES.EMAIL_EMPTY;
    }
    if (emailErrors.invalidFormat) {
      return LOGIN_ERROR_MESSAGES.EMAIL_FORMAT_INVALID;
    }
    return null;
  };

  const hasError = emailErrors.isEmpty || emailErrors.invalidFormat;

  return {
    email,
    handleChange,
    validateEmail,
    getFormErrorMessage,
    hasError,
  };
}
