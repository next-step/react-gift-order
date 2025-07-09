import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import type { ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
}

function AuthGuard({ children }: ProtectedRouteProps) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // 인증되지 않은 사용자는 로그인 페이지로 리다이렉트하면서 원래 가려던 위치를 state로 전달
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  // 인증된 사용자는 원래 컴포넌트를 렌더링
  return children;
}

export default AuthGuard;
