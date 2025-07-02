import NavBar from "@src/components/NavBar";
import ErrorPage from "@src/pages/ErrorPage";
import LoginPage from "@src/pages/LoginPage";
import Mainpage from "@src/pages/MainPage";
import MyPage from "@src/pages/MyPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const PATH = {
  MAIN: "/",
  LOGIN: `/login`,
  MY: "/my",
  EXCEPT: "*"
} as const;

function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={PATH.MAIN} element={<Mainpage />} />
        <Route path={PATH.LOGIN} element={<LoginPage />} />
        <Route path={PATH.MY} element={<MyPage />} />
        <Route path={PATH.EXCEPT} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
