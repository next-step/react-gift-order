import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import Home from '@/pages/Home/Page';
import Login from '@/pages/Login/Page';
import My from '@/pages/My/Page';
import Order from '@/pages/Order/page';
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
        path: 'my',
        element: sessionStorage.getItem('kakaotech/userInfo') ? <My /> : <Navigate to="/login" replace />,
      },
      {
        path: 'order',
        element: sessionStorage.getItem('kakaotech/userInfo') ? <Order /> : <Navigate to="/login" replace />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
