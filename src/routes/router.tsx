import { createBrowserRouter } from 'react-router-dom';
import MainPage from '@/pages/MainPage';
import LoginPage from '@/pages/LoginPage';
import NotFoundPage from '@/pages/NotFoundPage';
import Header from '@/components/Header';
import MyPage from '@/pages/MyPage';
import OrderPage from '@/pages/OrderPage';
import { ROUTE_PATH } from '@/constants/routes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: ROUTE_PATH.LOGIN,
    element: <LoginPage />,
  },
  {
    path: ROUTE_PATH.MY,
    element: <MyPage />,
  },
  {
    path: '/order/:productId',
    element: <OrderPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
