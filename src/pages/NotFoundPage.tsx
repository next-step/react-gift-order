/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { FiArrowLeft, FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray100};
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  ${({ theme }) => theme.typography.title2Bold};
`;

const Content = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid
    ${({ theme }) => theme.colors.borderDefault};
  background-color: ${({ theme }) => theme.colors.backgroundDefault};
`;

const Title1 = styled.h3`
  font-size: ${({ theme }) => theme.typography.title1Bold.fontSize};
  font-weight: ${({ theme }) =>
    theme.typography.title1Bold.fontWeight};
  line-height: ${({ theme }) =>
    theme.typography.title1Bold.lineHeight};
`;

const Title2 = styled.p`
  font-size: ${({ theme }) =>
    theme.typography.subtitle1Bold.fontSize};
  font-weight: 400;
  line-height: ${({ theme }) =>
    theme.typography.subtitle1Bold.lineHeight};
  color: ${({ theme }) => theme.colors.gray700};
`;

const HomeButton = styled.button`
  background-color: ${({ theme }) => theme.colors.kakaoYellow};
  border: none;
  width: 160px;
  height: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) =>
    theme.typography.subtitle1Bold.fontSize};
  font-weight: 400;
  line-height: ${({ theme }) =>
    theme.typography.subtitle1Bold.lineHeight};
`;

const NotFoundImg = styled.img`
  weight: 150px;
  height: 150px;
`;

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Wrapper>
        <HeaderContainer>
          <FiArrowLeft size={20} onClick={() => navigate('/')} />
          <Title>선물하기</Title>
          <FiUser size={20} onClick={() => navigate('/login')} />
        </HeaderContainer>
        <Content>
          <NotFoundImg alt="NotFound" src="img_not_found.png" />
          <Title1>잘못된 접근입니다.</Title1>
          <br />
          <Title2>찾으시는 페이지가 존재하지 않습니다.</Title2>
          <br />
          <HomeButton>홈으로</HomeButton>
        </Content>
      </Wrapper>
    </>
  );
};

export default NotFoundPage;
