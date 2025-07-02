import { useRef } from "react";
import { LOGIN_LABELS } from "../constants/labels";
import { InputField } from "../LoginPage.styles";
import FormErrorMessage from "./FormErrorMessage";

function PasswordField({
  password,
  handleChange,
  validatePassword,
  getFormErrorMessage,
  hasError,
}: {
  password: string;
  handleChange: (value: string) => void;
  validatePassword: (value: string) => void;
  getFormErrorMessage: () => string | null;
  hasError: boolean;
}) {
  const isPasswordBlurredRef = useRef(false);

  const handlePasswordChange = (value: string) => {
    handleChange(value);

    if (isPasswordBlurredRef.current) {
      validatePassword(value);
    }
  };

  const handlePasswordBlur = (value: string) => {
    isPasswordBlurredRef.current = true;
    validatePassword(value);
  };

  return (
    <>
      <InputField
        type="password"
        placeholder={LOGIN_LABELS.PASSWORD_PLACEHOLDER}
        value={password}
        onChange={(e) => handlePasswordChange(e.target.value)}
        required
        isError={hasError}
        onBlur={(e) => handlePasswordBlur(e.target.value)}
      />
      <FormErrorMessage errorMessage={getFormErrorMessage()} />
    </>
  );
}

export default PasswordField;
