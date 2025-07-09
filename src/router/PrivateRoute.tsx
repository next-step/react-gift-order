import { Navigate, useLocation } from 'react-router-dom';
import { useUserInfo } from '@src/contexts/AuthContext';
import ROUTES from '@/constants/routes';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { user, loading } = useUserInfo();
  const location = useLocation();

  if (loading) {
    return null;
  }

  if (!user) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
