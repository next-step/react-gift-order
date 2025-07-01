import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Reset from './styles/reset.tsx'
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Reset />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
