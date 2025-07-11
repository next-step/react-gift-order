import Layout from '@components/Layout';
import { useAuth } from '@contexts/AuthContext';
import GiftOrderPage from '@pages/GiftOrderPage';
import Home from '@pages/Home';
import Login from '@pages/Login';
import MyPage from '@pages/MyPage';
import NotFound from '@pages/NotFound';
import GlobalStyle from '@styles/GlobalStyles';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
};

const Router = () => {
  const { user } = useAuth();
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={user ? <Navigate to="/my" replace /> : <Login />}
            />
            <Route
              path="/my"
              element={
                <PrivateRoute>
                  <MyPage />
                </PrivateRoute>
              }
            />
            <Route path="/order/:id" element={<GiftOrderPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
