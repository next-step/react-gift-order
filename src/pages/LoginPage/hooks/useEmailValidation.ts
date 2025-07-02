import { useState } from "react";
import { isNotEmpty, validateEmailFormat } from "../utils/validation";

export function useEmailValidation(initialValue = "") {
  const [email, setEmail] = useState(initialValue);
  const [emailErrors, setEmailErrors] = useState({
    isEmpty: false,
    invalidFormat: false,
  });
  const handleEmailChange = (value: string) => {
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
      return "ID를 입력해주세요.";
    }
    if (emailErrors.invalidFormat) {
      return "ID는 이메일 형식으로 입력해주세요.";
    }
    return null;
  };

  const hasError = emailErrors.isEmpty || emailErrors.invalidFormat;

  return {
    email,
    emailErrors,
    handleEmailChange,
    validateEmail,
    getFormErrorMessage,
    hasError,
  };
}
