import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GiftShop from '@/pages/GiftShop';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GiftShop />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
