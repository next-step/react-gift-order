// NavigationBar.tsx
import { URLS } from '@/assets/urls';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const StyledNavbar = styled.div`
  position: fixed;
  min-width: 720px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.sementicPalette.backgroundDefault};
`;
const StyledNavBackBtn = styled.button`
  a {
    color: black;
    text-decoration: none;
  }
  list-style: none;
  display: flex;
  align-items: center;
  padding: 12px 30px;
  border: none;
  background-color: inherit;
`;
const StyledNavTextDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 13px 24px;
  ${({ theme }) => theme.typography.title1Bold};
`;
const StyledNavLoginBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 12px 30px;
  border: none;
  background-color: ${({ theme }) => theme.sementicPalette.backgroundDefault};
`;

//Home 페이지와 Login 페이지를 비교하면 NavigatioBar가 미묘하게 오른쪽으로 움직인것처럼 보입니다.
//혹시 왜 그런지 이유를 알 수 있을까요?
const NavigationBar = () => {
  const navigate = useNavigate();
  const LOGIN_URL = URLS.login;

  const handelBack = () => {
    navigate(-1);
  };
  const handelLogin = () => {
    navigate(LOGIN_URL);
  };
  return (
    <StyledNavbar>
      <StyledNavBackBtn onClick={handelBack}>뒤로가기</StyledNavBackBtn>
      <StyledNavTextDiv>선물하기</StyledNavTextDiv>
      <StyledNavLoginBtn onClick={handelLogin}>로그인</StyledNavLoginBtn>
    </StyledNavbar>
  );
};

export default NavigationBar;
