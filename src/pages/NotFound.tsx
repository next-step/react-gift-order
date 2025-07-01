import GlobalStyle from '@/styles/global';
import NavigationBar from '@components/NavigationBar';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: rgb(247, 248, 249);
`;

const Container = styled.div`
  max-width: 720px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: rgb(255, 255, 255);
  padding-top: 2.75rem;
`;

const MainContent = styled.main`
  width: 100%;
  height: calc(-2.75rem + 100vh);
  background-color: rgb(243, 244, 245);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 1.25rem;
`;

const NotFoundImg = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

const MainText = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.6875rem;
  color: rgb(42, 48, 56);
  margin: 0px;
  text-align: left;
`;

const SubText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.375rem;
  color: rgb(134, 139, 148);
  margin: 0px;
  text-align: left;
`;

const GoHomeButton = styled.button`
  width: 160px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(254, 229, 0);
  color: rgb(42, 48, 56);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.375rem;
  cursor: pointer;
`;

const NotFound = () => {
  const navigate = useNavigate();
  const goHomeHandler = () => {
    navigate('/', { replace: true });
  };
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <NavigationBar />
        <Container>
          <MainContent>
            <NotFoundImg
              src="https://gift-s.kakaocdn.net/dn/gift/webapp/images/m640/img_not_found.png"
              alt="not found"
            />
            <div
              css={css`
                width: 100%;
                height: 28px;
                background-color: transparent;
              `}
            />
            <MainText>잘못된 접근입니다.</MainText>
            <div
              css={css`
                width: 100%;
                height: 8px;
                background-color: transparent;
              `}
            />
            <SubText>찾으시는 페이지가 존재하지 않습니다.</SubText>
            <div
              css={css`
                width: 100%;
                height: 48px;
                background-color: transparent;
              `}
            />
            <GoHomeButton onClick={goHomeHandler}>홈으로</GoHomeButton>
          </MainContent>
        </Container>
      </Wrapper>
    </>
  );
};

export default NotFound;
