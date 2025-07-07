import { Route, Routes } from 'react-router-dom';
import GiftHome from '../pages/GiftHome';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import MyPage from '../pages/MyPage';
import PrivateRoute from './PrivateRoute';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<GiftHome />} />
      <Route path="/login" element={<Login />} />

      <Route element={<PrivateRoute />}>
        <Route path="/my" element={<MyPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
