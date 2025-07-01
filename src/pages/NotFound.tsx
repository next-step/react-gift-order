/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { PageContainer } from '@/components/layout/PageContainer';
import { Navigation } from '@/components/header/Navigation';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px; // 더 직관적
`;

const NotFoundImage = styled.img`
  width: 200px;
  height: 200px;
`;

const Title = styled.h3`
  ${({ theme }) => theme.typography.title1Bold};
  color: ${({ theme }) => theme.colors.textDefault};
  margin: 30px 0 10px;
  text-align: center;
`;

const Description = styled.p`
  ${({ theme }) => theme.typography.body1Regular};
  color: ${({ theme }) => theme.colors.textSub};
  margin-bottom: 30px;
  text-align: center;
`;

const HomeButton = styled.button`
  width: 150px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.kakaoYellow};
  color: ${({ theme }) => theme.colors.textDefault};
  ${({ theme }) => theme.typography.body1Regular};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const GrayContainer = styled(PageContainer)`
  background-color: ${({ theme }) => theme.colors.gray300};
`;

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <GrayContainer>
        <Navigation />
        <Main>
          <NotFoundImage
            src="https://gift-s.kakaocdn.net/dn/gift/webapp/images/m640/img_not_found.png"
            alt="not found"
          />
          <Title>잘못된 접근입니다.</Title>
          <Description>찾으시는 페이지가 존재하지 않습니다.</Description>
          <HomeButton onClick={() => navigate('/')}>홈으로</HomeButton>
        </Main>
      </GrayContainer>
    </PageLayout>
  );
};

export default NotFound;
