// NavigationBar.tsx
import { StyledNavBackBtn } from '@/styles/Common/StyledNavBackBtn';
import { StyledNavbar } from '@/styles/Common/StyledNavbar';
import { StyledNavLoginBtn } from '@/styles/Common/StyledNavLoginBtn';
import { StyledNavTextDiv } from '@/styles/Common/StyledNavTextDiv';
import { URLS } from '@assets/urls';
import { Spacer } from '@styles/Spacer';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
