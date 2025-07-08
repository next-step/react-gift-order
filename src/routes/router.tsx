import { createBrowserRouter} from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import Home from '@/pages/Home/Page';
import Login from '@/pages/Login/Page';
import My from '@/pages/My/Page';
import Order from '@/pages/Order/page';
import NotFound from '@/pages/NotFound/Page';
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
