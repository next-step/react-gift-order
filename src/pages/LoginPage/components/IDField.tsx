import { useRef } from "react";
import { LOGIN_LABELS } from "../constants/labels";
import { InputField } from "../LoginPage.styles";
import FormErrorMessage from "./FormErrorMessage";

function IDField({
  email,
  handleChange,
  validateEmail,
  getFormErrorMessage,
  hasError,
}: {
  email: string;
  handleChange: (value: string) => void;
  validateEmail: (value: string) => void;
  getFormErrorMessage: () => string | null;
  hasError: boolean;
}) {
  const isEmailBlurredRef = useRef(false);

  const handleEmailChange = (value: string) => {
    handleChange(value);

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
        onChange={(e) => handleEmailChange(e.target.value)}
        onBlur={(e) => handleBlur(e.target.value)}
        required
        isError={hasError}
      />
      <FormErrorMessage errorMessage={getFormErrorMessage()} />
    </>
  );
}

export default IDField;
