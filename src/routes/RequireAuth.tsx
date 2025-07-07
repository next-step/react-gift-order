import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import type { ReactElement } from 'react';

export default function RequireAuth({ children }: { children: ReactElement }) {
  const { user } = useAuth();
  const location = useLocation();

  return user ? children : <Navigate to="/login" state={{ from: location.pathname }} replace />;
}
