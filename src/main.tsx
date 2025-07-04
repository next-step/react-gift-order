import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { reset } from '@styles/reset';
import { Global, ThemeProvider } from '@emotion/react';
import { theme } from './theme/theme';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <Global styles={reset} />
    <App />
  </ThemeProvider>
);
