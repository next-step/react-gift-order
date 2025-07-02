import { useRef } from "react";
import { LOGIN_LABELS } from "../constants/labels";
import { ErrorMessage, InputField } from "../LoginPage.styles";
import { useEmailValidation } from "../hooks/useEmailValidation";

function IDField() {
  const { email, emailErrors, handleEmailChange, validateEmail } =
    useEmailValidation();
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
        isError={emailErrors.isEmpty || emailErrors.invalidFormat}
      />
      {emailErrors.isEmpty ? (
        <ErrorMessage>ID를 입력해주세요.</ErrorMessage>
      ) : emailErrors.invalidFormat ? (
        <ErrorMessage>ID는 이메일 형식으로 입력해주세요.</ErrorMessage>
      ) : null}
    </>
  );
}

export default IDField;
