import GiftsPage from '@/page/GiftPage';
import LoginPage from '@/page/LoginPage';
import NotFound from '@/page/NotFound';
import { Route, Routes } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<GiftsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
