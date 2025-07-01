import { createBrowserRouter } from 'react-router-dom';
import { PATH } from '@/constants/paths';
import PageLayout from '@/Layout/PageLayout';
import HomePage from '@/pages/HomPage';
import LoginPage from '@/pages/LoginPage';
import NotFoundPage from '@/pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <PageLayout />,
    children: [
      { path: '', element: <HomePage /> },
      { path: PATH.LOGIN.slice(1), element: <LoginPage /> },
      { path: PATH.NOT_FOUND, element: <NotFoundPage /> },
    ],
  },
]);