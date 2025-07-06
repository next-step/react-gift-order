import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/components/pages/Home';
import Login from '@/components/pages/Login';
import NotFound from '@/components/pages/NotFound';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
