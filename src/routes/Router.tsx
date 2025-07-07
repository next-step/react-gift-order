import { Routes, Route } from 'react-router-dom'

import GiftPage from '@/features/Gift/pages/GiftPage'
import LoginPage from '@/features/Login/pages/LoginPage'
import NotFoundPage from '@/features/NotFound/pages/NotFoundPage'
import NavLayout from '@/component/Layout/NavLayout'
import MyPage from '@/features/My/pages/MyPage'
import OrderPage from '@/features/Order/pages/OrderPage'
import PrivateRoute from '@/routes/PrivateRoute'

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<NavLayout />}>
        <Route path={ROUTE_PATH.GIFT} element={<GiftPage />} />
        <Route path={ROUTE_PATH.LOGIN} element={<LoginPage />} />
        <Route path={ROUTE_PATH.NOT_FOUND} element={<NotFoundPage />} />
        <Route
          path={ROUTE_PATH.MY}
          element={
            <PrivateRoute>
              <MyPage />
            </PrivateRoute>
          }
        />
        <Route
          path={ROUTE_PATH.ORDER}
          element={
            <PrivateRoute>
              <OrderPage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  )
}

export const ROUTE_PATH = {
  GIFT: '/',
  LOGIN: '/login',
  MY: '/my',
  ORDER: '/order',
  NOT_FOUND: '*',
}

export default AppRouter
