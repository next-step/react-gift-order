import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getCookieValue } from "@/utils/cookie";
import { ROUTE_PATH } from "@/components/routes/Routes";

type AuthRouteProps = {
  authRequired: boolean;
};

const AuthRoute = ({ authRequired }: AuthRouteProps) => {
  const location = useLocation();
  const isLoggedIn = !!getCookieValue("userId");

  if (authRequired) {
    if (!isLoggedIn) {
      return <Navigate to={`${ROUTE_PATH.LOGIN}?redirect=${location.pathname}`} replace />;
    }
  } else {
    if (isLoggedIn) {
      return <Navigate to={ROUTE_PATH.PROFILE} replace />;
    }
  }
  return <Outlet />;
};

export default AuthRoute;
