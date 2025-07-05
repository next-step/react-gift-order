import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/home";
import LoginPage from "@/pages/login";
import NotFoundPage from "@/pages/404";
import { NavigationBar } from "@/pages/home/components/NavigationBar";
import AuthGuard from "./guards/AuthGuard";
import MyPage from "@/pages/my";
import OrderPage from "@/pages/order";

export default function Router() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path="/my"
          element={
            <AuthGuard>
              <MyPage />
            </AuthGuard>
          }
        />
        <Route
          path="/order/:productId"
          element={
            <AuthGuard>
              <OrderPage />
            </AuthGuard>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
