import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
import NotFoundPage from "@/pages/NotFoundPage";
import HomePage from "@/pages/HomePage";
import LogoutPage from "@/pages/LogoutPage";
import OrderPage from "@/pages/OrderPage";
import OrderLayout from "@/components/layout/OrderLayout";
import AppLayout from "@/components/layout/AppLayout";

const ROUTES = {
  ROOT: "/",
  LOGIN: "/login",
  MYPAGE: "/my",
  ORDER: "/order/:productId",
};

export default function Router() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path={ROUTES.ROOT} element={<HomePage />} />
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.MYPAGE} element={<LogoutPage />} />
          <Route
            path={ROUTES.ORDER}
            element={
              <OrderLayout>
                <OrderPage />
              </OrderLayout>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}
