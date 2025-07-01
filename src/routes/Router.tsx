import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "@/App";
import LoginPage from "@/pages/LoginPage";
import NotFoundPage from "@/pages/NotFoundPage";
import Header from "@/components/Header";

const ROUTES = {
  ROOT: "/",
  LOGIN: "login",
};

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={ROUTES.ROOT} element={<App />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
