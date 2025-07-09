import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { theme } from '@/styles/theme';
import { ThemeProvider } from '@emotion/react';
import App from './App.tsx';
import GlobalStyle from '@/styles/GlobalStyle';
import 'material-icons/iconfont/material-icons.css';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
