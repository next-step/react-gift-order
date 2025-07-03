import { useState, useMemo } from "react";
import { isNotEmpty, validateEmailFormat } from "../utils/validation";
import { LOGIN_ERROR_MESSAGES } from "../constants/labels";

export function useEmailValidation(initialValue = "") {
  const [email, setEmail] = useState(initialValue);
  const [emailErrors, setEmailErrors] = useState({
    isEmpty: false,
    invalidFormat: false,
  });

  const handleEmailValueChange = (value: string) => {
    setEmail(value);
  };

  const validateEmail = (value: string) => {
    const trimmedValue = value.trim();
    const hasValue = isNotEmpty(trimmedValue);
    const isFormatValid = validateEmailFormat(trimmedValue);

    const errors = {
      isEmpty: !hasValue,
      invalidFormat: hasValue && !isFormatValid,
    };

    setEmailErrors(errors);
  };

  const emailErrorMessage = useMemo(() => {
    if (emailErrors.isEmpty) {
      return LOGIN_ERROR_MESSAGES.EMAIL_EMPTY;
    }
    if (emailErrors.invalidFormat) {
      return LOGIN_ERROR_MESSAGES.EMAIL_FORMAT_INVALID;
    }
    return null;
  }, [emailErrors.isEmpty, emailErrors.invalidFormat]);

  const hasEmailError = emailErrors.isEmpty || emailErrors.invalidFormat;

  return {
    email,
    handleEmailValueChange,
    validateEmail,
    emailErrorMessage,
    hasEmailError,
  };
}
