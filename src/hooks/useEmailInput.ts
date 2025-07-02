import { useState } from "react";

export const useEmailInput = () => {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const validateEmail = (value: string): string => {
    if (!value) return "ID를 입력해주세요.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return "ID는 이메일 형식으로 입력해주세요.";
    return "";
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(validateEmail(value));
  };

  const handleEmailBlur = () => {
    setEmailError(validateEmail(email));
  };

  return {
    email,
    emailError,
    handleEmailChange,
    handleEmailBlur,
  };
};
