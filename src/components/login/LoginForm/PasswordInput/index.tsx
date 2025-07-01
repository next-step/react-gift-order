import { useState } from "react";
import { passwordInputStyle, errorTextStyle } from "./style";

export default function PasswordInput({
  onValidityChange,
}: {
  onValidityChange: (valid: boolean) => void;
}) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validatePassword = (value: string) => {
    if (!value) return "PW를 입력해주세요.";
    if (value.length < 8) return "PW는 최소 8글자 이상이어야 합니다.";
    return "";
  };

  const handleBlur = () => {
    const message = validatePassword(password);
    setError(message);
    onValidityChange(!message);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    const isValid = validatePassword(value) === "";
    if (error) setError("");
    onValidityChange(isValid);
  };

  return (
    <>
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={handleChange}
        onBlur={handleBlur}
        css={passwordInputStyle}
      />
      {error && <div css={errorTextStyle}>{error}</div>}
    </>
  );
}
