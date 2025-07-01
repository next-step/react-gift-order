import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Header } from '@/components/Header/Header';
import { useLocation, useNavigate } from 'react-router';
import { ROUTE_PATH } from '@/shared/Router';

const AppContainer = styled.div`
  width: 720px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

const CenterWrap = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 400;
  color: #191919;
  text-align: center;
  margin-bottom: 48px;
  letter-spacing: 0.5px;
`;

const InputRow = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 24px;
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  font-size: 17px;
  border: none;
  border-bottom: 1.5px solid #e0e0e0;
  outline: none;
  background: transparent;
  padding: 0 36px 0 8px;
  color: #191919;

  &::placeholder {
    color: #bdbdbd;
    font-size: 17px;
    letter-spacing: 0.5px;
  }
`;

const IconButton = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 0 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Button = styled.button`
  height: 50px;
  background: #ffe812;
  color: #191919;
  border: none;
  border-radius: 4px;
  font-size: 17px;
  font-weight: 400;
  cursor: pointer;
  margin-top: 16px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.95);
  }
`;

export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || ROUTE_PATH.HOME;
  const handleLogin = () => {
    navigate(from, { replace: true });
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 로그인 처리 로직
    alert(`이메일: ${email}\n비밀번호: ${password}`);
  };

  return (
    <AppContainer>
      <Header title="선물하기" />
      <CenterWrap>
        <Form onSubmit={handleSubmit}>
          <Title>kakao</Title>
          <InputRow>
            <Input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <IconButton tabIndex={-1} type="button" aria-label="이메일 도움말" />
          </InputRow>
          <InputRow style={{ marginBottom: '32px' }}>
            <Input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </InputRow>
          <Button type="submit" onClick={handleLogin}>
            로그인
          </Button>
        </Form>
      </CenterWrap>
    </AppContainer>
  );
};
