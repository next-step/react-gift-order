import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GiftHome from '@/pages/GiftHome';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GiftHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
