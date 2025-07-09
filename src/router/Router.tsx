import { Route, Routes } from 'react-router-dom';
import Home from '@src/pages/Home';
import LoginPage from '@/pages/LoginPage';
import NotFound from '@/pages/NotFound';
import MyPage from '@/pages/MyPage';
import Order from '@/pages/Order';
import PrivateRoute from '@/router/PrivateRoute';
import ROUTES from '@/constants/routes';

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />

      <Route
        path={ROUTES.MY_PAGE}
        element={
          <PrivateRoute>
            <MyPage />
          </PrivateRoute>
        }
      />
      <Route
        path={ROUTES.ORDER_DETAIL_BASE}
        element={
          <PrivateRoute>
            <Order />
          </PrivateRoute>
        }
      />

      <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
};

export default Router;
