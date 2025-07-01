import { ThemeProvider } from '@emotion/react';
import { theme } from '@/styles/ResetStyles';
import { AppWrapper } from '@/styles/App.styles';
import { Routes, Route } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import WithHeaderLayout from '@/Layout/WithHeaderLayout';
import ResetStyles from '@/styles/ResetStyles';
import MainLayout from '@/Layout/MainLayout';
import Login from '@/pages/Login';
import NotFound from '@/NotFound';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  function handleBackClick() {
    if (location.pathname !== '/') navigate(-1);
  }
  function handleLoginClick() {
    navigate('/login');
  }
  return (
    <ThemeProvider theme={theme}>
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
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
