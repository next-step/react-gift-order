import { createBrowserRouter } from 'react-router-dom';

import GiftPage from '@/components/GiftRecipientList';
import LoginPage from '@/Login/pages/LoginPage';
import NotFoundPage from '@/pages/NotFound';
import Nav from '@/components/Nav';
import MyPage from '@/My/pages/MyPage';
import OrderPage from '@/Order/pages/OrderPage';
import PrivateRoute from '@/routes/PrivateRoute';

export const ROUTE_PATH = {
  GIFT: '/',
  LOGIN: '/login',
  MY: '/my',
  ORDER: '/order',
  NOT_FOUND: '*',
};

const Router = createBrowserRouter([
  {
    path: ROUTE_PATH.GIFT,
    element: <Nav />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <GiftPage />,
      },
      {
        path: ROUTE_PATH.LOGIN.slice(1),
        element: <LoginPage />,
      },
      {
        path: ROUTE_PATH.MY.slice(1),
        element: (
          <PrivateRoute>
            <MyPage />
          </PrivateRoute>
        ),
      },
      {
        path: ROUTE_PATH.ORDER.slice(1),
        element: (
          <PrivateRoute>
            <OrderPage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Router;
