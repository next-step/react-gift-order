import { Routes, Route } from 'react-router-dom'

import GiftPage from '@/features/Gift/pages/GiftPage'
import LoginPage from '@/features/Login/pages/LoginPage'
import NotFoundPage from '@/features/NotFound/pages/NotFoundPage'
import NavLayout from '@/component/Layout/NavLayout'

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<NavLayout />}>
        <Route path={ROUTE_PATH.GIFT} element={<GiftPage />} />
        <Route path={ROUTE_PATH.LOGIN} element={<LoginPage />} />
        <Route path={ROUTE_PATH.NOT_FOUND} element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export const ROUTE_PATH = {
  GIFT: '/',
  LOGIN: '/login',
  NOT_FOUND: '*',
}

export default AppRouter
