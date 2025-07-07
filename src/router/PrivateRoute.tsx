import { Navigate, useLocation } from 'react-router-dom';
import { useUserInfo } from '@src/contexts/AuthContext';

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
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
