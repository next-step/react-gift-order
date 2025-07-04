import { useState } from "react";
import { emailInputStyle, errorTextStyle } from "./style";

type EmailInputProps = {
  value: string;
  onChange: (value: string) => void;
  onValidityChange: (valid: boolean) => void;
};

export default function EmailInput({
  value,
  onChange,
  onValidityChange,
}: EmailInputProps) {
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
    const errorMessage = validateEmail(value);
    setError(errorMessage);
    onValidityChange(errorMessage === "");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    const errorMessage = validateEmail(newValue);
    setError(errorMessage);
    onValidityChange(errorMessage === "");
  };

  return (
    <>
      <input
        type="email"
        placeholder="이메일"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        css={emailInputStyle}
      />
      {error && <div css={errorTextStyle}>{error}</div>}
    </>
  );
}
