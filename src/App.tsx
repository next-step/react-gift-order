import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from '@/styles/GlobalStyle';
import { palette, typography, spacing } from '@/styles/theme';
import { GiftPage } from '@/pages/GiftPage';
import { LoginPage } from '@/pages/LoginPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { MyPage } from './pages/MyPage';
import { AuthProvider } from './contexts/AuthContext';
import OrderPage from './pages/OrderPage';
import { PrivateRoute } from './router/PrivateRoute';

const theme = { palette, typography, spacing } as const;

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<GiftPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/my" element={<PrivateRoute><MyPage /></PrivateRoute>} />
          <Route path="/order/:itemId" element={<PrivateRoute><OrderPage /></PrivateRoute>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
