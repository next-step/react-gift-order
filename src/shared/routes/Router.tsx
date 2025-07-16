import Layout from '@components/Layout/Layout';
import GiftOrderPage from '@pages/GiftOrderPage';
import Home from '@pages/Home';
import Login from '@pages/Login';
import MyPage from '@pages/MyPage';
import NotFound from '@pages/NotFound';
import GlobalStyle from '@styles/GlobalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import LoginGuard from './LoginGuard';

const Router = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={
                <LoginGuard redirectTo="/my">
                  <Login />
                </LoginGuard>
              }
            />
            <Route
              path="/my"
              element={
                <PrivateRoute>
                  <MyPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/order/:id"
              element={
                <PrivateRoute>
                  <GiftOrderPage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
