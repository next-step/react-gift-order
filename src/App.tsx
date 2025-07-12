/** @jsxImportSource @emotion/react */
import { Global, ThemeProvider, css } from '@emotion/react';
import { reset } from './styles/reset';
import { theme } from './styles/theme';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import { AuthProvider } from './contexts/AuthContext';
import MyPage from './pages/MyPage';
import Order from './pages/Order';

const containerStyle = css`
  max-width: 720px;
  margin: 0 auto;
  background-color: transparent;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={reset} />
      <div css={containerStyle}>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/my" element={<MyPage />} />
              <Route path="/order/:id" element={<Order />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </div>
    </ThemeProvider>
  );
};

export default App;
