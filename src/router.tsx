import { PrivateRoute, PublicRoute } from "@/components/auth";
import { Header } from "@/components/main";
import { ROUTE_PATH } from "@/constants";
import { OrderProvider } from "@/contexts/order/OrderContext";
import { LoginPage, MainPage, MyPage, NotFoundPage, OrderPage } from "@/pages";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTE_PATH.HOME} element={<MainPage />} />
          <Route element={<PublicRoute />}>
            <Route path={ROUTE_PATH.LOGIN} element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path={ROUTE_PATH.MY} element={<MyPage />} />
            <Route
              path={ROUTE_PATH.ORDER}
              element={
                <OrderProvider>
                  <OrderPage />
                </OrderProvider>
              }
            />
          </Route>
          <Route path={ROUTE_PATH.ERROR} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
