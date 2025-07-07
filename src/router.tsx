import { createBrowserRouter } from 'react-router-dom'
import App from '@/App'
import LoginPage from '@/pages/LoginPage'
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
    path: '/profile',
    element: (
      <RequireAuth>
        <MyPage />
      </RequireAuth>
    ),
  },
    {
    path: '*',
    element: <NotFound />,
  },
])

export default router