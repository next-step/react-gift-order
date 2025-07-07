import { Routes, Route } from 'react-router-dom';
import Home from '@/Pages/Home';
import Login from '@/Pages/Login';
import NotFound from '@/Pages/NotFound';
import MyPage from '@/Pages/MyPage';
import LoginProtectedRoute from './LoginProtectedRoute';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/my"
        element={
          <LoginProtectedRoute>
            <MyPage />
          </LoginProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default Router;
