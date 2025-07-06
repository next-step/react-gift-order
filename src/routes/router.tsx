import { Routes, Route } from "react-router";
import { ROUTE_PATH } from "./paths";
import MainPage from "@/pages/MainPage";
import LoginPage from "@/pages/LoginPage";
import NotFoundPage from "@/pages/NotFoundPage";
import MyPage from "@/pages/MyPage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_PATH.HOME} element={<MainPage />} />
      <Route path={ROUTE_PATH.LOGIN} element={<LoginPage />} />
      <Route path={ROUTE_PATH.NOT_FOUND} element={<NotFoundPage />} />
      <Route path={ROUTE_PATH.MY_PAGE} element={<MyPage />} />
    </Routes>
  );
};

export default Router;
