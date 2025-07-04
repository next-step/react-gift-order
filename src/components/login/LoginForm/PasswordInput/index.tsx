import { useState } from "react";
import { passwordInputStyle, errorTextStyle } from "./style";

type PasswordInputProps = {
  value: string;
  onChange: (value: string) => void;
  onValidityChange: (valid: boolean) => void;
};

export default function PasswordInput({
  value,
  onChange,
  onValidityChange,
}: PasswordInputProps) {
  const [error, setError] = useState("");

  const validatePassword = (value: string) => {
    if (!value) {
      return "PW를 입력해주세요.";
    }
    if (value.length < 8) {
      return "PW는 최소 8글자 이상이어야 합니다.";
    }
    return "";
  };

  const handleBlur = () => {
    const message = validatePassword(value);
    setError(message);
    onValidityChange(!message);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    const message = validatePassword(newValue);
    setError(message);
    onValidityChange(message === "");
  };

  return (
    <>
      <input
        type="password"
        placeholder="비밀번호"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        css={passwordInputStyle}
      />
      {error && <div css={errorTextStyle}>{error}</div>}
    </>
  );
}
