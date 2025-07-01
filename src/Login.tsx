import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import GlobalStyle from './styles/GlobalStyle'
import { ThemeProvider } from '@emotion/react'
import theme from './styles/theme'
import styled from '@emotion/styled'

import Layout from './components/Layout'
import NavBar from './components/NavBar'

const LoginFormWrapper = styled.div`
    height: 100vh;
    padding: 0 150px;
    background-color: ${({ theme }) => theme.colors.gray[0]};


    display: flex;
    flex-direction: column;
    justify-content: center;
`

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const LoginFormTitle = styled.h1`
    font-size: 30px;
    text-align: center;
    margin: 40px;
`

const LoginFormId = styled.input`
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[400]};
    height: 40px;
    font-size: ${({ theme }) => theme.typography.title2Regular.fontSize};
    font-weight: ${({ theme }) => theme.typography.title2Regular.fontWeight};
    line-height: ${({ theme }) => theme.typography.title2Regular.lineHeight};

    &:focus {
        outline: none;
        border-bottom: 1px solid ${({ theme }) => theme.colors.gray[700]};
    }
`

const LoginFormPw = styled.input`
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[400]};
    margin: 25px 0;
    height: 40px;
    font-size: ${({ theme }) => theme.typography.title2Regular.fontSize};
    font-weight: ${({ theme }) => theme.typography.title2Regular.fontWeight};
    line-height: ${({ theme }) => theme.typography.title2Regular.lineHeight};

    &:focus {
        outline: none;
        border-bottom: 1px solid ${({ theme }) => theme.colors.gray[700]};
    }
`

const LoginFormBtn = styled.button`
    background-color: ${({ theme }) => theme.colors.semantic.kakaoYellow};
    border: none;
    border-radius: 5px;
    height: 40px;
`

function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    
    const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
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
                        <LoginFormId placeholder='이메일'></LoginFormId>
                        <LoginFormPw placeholder='비밀번호'></LoginFormPw>
                        <LoginFormBtn onClick={handleLogin}>로그인</LoginFormBtn>
                    </LoginForm>
                </LoginFormWrapper>
            </Layout>
        </ThemeProvider>
    )
}
export default Login