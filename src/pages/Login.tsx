import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import GlobalStyle from '../styles/GlobalStyle';
import { ThemeProvider } from '@emotion/react';
import theme from '../styles/theme';
import styled from '@emotion/styled';

import Layout from '../components/Layout';
import NavBar from '../components/NavBar';

import { useInput } from '@/hooks/useInput';
import { EMAIL_REGEX } from '@/\butils/regex';
import { ID_REQUIRED, ID_INVALID, PW_REQUIRED, PW_TOO_SHORT } from '@/constants/messages';

const LoginFormWrapper = styled.div`
  height: 100vh;
  padding: 0 150px;
  background-color: ${({ theme }) => theme.colors.gray[0]};

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LoginFormTitle = styled.h1`
  font-size: 30px;
  text-align: center;
  margin: 40px;
`;

interface InputProps {
  invalid?: string;
  hasEnabled?: boolean;
}

const LoginFormInput = styled.input<InputProps>`
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid ${({ theme ,invalid}) => invalid ? theme.colors.red[400] : theme.colors.gray[400]};
  height: 40px;
  font-size: ${({ theme }) => theme.typography.title2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.title2Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.title2Regular.lineHeight};

  &:focus {
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[700]};
  }
`

const LoginFormErrorText = styled.p`
    color: red;
    font-size: 14px;
`



const LoginFormBtn = styled.button<InputProps>`
  background-color: ${({ theme ,hasEnabled}) => hasEnabled ? theme.colors.semantic.kakaoYellow : '#fff19b'};
  cursor: ${({hasEnabled}) => (hasEnabled ? 'pointer' : 'not-allowed')};
  border: none;
  border-radius: 5px;
  height: 40px;
  margin-top: 25px;
  
`;

const validateEmail = (v: string) => {
  if(!v) return ID_REQUIRED;
  const ok = EMAIL_REGEX.test(v);
  return ok ? '' : ID_INVALID;
};

const validatePassword = (v: string) => {
  if(!v) return PW_REQUIRED;
  return v.length >= 8 ? '' : PW_TOO_SHORT;
};

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const id = useInput(validateEmail);
  const pw = useInput(validatePassword);

  const isFormValid = id.isValid && pw.isValid;

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(!isFormValid) return;
    navigate(from, { replace: true});
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <NavBar></NavBar>
        <LoginFormWrapper>
          <LoginForm>
            <LoginFormTitle>KAKAO</LoginFormTitle>
            <LoginFormInput placeholder='이메일' type='email' value={id.value} onChange={id.onChange} onBlur={id.onBlur} invalid={id.error}></LoginFormInput>
            {id.error && <LoginFormErrorText>{id.error}</LoginFormErrorText>}
            <LoginFormInput placeholder='비밀번호' type='password' value={pw.value} onChange={pw.onChange} onBlur={pw.onBlur} invalid={pw.error}></LoginFormInput>
            {pw.error && <LoginFormErrorText>{pw.error}</LoginFormErrorText>}
            <LoginFormBtn onClick={handleLogin} hasEnabled={isFormValid}>로그인</LoginFormBtn>
          </LoginForm>
        </LoginFormWrapper>
      </Layout>
    </ThemeProvider>
  );
}
export default Login;