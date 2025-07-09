import { useContext } from 'react';
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
  const { loginInfo } = useContext(LoginInfoContext);
  const navigate = useNavigate();
  const location = useLocation();

  function handleBackClick() {
    if (location.pathname !== '/') navigate(-1);
  }

  function handleLoginClick() {
    const id = loginInfo || '';
    if (!id) navigate('/login');
    else navigate('/my');
  }

  return (
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
  );
}

export default App;
