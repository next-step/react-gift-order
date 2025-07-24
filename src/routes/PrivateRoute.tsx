import { Navigate, useLocation } from 'react-router-dom';
import { useUserContext } from '@/contexts/UserContext';
import type { ReactNode } from 'react';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isLoggedIn } = useUserContext();
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/Login" replace state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
