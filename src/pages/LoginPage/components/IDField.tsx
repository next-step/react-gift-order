import { useState } from "react";
import { LOGIN_LABELS } from "../constants/labels";
import { ErrorMessage, InputField } from "../LoginPage.styles";
import { isNotEmpty, validateEmailFormat } from "../utils/validation";

function IDField() {
  const [email, setEmail] = useState("");
  const [isEmailBlurred, setIsEmailBlurred] = useState(false);
  const [emailErrors, setEmailErrors] = useState({
    isEmpty: false,
    invalidFormat: false,
  });

  const validateEmailErrors = (email: string) => {
    const hasValue = isNotEmpty(email);
    const isFormatValid = validateEmailFormat(email);

    setEmailErrors({
      isEmpty: !hasValue,
      invalidFormat: hasValue && !isFormatValid,
    });
  };

  const handleEmailChange = (email: string) => {
    setEmail(email);

    if (isEmailBlurred) {
      validateEmailErrors(email);
    }
  };

  const handleEmailBlur = () => {
    setIsEmailBlurred(true);
    validateEmailErrors(email);
  };

  return (
    <>
      <InputField
        type="email"
        placeholder={LOGIN_LABELS.EMAIL_PLACEHOLDER}
        value={email}
        onChange={(e) => handleEmailChange(e.target.value)}
        onBlur={handleEmailBlur}
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
