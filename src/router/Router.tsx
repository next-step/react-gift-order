import NavBar from "@src/components/NavBar";
import ErrorPage from "@src/pages/ErrorPage";
import LoginPage from "@src/pages/LoginPage";
import Mainpage from "@src/pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
