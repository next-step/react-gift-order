import { useAuth } from '@contexts/AuthContext';
import { Navigate } from 'react-router-dom';

interface LoginGuardProps {
  children: React.ReactNode;
  redirectTo: string;
}
const LoginGuard = ({ children, redirectTo }: LoginGuardProps) => {
  const { user, isInitialized } = useAuth();

  if (!isInitialized) return null;

  return user ? <Navigate to={redirectTo} replace /> : <>{children}</>;
};

export default LoginGuard;
