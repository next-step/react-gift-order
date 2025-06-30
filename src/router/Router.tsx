import { Route, Routes } from 'react-router-dom';
import Home from '@src/pages/Home';
import LoginPage from '@/pages/LoginPage';
import NotFound from '@/pages/NotFound';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
