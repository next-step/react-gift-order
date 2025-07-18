import { Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { CategorySection } from '@/components/CategorySection';
import { ProductListSection } from '@/components/ProductListSection';
import { LoginPage } from '@/pages/LoginPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import RootLayout from '@/layout/RootLayout';
import MyPage from '@/pages/MyPage';
import PrivateRoute from '@/components/PrivateRoute';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RootLayout>
            <Navbar />
            <main>
              <CategorySection />
              <ProductListSection />
            </main>
          </RootLayout>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/my" element={<PrivateRoute />}>
        <Route path="/my" element={<MyPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
