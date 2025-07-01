import styled from '@emotion/styled';
import { BaseNavigation } from './BaseNavigation';
import logo from '@/resources/images/navigation_logo.webp';
import { Link, useNavigate, useLocation } from 'react-router';
import { ChevronLeft, UserRound } from 'lucide-react';
import { ROUTE_PATH } from '@/pages/Routes';

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackClick = () => {
    navigate(-1);
  };

  const isLoginPage = location.pathname === ROUTE_PATH.LOGIN;

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
      right={
        isLoginPage ? (
          <UserRound />
        ) : (
          <Link to={`${ROUTE_PATH.LOGIN}?redirect=${encodeURIComponent(window.location.pathname)}`}>
            <UserRound />
          </Link>
        )
      }
    />
  );
};

const Logo = styled.img(() => ({
  height: '2.75rem',
}));
