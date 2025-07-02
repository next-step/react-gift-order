import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';
import styled from '@emotion/styled';

import { useNavigate } from 'react-router-dom';

const NotFoundWrapper = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray[200]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NotFoundImg = styled.img`
  width: 150px;
  height: 150px;
  margin-top: 80px;
`;

const NotFoundTitle = styled.p`
  font-size: ${({ theme }) => theme.typography.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title1Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title1Bold.lineHeight};
  margin-top: 20px;
`;

const NotFoundSubTitle = styled.p`
  font-size: ${({ theme }) => theme.typography.subtitle1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle1Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.subtitle1Regular.lineHeight};
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.gray[700]};
`;

const NotFoundBtn = styled.button`
  margin-top: 30px;
  background-color: ${({ theme }) => theme.colors.semantic.kakaoYellow};
  border: none;
  width: 170px;
  height: 40px;
  font-size: ${({ theme }) => theme.typography.label1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label1Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.label1Regular.lineHeight};
`;

function NotFound() {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <NavBar></NavBar>
        <NotFoundWrapper>
          <NotFoundImg src="https://gift-s.kakaocdn.net/dn/gift/webapp/images/m640/img_not_found.png"></NotFoundImg>
          <NotFoundTitle>잘못된 접근입니다.</NotFoundTitle>
          <NotFoundSubTitle>
            찾으시는 페이지가 존재하지 않습니다.
          </NotFoundSubTitle>
          <NotFoundBtn onClick={() => navigate('/')}>홈으로</NotFoundBtn>
        </NotFoundWrapper>
      </Layout>
    </ThemeProvider>
  );
}
export default NotFound;
