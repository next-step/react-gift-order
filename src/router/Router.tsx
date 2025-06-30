import { Layout } from '@/components/home/Layout'
import { Home } from '@/pages/Home'
import { Login } from '@/pages/Login'
import { NotFound } from '@/pages/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 레이아웃 (Nav바) */}
        <Route path="/" element={<Layout />}>
          {/* 홈 페이지 */}
          <Route index element={<Home />} />
          {/* 로그인 페이지 */}
          <Route path="/login" element={<Login />} />

          {/* 404 NotFound 페이지 - 기타 구현되지 않은 경로 페이지 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
