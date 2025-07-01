import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from './App';
import LoginPage from '@/pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </>,
  ),
);
