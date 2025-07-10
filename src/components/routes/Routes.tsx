import { Route, Routes as RouterRoutes } from "react-router-dom";
import GiftPage from "@/pages/Gift/GiftPage";
import LoginPage from "@/pages/Login/LoginPage";
import NotFoundPage from "@/pages/NotFound/NotFoundPage";
import ProfilePage from "@/pages/Profile/ProfilePage";
import AuthRoute from "@/components/routes/AuthRoute";
import OrderPage from "@/pages/Order/OrderPage";
import { ROUTE_PATH } from "@/components/routes/routePath";

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path={ROUTE_PATH.HOME} element={<GiftPage />} />
      <Route element={<AuthRoute />}>
        <Route path={ROUTE_PATH.LOGIN} element={<LoginPage />} />
      </Route>
      <Route element={<AuthRoute required />}>
        <Route path={ROUTE_PATH.PROFILE} element={<ProfilePage />} />
        <Route path={ROUTE_PATH.ORDER_ID} element={<OrderPage />} />
      </Route>
      <Route path={ROUTE_PATH.NOT_FOUND} element={<NotFoundPage />} />
    </RouterRoutes>
  );
};

export default Routes;
