import { Navigate, useLocation } from 'react-router-dom';
import { useUserInfo } from '@/contexts/UserInfoContext';
import { ROUTES } from './routes';
import { type PropsWithChildren } from 'react';

const RequireAuth = ({ children }: PropsWithChildren) => {
  const { isLoggedIn } = useUserInfo();
  const location = useLocation();

  return isLoggedIn ? (
    <>{children}</>
  ) : (
    <Navigate to={ROUTES.LOGIN} replace state={{ from: location }} />
  );
};

export default RequireAuth;
