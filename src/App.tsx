/** @jsxImportSource @emotion/react */
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import CategorySection from './components/CategorySection';
import { categories } from './data/categories';
import FriendSelector from './components/FriendSelector';
import Banner from './components/Banner';
import RankingSection from './components/RankingSection/RankingSection';
import LoginPage from './pages/Login/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import MyPage from './pages/MyPage';
import { UserManagementProvider, useUserManagement } from './pages/Login/userManagement';
import React from 'react';
import OrderPage from './pages/Order/OrderPage';
import ScrollToTop from './components/ScrollToTop';

const Home = () => (
  <main>
    <FriendSelector />
    <CategorySection categories={categories} />
    <Banner />
    <RankingSection />
  </main>
);

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUserManagement();

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

function App() {
  return (
    <BrowserRouter>
      <UserManagementProvider>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route
            path="/my"
            element={
              <ProtectedRoute>
                <MyPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </UserManagementProvider>
    </BrowserRouter>
  );
}

export default App;
