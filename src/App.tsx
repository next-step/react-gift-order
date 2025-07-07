import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '@/pages/login'
import HomePage from '@/pages/HomePage'
import NotFound from '@/pages/NotFound'
import MyPage from '@/pages/MyPage'
import OrderPage from '@/pages/OrderPage'
import { AuthProvider } from '@/contexts/AuthContext'
import ProtectedRoute from '@/components/ProtectedRoute'
import PageWrapper from './components/PageWrapper'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<PageWrapper><LoginPage /></PageWrapper>} />
          <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
          <Route path="/my" element={
            <ProtectedRoute>
              <PageWrapper>
                <MyPage />
              </PageWrapper>
            </ProtectedRoute>
          } />
          <Route path="/order/:productId" element={
            <ProtectedRoute>
              <PageWrapper>
                <OrderPage />
              </PageWrapper>
            </ProtectedRoute>
          } />
          <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App

