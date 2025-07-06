import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider, Global } from '@emotion/react'
import { resetStyle } from '@/styles/reset'
import theme from '@/styles/theme'
import HomePage from '@/pages/HomePage'
import LoginPage from '@/pages/Login/LoginPage'
import NotFoundPage from '@/pages/NotfoundPage'
import { MainLayout } from './components/MainLayout'
import MyPage from '@/pages/MyPage'
import OrderPage from '@/pages/OrderPage'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={resetStyle} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
          <Route path="/login" element={<MainLayout><LoginPage /></MainLayout>} />
          <Route path="*" element={<MainLayout><NotFoundPage /></MainLayout>} />
          <Route path="/my" element={<MainLayout><MyPage /></MainLayout>} />
          <Route path="/order/:itemId" element={<MainLayout><OrderPage /></MainLayout>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
