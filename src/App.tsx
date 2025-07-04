import GlobalStyle from '@/styles/GlobalStyle';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategoryList from '@/components/CategoryList';
import FeaturedGifts from '@/components/FeaturedGifts';
import SupportBanner from '@/components/SupportBanner';
import LiveRanking from '@/components/LiveRanking';
import Footer from '@/components/Footer';
import { Container } from '@/styles/Container';
import { Routes, Route } from 'react-router-dom';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import MyPage from '@/pages/MyPage';
import OrderPage from '@/pages/OrderPage';
import ProtectedRoute from '@/components/ProtectedRoute';
import { AuthProvider } from '@/contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Container>
        <GlobalStyle />

        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <CategoryList />
                <FeaturedGifts />
                <SupportBanner />
                <LiveRanking />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/my"
            element={
              <ProtectedRoute>
                <MyPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/order/:productId"
            element={
              <ProtectedRoute>
                <OrderPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </AuthProvider>
  );
}

export default App;
