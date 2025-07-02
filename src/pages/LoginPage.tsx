import React, { useState } from 'react';s
import styled from '@emotion/styled';
import { useNavigate, useLocation } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Layout } from '@/components/Layout';
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

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [idError, setIdError] = useState('');
  const [pwError, setPwError] = useState('');

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const handleIdBlur = () => {
    if (!id.trim()) {
      setIdError('ID를 입력해주세요.');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(id)) {
      setIdError('ID는 이메일 형식으로 입력해주세요.');
    } else {
      setIdError('');
    }
  };

  const handlePwBlur = () => {
    if (!pw.trim()) {
      setPwError('PW를 입력해주세요.');
    } else if (pw.length < 8) {
      setPwError('PW는 최소 8글자 이상이어야 합니다.');
    } else {
      setPwError('');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
            <LoginButton type="submit">로그인</LoginButton>
          </form>
        </LoginWrapper>
      </Layout>
    </>
  );
}
