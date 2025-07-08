import { createBrowserRouter} from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import { Home, Login, My, Order, NotFound } from '@/pages';
import ProtectedRoute from '@/components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'my',
        element: (
          <ProtectedRoute>
            <My />
          </ProtectedRoute>
        ),
      },
      {
        path: 'order',
        element: (
          <ProtectedRoute>
            <Order />
          </ProtectedRoute>
        ),
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
