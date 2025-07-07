import { Navigate } from 'react-router-dom';
import { useAuthContext } from '@/contexts/useAuthContext';

const LoginProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn } = useAuthContext();
  return isLoggedIn ? <>{children}</> : <Navigate to="/login" replace />;
};

export default LoginProtectedRoute;
