import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import useUser from '@/hooks/useUser';

function My() {
  const {getId, getEmail, removeId} = useUser();
  const userId = getId();
  const userEmail = getEmail();
  const navigate = useNavigate();

  function logOut() {
    removeId('userId')
    navigate('/login');
  }
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
