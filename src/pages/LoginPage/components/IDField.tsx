import { useRef } from "react";
import { LOGIN_LABELS } from "../constants/labels";
import { InputField } from "../LoginPage.styles";
import FormErrorMessage from "./FormErrorMessage";
import { useEmailValidation } from "../hooks/useEmailValidation";

function IDField() {
  const {
    email,
    handleEmailChange,
    validateEmail,
    getFormErrorMessage,
    hasError,
  } = useEmailValidation();
  const isEmailBlurredRef = useRef(false);

  const handleChange = (value: string) => {
    handleEmailChange(value);

    if (isEmailBlurredRef.current) {
      validateEmail(value);
    }
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
        onChange={(e) => handleChange(e.target.value)}
        onBlur={(e) => handleBlur(e.target.value)}
        required
        isError={hasError}
      />
      <FormErrorMessage errorMessage={getFormErrorMessage()} />
    </>
  );
}

export default IDField;
