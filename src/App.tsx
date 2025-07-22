import { Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { CategorySection } from '@/components/CategorySection';
import { ProductListSection } from '@/components/ProductListSection';
import { LoginPage } from '@/pages/LoginPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import RootLayout from '@/layout/RootLayout';
import MyPage from '@/pages/MyPage';
import PrivateRoute from '@/components/PrivateRoute';
import OrderPage from '@/pages/OrderPage';
import { ModalProvider } from '@/contexts/ModalContext';

function App() {
  return (
    <ModalProvider>
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
        <Route element={<PrivateRoute />}>
          <Route path="/my" element={<MyPage />} />
          <Route path="/order/:productId" element={<OrderPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ModalProvider>
  );
}

export default App;
