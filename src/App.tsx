/** @jsxImportSource @emotion/react */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import CategorySection from './components/CategorySection';
import { categories } from './data/categories';
import FriendSelector from './components/FriendSelector';
import Banner from './components/Banner';
import RankingSection from './components/RankingSection/RankingSection';
import LoginPage from './pages/Login/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import MyPage from './pages/MyPage';
import { UserManagementProvider } from './pages/Login/userManagement'; 

const Home = () => (
  <main>
    <FriendSelector />
    <CategorySection categories={categories} />
    <Banner />
    <RankingSection />
  </main>
);

function App() {
  return (
    <BrowserRouter>
      <UserManagementProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </UserManagementProvider>
    </BrowserRouter>
  );
}

export default App;