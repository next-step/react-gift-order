import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import { BaseLayout } from './components/Layout/BaseLayout';
import { Navigation } from './components/Layout/Navigation';
import { Routes, Route } from 'react-router-dom'
import HomePage from '@/pages/Home/Page'
import LoginPage from '@/pages/Login/LoginPage'
import OrderPage from '@/pages/Home/OrderPage'
import MyPage from '@/pages/MyPage/MyPage'
import NotFound from '@/pages/NotFound/Page'
const App = () => {
  return (
      <ThemeProvider theme={theme}>
        <BaseLayout header={<Navigation />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/order/:id" element={<OrderPage />} />
            <Route path="/my" element={<MyPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BaseLayout>
      </ThemeProvider>
  );
};

export default App;
