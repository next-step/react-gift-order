import { Route, Routes as RouterRoutes } from 'react-router';
import HomePage from './Home/Page';
import NotFoundPage from './NotFound/Page';
import LoginPage from './Login/Page';
import MyPage from './My/Page';
import { PrivateRoute } from '@/components/PrivateRoute';
import OrderDetailPage from './OrderDetail/Page';

export const Routes = () => {
  return (
    <RouterRoutes>
      <Route path={ROUTE_PATH.HOME} element={<HomePage />} />
      <Route path={ROUTE_PATH.LOGIN} element={<LoginPage />} />
      <Route element={<PrivateRoute />}>
        <Route path={ROUTE_PATH.MY} element={<MyPage />} />
        <Route path={ROUTE_PATH.ORDER} element={<OrderDetailPage />} />
      </Route>
      <Route path={ROUTE_PATH.NOT_FOUND} element={<NotFoundPage />} />
    </RouterRoutes>
  );
};

export const ROUTE_PATH = {
  HOME: '/',
  LOGIN: '/login',
  MY: '/my',
  ORDER: '/order/:productId',
  NOT_FOUND: '*',
};

export const getPath = {
  order: (productId: string) => ROUTE_PATH.ORDER.replace(':productId', productId),
};
