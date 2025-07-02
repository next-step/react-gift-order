import { useEffect, useState } from "react";

export const useLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const validateEmail = (email: string) => {
    if (!email) return "아이디를 입력해주세요.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email))
      return "아이디는 이메일 형식으로 입력해주세요.";
    return "";
  };

  const validatePassword = (password: string) => {
    if (!password) return "비밀번호를 입력해주세요.";
    if (password.length < 8) return "비밀번호는 최소 8글자 이상이어야 합니다.";
    return "";
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setEmailError(validateEmail(value));
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setPasswordError(validatePassword(value));
  };

  useEffect(() => {
    const isEmailValid = validateEmail(email) === "";
    const isPasswordValid = validatePassword(password) === "";

    setIsButtonEnabled(isEmailValid && isPasswordValid);
  }, [email, password]);

  return {
    email,
    password,
    emailError,
    passwordError,
    isButtonEnabled,
    handleEmailChange,
    handlePasswordChange,
  };
};
