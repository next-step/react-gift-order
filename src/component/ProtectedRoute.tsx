import { useAuth } from '@/context/AuthContext';
import type { JSX } from '@emotion/react/jsx-runtime';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/Login" replace />;
  }
  return children;
};

export default ProtectedRoute;