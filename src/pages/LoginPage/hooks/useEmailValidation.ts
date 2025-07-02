import { useState } from "react";
import { isNotEmpty, validateEmailFormat } from "../utils/validation";

export function useEmailValidation(initialValue = "") {
  const [email, setEmail] = useState(initialValue);
  const [emailErrors, setEmailErrors] = useState({
    isEmpty: false,
    invalidFormat: false,
  });

  const validateEmail = (value: string) => {
    const hasValue = isNotEmpty(value);
    const isFormatValid = validateEmailFormat(value);

    const errors = {
      isEmpty: !hasValue,
      invalidFormat: hasValue && !isFormatValid,
    };

    setEmailErrors(errors);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  return {
    email,
    emailErrors,
    handleEmailChange,
    validateEmail,
  };
}
