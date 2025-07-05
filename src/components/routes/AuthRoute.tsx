import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getCookieValue } from "@/utils/cookie";
import { ROUTE_PATH } from "@/components/routes/Routes";
import { AUTH_COOKIE_KEY, useAuth } from "@/contexts/authContext";

type AuthRouteProps = {
  authRequired: boolean;
};

const AuthRoute = ({ authRequired }: AuthRouteProps) => {
  const location = useLocation();
  const { auth, setAuth } = useAuth();

  if (auth.isLoggedIn && auth.userEmail !== getCookieValue(AUTH_COOKIE_KEY)) {
    setAuth({ isLoggedIn: false });
  }

  if (authRequired) {
    if (!auth.isLoggedIn) {
      return <Navigate to={`${ROUTE_PATH.LOGIN}?redirect=${location.pathname}`} replace />;
    }
  } else {
    if (auth.isLoggedIn) {
      return <Navigate to={ROUTE_PATH.PROFILE} replace />;
    }
  }
  return <Outlet />;
};

export default AuthRoute;
