import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GiftShop from '@/pages/GiftShop';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import { UserInfoProvider } from '@/providers/UserInfoProvider';
import MyPage from '@/pages/MyPage';
import GiftOrder from '@/pages/GiftOrder';

const Router = () => {
  return (
    <UserInfoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GiftShop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="/order/:id" element={<GiftOrder />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserInfoProvider>
  );
};

export default Router;
