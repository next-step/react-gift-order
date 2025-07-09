import { Routes, Route, Navigate } from "react-router";
import { ROUTE_PATH } from "./paths";
import MainPage from "@/pages/MainPage";
import LoginPage from "@/pages/LoginPage";
import NotFoundPage from "@/pages/NotFoundPage";
import MyPage from "@/pages/MyPage";
import OrderPage from "@/pages/OrderPage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_PATH.HOME} element={<MainPage />} />
      <Route path={ROUTE_PATH.LOGIN} element={<LoginPage />} />
      <Route path={ROUTE_PATH.MY_PAGE} element={<MyPage />} />
      <Route path={ROUTE_PATH.ORDER} element={<OrderPage />} />
      <Route path={ROUTE_PATH.NOT_FOUND} element={<NotFoundPage />} />
      <Route
        path="*"
        element={<Navigate to={ROUTE_PATH.NOT_FOUND} replace />}
      />
    </Routes>
  );
};

export default Router;
