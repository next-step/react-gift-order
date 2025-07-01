import { Layout } from '@/components/home/Layout'
import { Home } from '@/pages/Home'
import { Login } from '@/pages/Login'
import { NotFound } from '@/pages/NotFound'
import { Routes, Route } from 'react-router-dom'

// * 라우터 컴포넌트
const Router = () => {
  return (
    <Routes>
      {/* 레이아웃 (Nav바) */}
      <Route path={ROUTH_PATH.HOME} element={<Layout />}>
        {/* 홈 페이지 */}
        <Route index element={<Home />} />
        {/* 로그인 페이지 */}
        <Route path={ROUTH_PATH.LOGIN} element={<Login />} />

        {/* 404 NotFound 페이지 - 기타 구현되지 않은 경로 페이지 */}
        <Route path={ROUTH_PATH.NOT_FOUND} element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default Router

// * 라우터 경로 상수
export const ROUTH_PATH = {
  // * 홈 페이지
  HOME: '/',
  // * 로그인 페이지
  LOGIN: '/login',
  // * 404 페이지
  NOT_FOUND: '*',
}
