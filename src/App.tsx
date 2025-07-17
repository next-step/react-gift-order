// src/App.tsx
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import { BaseLayout } from './components/Layout/BaseLayout';
import { Navigation } from './components/Layout/Navigation';
import { Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/Home/Page';
import LoginPage from '@/pages/Login/LoginPage';
import OrderPage from '@/pages/Home/OrderPage';
import MyPage from '@/pages/MyPage/MyPage';
import NotFound from '@/pages/NotFound/Page';
import { RequireAuth } from '@/components/RequireAuth';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BaseLayout header={<Navigation />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/order/:id" element={<OrderPage />} />

          {/* 여기! /my 경로를 RequireAuth로 감싸서 로그인된 사용자만 접근하도록 */}
          <Route 
            path="/my" 
            element={
              <RequireAuth>
                <MyPage />
              </RequireAuth>
            } 
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BaseLayout>
    </ThemeProvider>
  );
};

export default App;
