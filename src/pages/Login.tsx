import React, { useState } from "react";
import styled from "@emotion/styled";

const LoginWrapper = styled.div`
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.h1`
  font-size: 64px;
  font-weight: 500;
  margin-bottom: 80px;
  letter-spacing: 1px;
`;

const Form = styled.form`
  width: 90vw;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Input = styled.input`
  width: 100%;
  font-size: 2.2rem;
  padding: 24px 0 8px 0;
  border: none;
  border-bottom: 2px solid #e0e0e0;
  outline: none;
  color: #222;
  background: transparent;
  &::placeholder {
    color: #b0b3ba;
    font-size: 2.2rem;
  }
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 1.6rem;
  margin-top: -24px;
  margin-bottom: 8px;
  min-height: 24px;
`;

const LoginButton = styled.button`
  width: 100%;
  background: #f7e244;
  color: #222;
  font-size: 2.2rem;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  padding: 28px 0;
  margin-top: 40px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #ffe14a;
  }
`;

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (value: string) => {
    if (!value) return "ID를 입력해주세요.";
    const emailRegex = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(value)) return "ID는 이메일 형식으로 입력해주세요.";
    return "";
  };

  const validatePassword = (value: string) => {
    if (!value) return "PW를 입력해주세요.";
    if (value.length < 8) return "PW는 최소 8글자 이상이어야 합니다.";
    return "";
  };

  const handleEmailBlur = () => {
    const error = validateEmail(email);
    setEmailError(error);
  };

  const handlePasswordBlur = () => {
    const error = validatePassword(password);
    setPasswordError(error);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) {
      const error = validateEmail(e.target.value);
      setEmailError(error);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (passwordError) {
      const error = validatePassword(e.target.value);
      setPasswordError(error);
    }
  };

  return (
    <LoginWrapper>
      <Logo>kakao</Logo>
      <Form>
        <Input
          type="email"
          placeholder="이메일"
          autoComplete="username"
          value={email}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
        />
        <ErrorMessage>{emailError}</ErrorMessage>
        <Input
          type="password"
          placeholder="비밀번호"
          autoComplete="current-password"
          value={password}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
        />
        <ErrorMessage>{passwordError}</ErrorMessage>
        <LoginButton type="submit">로그인</LoginButton>
      </Form>
    </LoginWrapper>
  );
};

export default Login;