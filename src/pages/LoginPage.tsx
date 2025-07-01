import React from 'react';
import styled from '@emotion/styled';
import { useNavigate, useLocation } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Layout } from '@/components/Layout';
const LoginWrapper = styled.main`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  padding: 80px 16px;
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
//NavBar가 맨 위에 고정되게

export default function LoginPage() {

  const navigate = useNavigate();
  const location = useLocation();
  const fromPath = location.state?.from?.pathname || '/';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // ✅ 로그인 로직은 필요 없으므로 생략!
    navigate(fromPath, { replace: true });
  };

  return (

    <>
      <Layout>
        
        <LoginWrapper>
          <Title>kakao</Title>
          <form onSubmit={handleSubmit}>
            <Input type="email" placeholder="이메일" required />
            <Input type="password" placeholder="비밀번호" required />
            <LoginButton type="submit">로그인</LoginButton>
          </form>
        </LoginWrapper>
      </Layout>
    </>
  );
}


