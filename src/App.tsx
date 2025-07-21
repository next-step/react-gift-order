import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import MyPage from "./pages/MyPage";
import { AuthProvider } from "./contexts/AuthProvider";
import { Header } from "./components/common/Header";
import GiftOrderPage from "./pages/GiftOrderPage";
import { ThemeProductsPage } from "./pages/ThemeProductPage";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="w-2xl h-screen bg-gray-100 mx-auto ">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/login" element={<LoginPage />} />

            <Route path="/mypage" element={<MyPage />} />
            <Route path="/order/:productId" element={<GiftOrderPage />} />
            <Route
              path="/themes/:themeId/products"
              element={<ThemeProductsPage />}
            />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
