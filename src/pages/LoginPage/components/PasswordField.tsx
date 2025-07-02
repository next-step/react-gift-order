import { useRef, useState } from "react";
import { LOGIN_LABELS } from "../constants/labels";
import { InputField } from "../LoginPage.styles";
import { isNotEmpty, validatePasswordFormat } from "../utils/validation";
import FormErrorMessage from "./FormErrorMessage";
import { LOGIN_ERROR_MESSAGES } from "../const/lables";

function PasswordField() {
  const isPasswordBlurredRef = useRef(false);

  const [password, setPassword] = useState("");
  const [passwordErrors, setPasswordErrors] = useState({
    isEmpty: false,
    invalidFormat: false,
  });

  const handlePasswordChange = (value: string) => {
    setPassword(value);

    if (isPasswordBlurredRef.current) {
      validatePassword(value);
    }
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

  const handlePasswordBlur = (value: string) => {
    isPasswordBlurredRef.current = true;
    validatePassword(value);
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

  return (
    <>
      <InputField
        type="password"
        placeholder={LOGIN_LABELS.PASSWORD_PLACEHOLDER}
        value={password}
        onChange={(e) => handlePasswordChange(e.target.value)}
        required
        isError={passwordErrors.isEmpty || passwordErrors.invalidFormat}
        onBlur={(e) => handlePasswordBlur(e.target.value)}
      />
      <FormErrorMessage errorMessage={getFormErrorMessage()} />
    </>
  );
}

export default PasswordField;
