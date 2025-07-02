import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate, useLocation } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Layout } from '@/components/Layout';
import { LoginForm } from './LoginForm';
const LoginWrapper = styled.main`
  

  width: 100%;
  min-width: 600px;
  margin: 0 auto;
  padding: 80px;
  background: #fff;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 48px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #ddd;
  padding: 12px 0;
  margin-bottom: 32px;
  font-size: 16px;

  &::placeholder {
    color: #bbb;
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid #000;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  background: #ffe812;
  color: #000;
  font-weight: bold;
  border: none;
  padding: 14px 0;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
`;

const LoginErrorMsg = styled.div`
  color: red;
  font-size: 14px;
  text-align: left;
  margin-bottom: 24px;
`;
export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const fromPath = location.state?.from?.pathname || '/';

  const {
    id,
    pw,
    idError,
    pwError,
    handleIdChange,
    handlePwChange,
    handleIdBlur,
    handlePwBlur,
    isValid,
  } = LoginForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid) return;
    navigate(fromPath, { replace: true });
  };

  return (
    <>
      <Layout>
        <LoginWrapper>
          <Title>kakao</Title>
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="이메일"
              value={id}
              onChange={handleIdChange}
              onBlur={handleIdBlur}
              required
            />
            {idError && <LoginErrorMsg>{idError}</LoginErrorMsg>}
            <Input
              type="password"
              placeholder="비밀번호"
              value={pw}
              onChange={handlePwChange}
              onBlur={handlePwBlur}
              required
            />
            {pwError && <LoginErrorMsg>{pwError}</LoginErrorMsg>}
            <LoginButton type="submit" disabled={!isValid}>
              로그인
            </LoginButton>
          </form>
        </LoginWrapper>
      </Layout>
    </>
  );
}