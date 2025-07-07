import { Routes, Route } from 'react-router-dom';
import Home from '@/Pages/Home';
import Login from '@/Pages/Login';
import NotFound from '@/Pages/NotFound';
import MyPage from '@/Pages/MyPage';
import LoginProtectedRoute from '@/shared/LoginProtectedRoute';
import Order from '@/Pages/Order';

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
      <Route
        path="/order/:itemId"
        element={
          <LoginProtectedRoute>
            <Order />
          </LoginProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default Router;
