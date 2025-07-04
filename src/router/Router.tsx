import { createBrowserRouter } from 'react-router-dom';
import Home from '@pages/Home';
import Login from '@pages/Login';
import NotFound from '@pages/NotFound';
import { URLS } from '@assets/urls';
import MyPage from '@/pages/MyPage';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: URLS.login,
    element: <Login />,
  },
  {
    path: URLS.mypage,
    element: <MyPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
export default Router;
