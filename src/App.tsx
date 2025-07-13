import { ThemeProvider } from '@emotion/react';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import NotFound from './pages/NotFound.tsx';
import My from './pages/My.tsx';
import Order from './pages/Order.tsx';

import useUser from './hooks/useUser.ts';
import type { ReactNode } from 'react';

const ProtectedRoute = ({children}: {children: ReactNode}) => {
  const { getId } = useUser();

  return getId() === '' ? <Navigate to='/login' replace /> : children;
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/my" element={<ProtectedRoute><My /></ProtectedRoute>} />
          <Route path="/order" element={<Order />} />
          <Route path="*" element={<Navigate to="/notfound" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
