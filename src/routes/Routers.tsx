import GiftsPage from '@/page/GiftPage';
import LoginPage from '@/page/LoginPage';
import NotFound from '@/page/NotFound';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './routes';

const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<GiftsPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.NOTFOUND} element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
