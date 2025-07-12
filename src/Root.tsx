import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import App from './App'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'
import MyPage from './pages/MyPage'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './contexts/AuthContext'
import OrderPage from './pages/OrderPage'

export const PATHS = {
  HOME: '/',
  LOGIN: '/login',
  NOT_FOUND: '*',
  ORDER: '/order/:productId',
  MY: '/my',
}as const
const authProtected = (element: React.ReactNode) => (
  <ProtectedRoute>{element}</ProtectedRoute>
)
const router = createBrowserRouter([
  {
    path: PATHS.LOGIN,
    element: authProtected(<LoginPage />),
  },
  {
    path: PATHS.HOME,
    element: authProtected(<App />),
  },
  {
    path: PATHS.ORDER,
    element: authProtected(<OrderPage />),
  },
  {
    path: PATHS.MY,
    element: authProtected(<MyPage />),
  },
  {
    path: PATHS.NOT_FOUND,
    element: authProtected(<NotFoundPage />),
  },
])
const Root = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default Root
