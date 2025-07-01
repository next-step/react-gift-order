import { useState } from "react";
import { emailInputStyle, errorTextStyle } from "./style";

export default function EmailInput({
  onValidityChange,
}: {
  onValidityChange: (valid: boolean) => void;
}) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (value: string) => {
    if (!value) {
      return "ID를 입력해주세요.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return "ID는 이메일 형식으로 입력해주세요.";
    }
    return "";
  };

  const handleBlur = () => {
    const errorMessage = validateEmail(email);
    setError(errorMessage);
    onValidityChange(errorMessage === "");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (error) {
      setError("");
    }
    const errorMessage = validateEmail(value);
    onValidityChange(errorMessage === "");
  };

  return (
    <>
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={handleChange}
        onBlur={handleBlur}
        css={emailInputStyle}
      />
      {error && <div css={errorTextStyle}>{error}</div>}
    </>
  );
}
