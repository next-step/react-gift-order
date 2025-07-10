import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App.tsx';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/styles/theme';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import LoginPage from '@/pages/LoginPage/LoginPage';
import NotFoundPage from '@/pages/NotFoundPage.tsx';
import MyPage from '@/pages/MyPage/MyPage';
import PrivateRoute from '@/PrivateRoute';
import OrderPage from '@/pages/OrderPage/OrderPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // 기존 UI
    errorElement: <NotFoundPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/my',
    element: (
      <PrivateRoute>
        <MyPage />
      </PrivateRoute>
    ),
  },
  {
    path: '/order/:id',
    element: (
      <PrivateRoute>
        <OrderPage />
      </PrivateRoute>
    ),
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
