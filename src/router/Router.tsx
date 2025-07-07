import { Route, Routes } from 'react-router-dom';
import Home from '@src/pages/Home';
import LoginPage from '@/pages/LoginPage';
import NotFound from '@/pages/NotFound';
import MyPage from '@/pages/MyPage';
import Order from '@/pages/Order';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/my" element={<MyPage />} />
      <Route path="/order/:id" element={<Order />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
