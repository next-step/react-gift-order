import { Route, Routes as RouterRoutes } from "react-router-dom";
import Gift from "@/pages/Gift";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import Profile from "@/pages/Profile";
import AuthRoute from "@/components/routes/AuthRoute";

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path={ROUTE_PATH.HOME} element={<Gift />} />
      <Route element={<AuthRoute authRequired={false} />}>
        <Route path={ROUTE_PATH.LOGIN} element={<Login />} />
      </Route>
      <Route element={<AuthRoute authRequired={true} />}>
        <Route path={ROUTE_PATH.PROFILE} element={<Profile />} />
      </Route>
      <Route path={ROUTE_PATH.NOT_FOUND} element={<NotFound />} />
    </RouterRoutes>
  );
};

export const ROUTE_PATH = {
  HOME: "/",
  LOGIN: "/login",
  PROFILE: "/my",
  NOT_FOUND: "*",
} as const;

export default Routes;
