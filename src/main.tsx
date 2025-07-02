/** @jsxImportSource @emotion/react */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Global, ThemeProvider } from '@emotion/react'; 
import reset from '@/styles/reset';
import App from '@/App';
import { theme } from '@/constants/theme'; 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={reset} />
      <App />
    </ThemeProvider>
  </StrictMode>
);
