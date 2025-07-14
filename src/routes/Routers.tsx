import LoginPage from '@/page/Login';
import MyPage from '@/page/My';
import OrderPage from '@/page/Order';
import NotFound from '@/page/NotFound';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './routes';
import RequireAuth from './RequireAuth';
import Gift from '@/page/Gift';

const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Gift />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route
        path={ROUTES.MY}
        element={
          <RequireAuth>
            <MyPage />
          </RequireAuth>
        }
      />
      <Route
        path={ROUTES.ORDER}
        element={
          <RequireAuth>
            <OrderPage />
          </RequireAuth>
        }
      />
      <Route path={ROUTES.NOTFOUND} element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
