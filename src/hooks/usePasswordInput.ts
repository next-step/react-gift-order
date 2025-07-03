import { useState } from "react";

export const usePasswordInput = () => {
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [touched, setTouched] = useState(false);

  const validatePassword = (value: string): string => {
    if (!value) {
      return "PW를 입력해주세요.";
    }
    if (value.length < 8) {
      return "PW는 최소 8글자 이상이어야 합니다.";
    }
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    if (touched) {
      setPasswordError(validatePassword(value));
    }
  };

  const handleBlur = () => {
    setTouched(true);
    setPasswordError(validatePassword(password));
  };

  return {
    password,
    passwordError,
    handleChange,
    handleBlur,
  };
};
