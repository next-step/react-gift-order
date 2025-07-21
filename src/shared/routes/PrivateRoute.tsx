import { useAuth } from '@contexts/AuthContext';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isInitialized } = useAuth();
  if (!isInitialized) return null;
  return user ? children : <Navigate to="/login" replace />;
};
export default PrivateRoute;
