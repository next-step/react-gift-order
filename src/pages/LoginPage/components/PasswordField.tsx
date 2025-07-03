import { useRef } from "react";
import { LOGIN_LABELS } from "../constants/labels";
import { InputField } from "../LoginPage.styles";
import FormErrorMessage from "./FormErrorMessage";
import type { LoginFormProps } from "../LoginPage";

function PasswordField({
  value: password,
  handleChange,
  validator: validatePassword,
  errorMessage,
  hasError,
}: LoginFormProps) {
  const isPasswordBlurredRef = useRef(false);
  const shouldShowErrorStyle = hasError && isPasswordBlurredRef.current;
  const shouldShowErrorMessage = errorMessage && isPasswordBlurredRef.current;

  const handlePasswordChange = (value: string) => {
    handleChange(value);
    validatePassword(value);
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
        onBlur={(e) => handlePasswordBlur(e.target.value)}
        required
        isError={shouldShowErrorStyle}
      />
      {shouldShowErrorMessage && (
        <FormErrorMessage errorMessage={errorMessage} />
      )}
    </>
  );
}

export default PasswordField;
