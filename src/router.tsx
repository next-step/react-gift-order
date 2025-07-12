import { createBrowserRouter } from 'react-router-dom'
import App from '@/App'
import LoginPage from '@/pages/LoginPage'
import OrderPage from '@/pages/OrderPage'
import MyPage from '@/pages/MyPage'
import NotFound from '@/pages/NotFound'
import RequireAuth from '@/components/RequireAuth'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    element: <RequireAuth />,
    children: [
      {
        path: '/profile',
        element: <MyPage />,
      },
      {
        path: '/order/:id',
        element: <OrderPage />,
      },
    ],
  },
    {
    path: '*',
    element: <NotFound />,
  },
])

export default router