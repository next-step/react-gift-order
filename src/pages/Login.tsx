import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import GlobalStyle from '../styles/GlobalStyle';
import { ThemeProvider } from '@emotion/react';
import theme from '../styles/theme';
import styled from '@emotion/styled';

import Layout from '../components/Layout';
import NavBar from '../components/NavBar';

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
  hasIdError?: string;
  hasPwError?: string;
  hasEnabled?: boolean;
}

const LoginFormId = styled.input<InputProps>`
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid ${({ theme ,hasIdError}) => hasIdError ? theme.colors.red[400] : theme.colors.gray[400]};
  height: 40px;
  font-size: ${({ theme }) => theme.typography.title2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.title2Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.title2Regular.lineHeight};

  &:focus {
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[700]};
  }

`;

const LoginFormErrorText = styled.p`
    color: red;
    font-size: 14px;
`

const LoginFormPw = styled.input<InputProps>`
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid ${({ theme ,hasPwError}) => hasPwError ? theme.colors.red[400] : theme.colors.gray[400]};
  margin-top: 25px;
  height: 40px;
  font-size: ${({ theme }) => theme.typography.title2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.title2Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.title2Regular.lineHeight};

  &:focus {
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[700]};
  }
`;

const LoginFormBtn = styled.button<InputProps>`
  background-color: ${({ theme ,hasEnabled}) => hasEnabled ? theme.colors.semantic.kakaoYellow : '#fff19b'};
  cursor: ${({hasEnabled}) => hasEnabled ? 'pointer' : 'not-allowed'};
  border: none;
  border-radius: 5px;
  height: 40px;
  margin-top: 25px;
  
`;

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [idError, setIdError] = useState('');
  const [pwError, setPwError] = useState('');

  const handleIdBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();

    if(!value) {
        setIdError('ID를 입력해주세요.');
        return;
    } 

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(value)) {
        setIdError('ID는 이메일 형식으로 입력해주세요.');
        return;
    }

    setIdError('');
  }

  const handlePwBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();

    if(!value) {
        setPwError('PW를 입력해주세요.');
        return;
    } 

    if(value.length < 8) {
        setPwError('PW는 최소 8글자 이상이어야 합니다.');
        return;
    }

    setPwError('');
  }

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(idError) return;
    if(pwError) return;

    navigate(from, { replace: true });
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <NavBar></NavBar>
        <LoginFormWrapper>
          <LoginForm>
            <LoginFormTitle>KAKAO</LoginFormTitle>
            <LoginFormId placeholder='이메일' type='email' value={userId} onChange={e => setUserId(e.target.value)} onBlur={handleIdBlur} hasIdError={idError}></LoginFormId>
            {idError && <LoginFormErrorText>{idError}</LoginFormErrorText>}
            <LoginFormPw placeholder='비밀번호' type='password' value={userPw} onChange={e => setUserPw(e.target.value)} onBlur={handlePwBlur} hasPwError={pwError}></LoginFormPw>
            {pwError && <LoginFormErrorText>{pwError}</LoginFormErrorText>}
            <LoginFormBtn onClick={handleLogin} hasEnabled={((idError === '') && (pwError === '')) && (userId.length > 0 && userPw.length > 7)}>로그인</LoginFormBtn>
          </LoginForm>
        </LoginFormWrapper>
      </Layout>
    </ThemeProvider>
  );
}
export default Login;

//에러면 문자열이 들어가있고 에러가 아니면 문자열이 없음 즉 두개다 빈 문자열일때