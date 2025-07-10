import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { ROUTES } from '@/constants/routes';

const PrivateRoute = () => {
  const { isLoggedIn, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) return null;

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to={ROUTES.LOGIN} replace state={{ from: location }} />
  );
};

export default PrivateRoute;
