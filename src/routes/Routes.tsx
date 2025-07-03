import Home from '@/pages/Home';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import { Route, Routes as RouterRoutes } from 'react-router';

export const Routes = () => {
  return (
    <RouterRoutes>
      <Route path={ROUTE_PATH.HOME} element={<Home />} />
      <Route path={ROUTE_PATH.LOGIN} element={<Login />} />
      <Route path={ROUTE_PATH.NOT_FOUND} element={<NotFound />} />
    </RouterRoutes>
  );
};

export const ROUTE_PATH = {
  HOME: '/',
  LOGIN: '/login',
  NOT_FOUND: '*',
};
