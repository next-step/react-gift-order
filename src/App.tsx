import { useContext, useEffect } from 'react';
import { Providers } from '@/Providers';
import { AppWrapper } from '@/styles/App.styles';
import { Routes, Route } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import WithHeaderLayout from '@/Layout/WithHeaderLayout';
import ResetStyles from '@/styles/ResetStyles';
import MainLayout from '@/Layout/MainLayout';
import Login from '@/pages/Login';
import Mypage from '@/pages/Mypage';
import Order from '@/pages/Order/Order';
import NotFound from '@/NotFound';
import { LoginInfoContext } from '@/contexts/LoginInfoContext';

function App() {
  const { loginInfo, setLoginInfo } = useContext(LoginInfoContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const id = localStorage.getItem('id') || '';
    if (loginInfo !== id) setLoginInfo(id);
  }, []);

  function handleBackClick() {
    if (location.pathname !== '/') navigate(-1);
  }

  function handleLoginClick() {
    const id = localStorage.getItem('id') || '';
    if (!id) navigate('/login');
    else navigate('/my');
  }

  return (
    <Providers>
      <AppWrapper>
        <ResetStyles />
        <Routes>
          <Route
            element={
              <WithHeaderLayout
                handleBackClick={handleBackClick}
                handleLoginClick={handleLoginClick}
              />
            }
          >
            <Route path="/" element={<MainLayout />} />
            <Route path="/login" element={<Login onLogin={handleBackClick} />} />
            <Route path="/my" element={<Mypage onLogin={handleBackClick} />} />
            <Route path="/order/:orderId" element={<Order />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppWrapper>
    </Providers>
  );
}

export default App;
