import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import App from './App.tsx';
import Login from './Login.tsx';
import NotFound from './NotFound.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/NotFound" element={<NotFound />}></Route>
        <Route path="*" element={<Navigate to="/NotFound" replace />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
