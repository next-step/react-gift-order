import { Route, Routes } from 'react-router-dom';
import Home from '@src/pages/Home';
import LoginPage from '@/pages/LoginPage';
import NotFound from '@/pages/NotFound';
import MyPage from '@/pages/MyPage';
import Order from '@/pages/Order';
import PrivateRoute from '@/router/PrivateRoute';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/my"
        element={
          <PrivateRoute>
            <MyPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/order/:id"
        element={
          <PrivateRoute>
            <Order />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
