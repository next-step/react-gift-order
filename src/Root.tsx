import { Routes, Route } from 'react-router-dom'
import App from './App'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'

const PATHS = {
  HOME: '/',
  LOGIN: '/login',
  NOT_FOUND: '*',
}

const Root = () => {
  return (
    <Routes>
      <Route path={PATHS.HOME} element={<App />} />
      <Route path={PATHS.LOGIN} element={<LoginPage />} />
      <Route path={PATHS.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  )
}

export default Root
