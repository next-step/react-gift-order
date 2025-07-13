import Home from '@/pages/Home';
import Login from '@/pages/Login';
import MyPage from '@/pages/MyPage';
import NotFound from '@/pages/NotFound';
import Order from '@/pages/Order';
import { Route, Routes as RouterRoutes } from 'react-router';

export const Routes = () => {
  return (
    <RouterRoutes>
      <Route path={ROUTE_PATH.HOME} element={<Home />} />
      <Route path={ROUTE_PATH.LOGIN} element={<Login />} />
      <Route path={ROUTE_PATH.NOT_FOUND} element={<NotFound />} />
      <Route path={ROUTE_PATH.MY_PAGE} element={<MyPage />} />
      <Route path={ROUTE_PATH.ORDER} element={<Order />} />
    </RouterRoutes>
  );
};

export const ROUTE_PATH = {
  HOME: '/',
  LOGIN: '/login',
  NOT_FOUND: '*',
  MY_PAGE: '/Mypage',
  ORDER: '/Order',
};
