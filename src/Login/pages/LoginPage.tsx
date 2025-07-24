import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUserContext } from '@/contexts/UserContext';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const { isLoggedIn } = useUserContext();
  const navigate = useNavigate();
  const location = useLocation();

  // 이미 로그인되어 있다면 마이페이지로 리다이렉트
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/my', { replace: true });
    }
  }, [isLoggedIn, navigate]);

  const from = location.state?.from || { pathname: '/my' };
  const redirectPath = from.pathname + (from.search || '');

  return <LoginForm redirectPath={redirectPath} />;
};

export default LoginPage;
