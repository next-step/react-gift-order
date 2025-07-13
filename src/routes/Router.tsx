import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/home";
import LoginPage from "@/pages/login";
import NotFoundPage from "@/pages/404";
import { NavigationBar } from "@/pages/home/components/NavigationBar";
import AuthGuard from "@/routes/guards/AuthGuard";
import MyPage from "@/pages/my";
import OrderPage from "@/pages/order";
import { ROUTES } from "@/constants/routes";

export default function Router() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path={ROUTES.MY}
          element={
            <AuthGuard>
              <MyPage />
            </AuthGuard>
          }
        />
        <Route
          path={ROUTES.ORDER_DETAIL_TEMPLATE}
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
