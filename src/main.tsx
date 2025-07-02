import React from 'react';
import { createRoot } from 'react-dom/client';
import { Global, ThemeProvider } from '@emotion/react';
import { RouterProvider } from 'react-router-dom';
import { theme } from '@/styles/theme';
import reset from '@/styles/reset';
import { router } from './router';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={reset} />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
