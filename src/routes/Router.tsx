import Login from '@/pages/Login';
import Main from '@/pages/Main';
import NotFound from '@/pages/NotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE_PATH.HOME} element={<Main />}></Route>
        <Route path={ROUTE_PATH.LOGIN} element={<Login />}></Route>
        <Route path={ROUTE_PATH.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export const ROUTE_PATH={
  HOME:'/',
  LOGIN:'/login',
  NOT_FOUND: '*',
}

