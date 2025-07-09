import { createBrowserRouter } from 'react-router-dom';
import { PATH } from '@/constants/paths';
import PageLayout from '@/Layout/PageLayout';
import HomePage from '@/pages/HomPage';
import LoginPage from '@/pages/LoginPage';
import NotFoundPage from '@/pages/NotFoundPage';
import { LoginProvider } from '../contexts/LoginContext';
import PrivateRoute from '@/components/PrivateRoute/PrivateRoute';
import MyPage from '@/pages/MyPage';
import OrderPage from '@/pages/OrderPage';

export const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <LoginProvider><PageLayout /></LoginProvider>,
    children: [
      { path: '', element: <HomePage /> },
      { path: PATH.LOGIN.slice(1), element: <LoginPage /> },
      {
        element: <PrivateRoute />,
        children: [
          { path: PATH.MY_PAGE.slice(1), element: <MyPage /> },
          { path: PATH.ORDER.slice(1) + '/:productId', element: <OrderPage /> },
        ],
      },
      { path: PATH.NOT_FOUND, element: <NotFoundPage /> },
    ],
  },
]);
