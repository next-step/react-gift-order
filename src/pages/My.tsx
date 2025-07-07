import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';


function My() {
    const userId = sessionStorage.getItem('userId')?.split('@')[0] ?? '';
    const userEmail = sessionStorage.getItem('userId') ?? '';
    const navigate = useNavigate();

    function logOut() {
        sessionStorage.removeItem('userId');
        navigate('/');
    };
    return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <NavBar></NavBar>
        <h1>마이 페이지</h1>
        <p>{userId}님 안녕하세요!</p>
        <p>이메일 주소는 {userEmail}입니다</p>
        <button onClick={logOut}>로그아웃</button>
      </Layout>
    </ThemeProvider>
    );
}

export default My;