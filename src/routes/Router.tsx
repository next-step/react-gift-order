import { createBrowserRouter } from 'react-router-dom'

import GiftPage from '@/features/Gift/pages/GiftPage'
import LoginPage from '@/features/Login/pages/LoginPage'
import NotFoundPage from '@/features/NotFound/pages/NotFoundPage'
import NavLayout from '@/component/Layout/NavLayout'
import MyPage from '@/features/My/pages/MyPage'
import OrderPage from '@/features/Order/pages/OrderPage'
import PrivateRoute from '@/routes/PrivateRoute'

export const ROUTE_PATH = {
  GIFT: '/',
  LOGIN: '/login',
  MY: '/my',
  ORDER: '/order',
  NOT_FOUND: '*',
}

const Router = createBrowserRouter([
  {
    path: ROUTE_PATH.GIFT,
    element: <NavLayout />,
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
])

export default Router
