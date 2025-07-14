import { ROUTE_PATH } from '@/pages/Routes';
import { useUserInfo } from '@/providers/UserInfo';
import { Navigate, Outlet } from 'react-router';

export const PrivateRoute = () => {
  const { userInfo } = useUserInfo();

  if (userInfo) {
    return <Outlet />;
  }

  return (
    <Navigate to={`${ROUTE_PATH.LOGIN}?redirect=${encodeURIComponent(window.location.pathname)}`} />
  );
};
