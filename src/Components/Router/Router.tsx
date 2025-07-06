import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/Components/Pages/Home';
import Login from '@/Components/Pages/Login';
import NotFound from '@/Components/Pages/NotFound';

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
