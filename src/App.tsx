import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider, Global } from '@emotion/react'
import { resetStyle } from '@/styles/reset'
import theme from '@/styles/theme'
import HomePage from '@/pages/HomePage'
import LoginPage from '@/pages/Login/LoginPage'
import NotFoundPage from '@/pages/NotfoundPage'
import { MainLayout } from './components/MainLayout'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={resetStyle} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
          <Route path="/login" element={<MainLayout><LoginPage /></MainLayout>} />
          <Route path="*" element={<MainLayout><NotFoundPage /></MainLayout>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
