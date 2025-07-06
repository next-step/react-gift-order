import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import My from '@/pages/My';
import NotFound from '@/pages/NotFound';
import { AuthProvider } from '@/context/AuthContext';

export const Router = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my" element={<My />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};
