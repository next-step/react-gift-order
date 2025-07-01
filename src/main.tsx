import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/styles/theme';
import App from './App';
import './styles/reset.css';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
