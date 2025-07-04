// NavigationBar.tsx
import { URLS } from '@/assets/urls';
import { Spacer } from '@/styles/Spacer';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
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

const NavigationBar = () => {
  const navigate = useNavigate();
  const [loginMessage, setLoginMessage] = useState('로그인');
  const LOGIN_URL = URLS.login;
  const MyPage = URLS.mypage;
  const isLogined = sessionStorage.getItem('username');

  const handelBack = () => {
    navigate(-1);
  };
  const handelLogin = () => {
    if (isLogined) {
      navigate(MyPage);
    } else {
      navigate(LOGIN_URL);
    }
  };
  useEffect(() => {
    if (isLogined) {
      setLoginMessage('마이페이지');
    } else {
      setLoginMessage('로그인');
    }
  }, [isLogined]);
  return (
    <>
      <StyledNavbar>
        <StyledNavBackBtn onClick={handelBack}>뒤로가기</StyledNavBackBtn>
        <StyledNavTextDiv>선물하기</StyledNavTextDiv>
        <StyledNavLoginBtn onClick={handelLogin}>{loginMessage}</StyledNavLoginBtn>
      </StyledNavbar>
      <Spacer />
    </>
  );
};

export default NavigationBar;
