import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import Layout from '../components/Layout';
import NavBar from '../components/NavBar';

const NotFoundWrapper = styled.div`
  width: auto;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray.gray200};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NotFoundImg = styled.img`
  width: 150px;
  height: 150px;
`;

const NotFoundTitle = styled.p`
  font-size: ${({ theme }) => theme.typography.title.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.title1Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title.title1Bold.lineHeight};
  margin-top: ${({ theme }) => theme.spacing.spacing5};
`;

const NotFoundSubTitle = styled.p`
  font-size: ${({ theme }) => theme.typography.subtitle.subtitle1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle.subtitle1Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.subtitle.subtitle1Regular.lineHeight};
  color: ${({ theme }) => theme.colors.gray.gray700};
  margin-top: ${({ theme }) => theme.spacing.spacing3};
`;

const NotFoundBtn = styled.button`
  width: 170px;
  height: ${({ theme }) => theme.spacing.spacing13};
  margin-top: ${({ theme }) => theme.spacing.spacing8};
  background-color: ${({ theme }) => theme.colors.brand.kakaoYellow};
  border: none;
  
  font-size: ${({ theme }) => theme.typography.body.body1Regular.fontSize};
  font-weight: ${({ theme }) =>
    theme.typography.body.body1Regular.fontWeight};
  line-height: ${({ theme }) =>
    theme.typography.body.body1Regular.lineHeight};
`;

function NotFound() {
  const navigate = useNavigate();

  return (
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
  );
}
export default NotFound;
