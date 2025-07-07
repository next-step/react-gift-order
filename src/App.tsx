import { useState, useEffect } from 'react';
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

function App() {
  const [loginInfo, setLoginInfo] = useState<string>('');
  const navigate = useNavigate();
  const location = useLocation();

  function handleBackClick() {
    if (location.pathname !== '/') navigate(-1);
  }

  function handleLoginClick() {
    if (loginInfo == '') navigate('/login');
    else {
      navigate('/my');
    }
  }

  useEffect(() => {
    setLoginInfo(localStorage.getItem('id') || '');
  }, []);

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
