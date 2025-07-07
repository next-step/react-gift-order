import GiftsPage from '@/page/GiftPage';
import LoginPage from '@/page/LoginPage';
import MyPage from '@/page/MyPage';
import NotFound from '@/page/NotFound';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './routes';
import RequireAuth from './RequireAuth';

const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<GiftsPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.MY} element={<RequireAuth><MyPage /></RequireAuth>} />
      <Route path={ROUTES.NOTFOUND} element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
