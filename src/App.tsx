import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalResetStyle } from './styles/reset';
import { Global } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme/theme';
import GiftMain from './pages/GiftMain';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalResetStyle} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GiftMain />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
