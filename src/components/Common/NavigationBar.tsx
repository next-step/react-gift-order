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
  type LoginMessgageTypes = '로그인' | '마이페이지';

  const [loginMessage, setLoginMessage] = useState<LoginMessgageTypes>('로그인');
  const isLogined = sessionStorage.getItem('username');

  const handelBack = () => {
    const referrer = document.referrer; // 이전 페이지의 URL
    const currentOrigin = window.location.origin;

    if (referrer) {
      // referrer가 존재한다면, 해당 URL의 origin을 파싱합니다.
      const referrerUrl = new URL(referrer);
      const referrerOrigin = referrerUrl.origin;

      if (referrerOrigin !== currentOrigin) {
        // 이전 페이지의 origin이 현재 우리 사이트의 origin과 다르면
        navigate(URLS.home); // 또는 navigate('/')
      } else {
        // 이전 페이지의 origin이 우리 사이트와 같으면
        navigate(-1);
      }
    } else {
      console.log('referrer 없음. 홈으로 이동합니다.');
      navigate(URLS.home); // 또는 navigate('/')
    }
  };
  const handelLogin = () => {
    if (isLogined) {
      navigate(URLS.mypage);
    } else {
      navigate(URLS.login);
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
