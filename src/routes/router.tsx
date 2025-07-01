import { createBrowserRouter } from 'react-router-dom';
import MainPage from '@/pages/MainPage';
import LoginPage from '@/pages/LoginPage';
import NotFoundPage from '@/pages/NotFoundPage';
import Header from '@/components/Header';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <MainPage />
      </>
    ),
  },
  {
    path: '/login',
    element: (
      <>
        <Header />
        <LoginPage />
      </>
    ),
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
