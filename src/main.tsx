import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/styles/theme';
import App from './App';
import './styles/reset.css';
import './index.css';
import { AuthProvider } from './contexts/AuthContext';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </ThemeProvider>
);
