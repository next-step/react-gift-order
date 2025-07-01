import { Route, Routes as RouterRoutes } from 'react-router';
import HomePage from './Home/Page';
import NotFoundPage from './NotFound/Page';
import LoginPage from './Login/Page';

export const Routes = () => {
  return (
    <RouterRoutes>
      <Route path={ROUTE_PATH.HOME} element={<HomePage />} />
      <Route path={ROUTE_PATH.LOGIN} element={<LoginPage />} />
      <Route path={ROUTE_PATH.NOT_FOUND} element={<NotFoundPage />} />
    </RouterRoutes>
  );
};

export const ROUTE_PATH = {
  HOME: '/',
  LOGIN: '/login',
  NOT_FOUND: '*',
};
