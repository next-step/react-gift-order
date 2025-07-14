import styled from '@emotion/styled';
import { BaseNavigation } from './BaseNavigation';
import logo from '@/resources/images/navigation_logo.webp';
import { Link, useNavigate, useLocation } from 'react-router';
import { ChevronLeft, UserRound } from 'lucide-react';
import { ROUTE_PATH } from '@/pages/Routes';
import { useUserInfo } from '@/providers/UserInfo';

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userInfo } = useUserInfo();

  const handleBackClick = () => {
    navigate(-1);
  };

  const isLoginPage = location.pathname === ROUTE_PATH.LOGIN;
  const loginButton = isLoginPage ? (
    <UserRound />
  ) : (
    <Link
      to={
        userInfo
          ? ROUTE_PATH.MY
          : `${ROUTE_PATH.LOGIN}?redirect=${encodeURIComponent(window.location.pathname)}`
      }
    >
      <UserRound />
    </Link>
  );

  return (
    <BaseNavigation
      left={
        <button onClick={handleBackClick}>
          <ChevronLeft size={28} strokeWidth={1.8} />
        </button>
      }
      center={
        <Link to={ROUTE_PATH.HOME}>
          <Logo src={logo} alt='카카오 선물하기 로고' />
        </Link>
      }
      right={loginButton}
    />
  );
};

const Logo = styled.img(() => ({
  height: '2.75rem',
}));
