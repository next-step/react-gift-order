import { useState, createContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

import Layout from '../components/Layout';
import NavBar from '../components/NavBar';

import useInput from '@/hooks/useInput';

const LoginFormWrapper = styled.div`
  width: auto;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray.gray00};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const LoginFormTitle = styled.h1`
  font-size: 30px;
  margin-bottom: ${({ theme }) => theme.spacing.spacing9};
`;

// interface InputProps {
//   invalid?: string;
// }

const LoginFormInput = styled.input`
  width: 390px;
  height: ${({ theme }) => theme.spacing.spacing10};
  margin-top: ${({ theme }) => theme.spacing.spacing4};

  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.gray400};

  &:focus {
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray.gray700};
  }

  font-size: ${({ theme }) => theme.typography.title.title2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.title2Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.title.title2Regular.lineHeight};

  ::placeholder {
    font-size: ${({ theme }) => theme.typography.body.body1Regular.fontSize};
    font-weight: ${({ theme }) => theme.typography.body.body1Regular.fontWeight};
    line-height: ${({ theme }) => theme.typography.body.body1Regular.lineHeight};
    color: ${({ theme }) => theme.colors.gray.gray600};
  }
`;

const LoginFormErrorTxt = styled.p`
  color: red;
  font-size: 14px;
`;

const LoginFormBtn = styled.button`
  width: 390px;
  height: ${({ theme }) => theme.spacing.spacing11};
  margin-top: ${({ theme }) => theme.spacing.spacing12};

  background-color: ${({ theme }) => theme.colors.brand.kakaoYellow};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  font-size: ${({ theme }) => theme.typography.label.label1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label.label1Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.label.label1Regular.lineHeight};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.yellow.yellow300};
    font-size: ${({ theme }) => theme.typography.label.label1Regular.fontSize};
    font-weight: ${({ theme }) => theme.typography.label.label1Regular.fontWeight};
    line-height: ${({ theme }) => theme.typography.label.label1Regular.lineHeight};
    cursor: not-allowed;
  }
`;



// 메인 컴포넌트
function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'

  const username = useInput('username');
  const password = useInput('password');

  const isFormValid = username.isValid && password.isValid;

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!isFormValid) return;
    sessionStorage.setItem('userId', username.value);
    navigate(from, { replace: true });
  };

  return (
      // <UserInfoContext.Provider value={userInfo}>
        <Layout>
          <NavBar></NavBar>
          <LoginFormWrapper>
            <LoginForm>
              <LoginFormTitle>KAKAO</LoginFormTitle>

              {/* 아이디 input */}
              <LoginFormInput
                placeholder="이메일"
                type="email"
                value={username.value}
                onChange={(e) => username.onChange(e.target.value)}
                onBlur={username.onBlur}
              ></LoginFormInput>
              {username.error && <LoginFormErrorTxt>{username.error}</LoginFormErrorTxt>}

              {/* 비밀번호 input */}
              <LoginFormInput
                placeholder="비밀번호"
                type="password"
                value={password.value}
                onChange={(e) => password.onChange(e.target.value)}
                onBlur={password.onBlur}
              ></LoginFormInput>
              {password.error && <LoginFormErrorTxt>{password.error}</LoginFormErrorTxt>}

            
              <LoginFormBtn onClick={handleLogin} disabled={!isFormValid}>
                로그인
              </LoginFormBtn>

            </LoginForm>
          </LoginFormWrapper>
        </Layout>
      // </UserInfoContext.Provider>
  );
}

export default Login;
