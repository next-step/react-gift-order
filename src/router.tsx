import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import RequireAuth from './routes/RequireAuth';
import HomePage from './pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import MyPage from './pages/MyPage';
import NotFoundPage from './pages/NotFoundPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />\
      <Route
        path="/my"
        element={
          <RequireAuth>
            <MyPage />
          </RequireAuth>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </>,
  ),
);
