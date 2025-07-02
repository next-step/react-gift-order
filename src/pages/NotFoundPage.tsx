import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import MobileLayout from '@/layouts/MobileLayout';
import NavBar from '@/components/NavBar';
import errorImg from '@/assets/ErrorImg.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  text-align: center;
`;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
`;

const ErrorImg = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 28px;
`;

const Title = styled.h1`
  ${({ theme }) => theme.typography.title1Bold};
  margin-bottom: 8px;
`;

const SubTitle = styled.h1`
  ${({ theme }) => theme.typography.body1Regular};
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 48px;
`;

const HomeLink = styled(Link)`
  width: 160px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.typography.body1Regular};
  color: ${({ theme }) => theme.colors.semantic.kakaoBrown};
  background-color: ${({ theme }) => theme.colors.semantic.kakaoYellow};
  text-decoration: none;
  cursor: pointer;
`;

export default function NotFoundPage() {
  return (
    <MobileLayout>
      <Wrapper>
        <NavBar />
        <Content>
          <ErrorImg src={errorImg} alt="kakao 이미지" />
          <Title>잘못된 접근입니다.</Title>
          <SubTitle>찾으시는 페이지가 존재하지 않습니다.</SubTitle>
          <HomeLink to="/">홈으로</HomeLink>
        </Content>
      </Wrapper>
    </MobileLayout>
  );
}
