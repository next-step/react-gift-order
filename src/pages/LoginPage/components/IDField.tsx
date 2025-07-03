import { useRef } from "react";
import { LOGIN_LABELS } from "../constants/labels";
import { InputField } from "../LoginPage.styles";
import FormErrorMessage from "./FormErrorMessage";
import type { LoginFormProps } from "../LoginPage";

function IDField({
  value: email,
  handleChange,
  validator: validateEmail,
  errorMessage,
  hasError,
}: LoginFormProps) {
  const isEmailBlurredRef = useRef(false);

  const handleEmailChange = (value: string) => {
    handleChange(value);
    validateEmail(value);
  };

  const handleBlur = (email: string) => {
    isEmailBlurredRef.current = true;
    validateEmail(email);
  };

  return (
    <>
      <InputField
        type="email"
        placeholder={LOGIN_LABELS.EMAIL_PLACEHOLDER}
        value={email}
        onChange={(e) => handleEmailChange(e.target.value)}
        onBlur={(e) => handleBlur(e.target.value)}
        required
        isError={hasError && isEmailBlurredRef.current}
      />
      {isEmailBlurredRef.current && (
        <FormErrorMessage errorMessage={errorMessage} />
      )}
    </>
  );
}

export default IDField;
