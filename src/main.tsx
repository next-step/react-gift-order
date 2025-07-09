import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from '@src/App.tsx';
import '@src/styles/reset.css';

import { UserInfoProvider } from '@src/contexts/AuthContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserInfoProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserInfoProvider>
  </StrictMode>
);
