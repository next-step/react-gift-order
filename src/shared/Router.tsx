import { BrowserRouter, Routes, Route } from 'react-router';
import { GiftPage } from '@/pages/GiftPage';
import { Login } from '@/pages/Login';
import { NotFound } from '@/pages/NotFound';
import { ROUTE_PATH } from './RoutePath';
import { MyPage } from '@/pages/MyPage';
import { OrderPage } from '@/pages/OrderPage';
import { PrivateRoute } from './PrivateRoute';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE_PATH.HOME} element={<GiftPage />} />
        <Route path={ROUTE_PATH.LOGIN} element={<Login />} />
        <Route path={ROUTE_PATH.NOT_FOUND} element={<NotFound />} />
        <Route
          path={ROUTE_PATH.MY_PAGE}
          element={
            <PrivateRoute>
              <MyPage />
            </PrivateRoute>
          }
        />
        <Route
          path={ROUTE_PATH.ORDER}
          element={
            <PrivateRoute>
              <OrderPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
