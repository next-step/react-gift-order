import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import Home from '@/pages/Home/Page';
import Login from '@/pages/Login/Page';
import NotFound from '@/pages/NotFound/Page';

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
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
