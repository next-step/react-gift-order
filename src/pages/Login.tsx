import styled from '@emotion/styled';
import React from 'react';
import { Header } from '@/components/Header/Header';
import { useLocation, useNavigate } from 'react-router';
import { ROUTE_PATH } from '@/shared/RoutePath';
import { useLoginForm } from '@/hooks/useLoginForm';

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

const ErrorMessage = styled.div`
  color: #ff0000;
  font-size: 14px;
  margin-top: 4px;
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

const Button = styled.button<{ disabled: boolean }>`
  height: 50px;
  background: ${({ disabled }) => (disabled ? '#f5f5f5' : '#ffe812')};
  color: ${({ disabled }) => (disabled ? '#bdbdbd' : '#191919')};
  border: none;
  border-radius: 4px;
  font-size: 17px;
  font-weight: 400;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  margin-top: 16px;
  transition: filter 0.2s;

  &:hover {
    filter: ${({ disabled }) => (disabled ? 'none' : 'brightness(0.95)')};
  }
`;

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || ROUTE_PATH.HOME;

  const {
    email,
    password,
    emailError,
    passwordError,
    handleEmailChange,
    handlePasswordChange,
    handleEmailBlur,
    handlePasswordBlur,
    isValid,
  } = useLoginForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    alert(`이메일: ${email}\n비밀번호: ${password}`);
    navigate(from, { replace: true });
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
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              required
            />
            {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
            <IconButton tabIndex={-1} type="button" aria-label="이메일 도움말" />
          </InputRow>
          <InputRow style={{ marginBottom: '32px' }}>
            <Input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={handlePasswordChange}
              onBlur={handlePasswordBlur}
              autoComplete="current-password"
              required
            />
            {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
          </InputRow>
          <Button type="submit" disabled={!isValid}>
            로그인
          </Button>
        </Form>
      </CenterWrap>
    </AppContainer>
  );
};
