import { Route, Routes as RouterRoutes } from "react-router-dom";
import Gift from "@/pages/Gift/Page";
import Login from "@/pages/Login/Page";
import NotFound from "@/pages/NotFound/Page";
import Profile from "@/pages/Profile/Page";
import AuthRoute from "@/components/routes/AuthRoute";
import Order from "@/pages/Order/Page";
import { ROUTE_PATH } from "./routePath";

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path={ROUTE_PATH.HOME} element={<Gift />} />
      <Route element={<AuthRoute />}>
        <Route path={ROUTE_PATH.LOGIN} element={<Login />} />
      </Route>
      <Route element={<AuthRoute required />}>
        <Route path={ROUTE_PATH.PROFILE} element={<Profile />} />
        <Route path={ROUTE_PATH.ORDER_ID} element={<Order />} />
      </Route>
      <Route path={ROUTE_PATH.NOT_FOUND} element={<NotFound />} />
    </RouterRoutes>
  );
};

export default Routes;
