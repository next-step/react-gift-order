import { createBrowserRouter } from 'react-router-dom'
import App from '@/App'
import LoginPage from '@/pages/LoginPage'
import NotFound from '@/pages/NotFound'


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
    path: '*',
    element: <NotFound />,
  },
])

export default router