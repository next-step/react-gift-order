import { useState } from "react";

// 로그인 폼 로직을 재사용할 수 있도록 커스텀 훅으로 분리
export function useLoginForm() {
  // 이메일, 비밀번호, 에러 메시지 상태
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // 이메일 유효성 검사
  const validateEmail = (value: string) => {
    if (!value) return "ID를 입력해주세요.";
    const emailRegex = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(value)) return "ID는 이메일 형식으로 입력해주세요.";
    return "";
  };

  // 비밀번호 유효성 검사
  const validatePassword = (value: string) => {
    if (!value) return "PW를 입력해주세요.";
    if (value.length < 8) return "PW는 최소 8글자 이상이어야 합니다.";
    return "";
  };

  // 이메일 input onBlur
  const handleEmailBlur = () => {
    const error = validateEmail(email);
    setEmailError(error);
  };

  // 비밀번호 input onBlur
  const handlePasswordBlur = () => {
    const error = validatePassword(password);
    setPasswordError(error);
  };

  // 이메일 input onChange
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) {
      const error = validateEmail(e.target.value);
      setEmailError(error);
    }
  };

  // 비밀번호 input onChange
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (passwordError) {
      const error = validatePassword(e.target.value);
      setPasswordError(error);
    }
  };

  // 폼 전체 유효성
  const isFormValid = validateEmail(email) === "" && validatePassword(password) === "";

  // 필요한 값과 핸들러를 반환
  return {
    email,
    password,
    emailError,
    passwordError,
    isFormValid,
    handleEmailChange,
    handleEmailBlur,
    handlePasswordChange,
    handlePasswordBlur,
  };
} 