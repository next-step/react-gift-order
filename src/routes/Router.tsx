import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
import NotFoundPage from "@/pages/NotFoundPage";
import HomePage from "@/pages/HomePage";
import Header from "@/components/layout/Header";

const ROUTES = {
  ROOT: "/",
  LOGIN: "/login",
};

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={ROUTES.ROOT} element={<HomePage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
