import React from "react";
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
  return (
    <LoginWrapper>
      <Logo>kakao</Logo>
      <Form>
        <Input type="email" placeholder="이메일" autoComplete="username" />
        <Input type="password" placeholder="비밀번호" autoComplete="current-password" />
        <LoginButton type="submit">로그인</LoginButton>
      </Form>
    </LoginWrapper>
  );
};

export default Login;