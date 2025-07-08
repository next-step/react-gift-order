import { Navigate, useLocation } from 'react-router-dom';
import { useUserInfo } from '@src/contexts/AuthContext';

const NO_LOGIN_PATH = '/login';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { user, loading } = useUserInfo();
  const location = useLocation();

  if (loading) {
    return <></>;
  }

  if (!user) {
    return <Navigate to={NO_LOGIN_PATH} state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
