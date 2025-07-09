import { Navigate, useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';
import { useAuth } from '@/hooks';
import { ROUTE_LOGIN } from '@/constants';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  // 로딩 중일 때는 로딩 표시 (짧은 시간이므로 간단하게)
  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '200px',
          fontSize: '16px',
          color: '#666',
        }}
      >
        로딩 중...
      </div>
    );
  }

  // 로그인되지 않은 경우 로그인 페이지로 리다이렉트
  if (!isAuthenticated) {
    return (
      <Navigate to={ROUTE_LOGIN} state={{ from: location.pathname }} replace />
    );
  }

  // 로그인된 경우 컴포넌트 렌더링
  return <>{children}</>;
};

export default PrivateRoute;
