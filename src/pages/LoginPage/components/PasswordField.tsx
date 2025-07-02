import { useRef } from "react";
import { LOGIN_LABELS } from "../constants/labels";
import { InputField } from "../LoginPage.styles";
import FormErrorMessage from "./FormErrorMessage";
import type { LoginFormProps } from "../LoginPage";

function PasswordField({
  value: password,
  handleChange,
  validator: validatePassword,
  getFormErrorMessage,
  hasError,
}: LoginFormProps) {
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
