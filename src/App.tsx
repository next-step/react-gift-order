import { ThemeProvider, Global } from '@emotion/react';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import { resetStyle } from '@/styles/reset';
import theme from '@/styles/theme';
import { PATH } from '@/paths';
import { MainLayout } from '@/components/MainLayout';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/Login/LoginPage';
import MyPage from '@/pages/MyPage';
import NotFoundPage from '@/pages/NotfoundPage';
import OrderPage from '@/pages/OrderPage';

const LayoutWrapper = () => (
  <MainLayout>
    <Outlet />
  </MainLayout>
);

const router = createBrowserRouter([
  {
    element: <LayoutWrapper />,
    children: [
      { path: PATH.HOME, element: <HomePage /> },
      { path: PATH.LOGIN, element: <LoginPage /> },
      { path: PATH.MY, element: <MyPage /> },
      { path: PATH.ORDER, element: <OrderPage /> },
      { path: PATH.NOTFOUND, element: <NotFoundPage /> },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={resetStyle} />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
