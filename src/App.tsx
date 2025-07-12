/** @jsxImportSource @emotion/react */
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './pages/Home/components/NavBar';
import CategorySection from './pages/Home/components/CategorySection';
import { categories } from './data/categories';
import FriendSelector from './pages/Home/components/FriendSelector';
import Banner from './pages/Home/components/Banner';
import RankingSection from './pages/Home/components/RankingSection/RankingSection';
import LoginPage from './pages/Login/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import MyPage from './pages/MyPage';
import { UserManagementProvider, UserManagement } from './pages/Login/contexts/UserManagement';
import React from 'react';
import OrderPage from './pages/Order/OrderPage';
import ScrollToTop from './pages/Home/ScrollToTop';

const Home = () => (
  <main>
    <FriendSelector />
    <CategorySection categories={categories} />
    <Banner />
    <RankingSection />
  </main>
);

// 로그인 안 한 상태면 마이 페이지 접근 불가(login페이지로 넘어감)
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = UserManagement();

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

// 로그인한 상태면 로그인 페이지 접근 불가(my페이지로 넘어감)
const RedirectIfLoggedIn = ({ children }: { children: React.ReactNode }) => {
  const { user } = UserManagement();

  if (user) {
    return <Navigate to="/my" replace />;
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

          <Route
            path="/login"
            element={
              <RedirectIfLoggedIn>
                <LoginPage />
              </RedirectIfLoggedIn>
            }
          />

          <Route
            path="/my"
            element={
              <ProtectedRoute>
                <MyPage />
              </ProtectedRoute>
            }
          />

          <Route path="/order" element={<OrderPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </UserManagementProvider>
    </BrowserRouter>
  );
}

export default App;
