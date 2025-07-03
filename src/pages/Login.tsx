import React from "react";
import styled from "@emotion/styled";
import { useLoginForm } from "../hooks/useLoginForm";
import { useNavigate } from "react-router-dom";
import { Layout } from "../Components/layout/Layout";

const LoginWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 0;
  padding: 48px 0 32px 0;
  box-sizing: border-box;
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
  &:disabled {
    background: #f0f0f0;
    color: #b0b3ba;
    cursor: not-allowed;
  }
`;

const Login: React.FC = () => {
  const navigate = useNavigate();
  // 커스텀 훅에서 모든 상태와 핸들러를 받아옴
  const {
    email,
    password,
    emailError,
    passwordError,
    isFormValid,
    handleEmailChange,
    handleEmailBlur,
    handlePasswordChange,
    handlePasswordBlur,
    handleSubmit,
  } = useLoginForm({
    onSuccess: () => navigate("/my")
  });

  return (
    <Layout>
      <LoginWrapper>
        <Logo>kakao</Logo>
        <Form onSubmit={handleSubmit}>
          {/* 이메일 입력 필드 */}
          <Input
            type="email"
            placeholder="이메일"
            autoComplete="username"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
          />
          <ErrorMessage>{emailError}</ErrorMessage>
          {/* 비밀번호 입력 필드 */}
          <Input
            type="password"
            placeholder="비밀번호"
            autoComplete="current-password"
            value={password}
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
          />
          <ErrorMessage>{passwordError}</ErrorMessage>
          <LoginButton type="submit" disabled={!isFormValid}>
            로그인
          </LoginButton>
        </Form>
      </LoginWrapper>
    </Layout>
  );
};

export default Login;