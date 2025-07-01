import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GiftShop from '@/pages/GiftShop';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import { useState } from 'react';

const Router = () => {
  const [prevPath, setPrevPath] = useState('');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GiftShop prevPath={prevPath} setPrevPath={setPrevPath} />} />
        <Route path="/login" element={<Login prevPath={prevPath} setPrevPath={setPrevPath} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
