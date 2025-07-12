import { Layout } from '@/widgets'
import { Home, Login, NotFound, MyPage, Order } from '@/pages'
import { Routes, Route } from 'react-router-dom'
import { withAuth } from '@/app/hoc/withAuth'

// * 라우터 컴포넌트
const Router = () => {
  return (
    <Routes>
      {/* 레이아웃 (Nav바) */}
      <Route path={ROUTE_PATH.HOME} element={<Layout />}>
        {/* 홈 페이지 */}
        <Route index element={<Home />} />
        {/* 로그인 페이지 */}
        <Route path={ROUTE_PATH.LOGIN} element={<Login />} />
        {/* 마이 페이지 */}
        <Route path={ROUTE_PATH.MY} element={<AuthPages.MyPage />} />
        {/* 주문하기 페이지 */}
        <Route path={`${ROUTE_PATH.ORDER}/:id`} element={<AuthPages.Order />} />

        {/* 404 NotFound 페이지 - 기타 구현되지 않은 경로 페이지 */}
        <Route path={ROUTE_PATH.NOT_FOUND} element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default Router

// * 라우터 경로 상수
export const ROUTE_PATH = {
  // * 홈 페이지
  HOME: '/',
  // * 로그인 페이지
  LOGIN: '/login',
  // * 마이 페이지
  MY: '/my',
  // * 주문하기 페이지
  ORDER: '/order',
  // * 404 페이지
  NOT_FOUND: '*',
}

// * 인증 페이지들을 별도 객체로 관리
const AuthPages = {
  MyPage: withAuth(MyPage),
  Order: withAuth(Order),
}
