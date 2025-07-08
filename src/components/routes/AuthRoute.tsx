import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getCookieValue } from "@/utils/cookie";
import { checkValidPath, ROUTE_PATH } from "./routePath";
import { AUTH_COOKIE_KEY, useAuth } from "@/contexts/authContext";

type AuthRouteProps = {
  required?: boolean;
};

const AuthRoute = ({ required = false }: AuthRouteProps) => {
  const location = useLocation();
  const { auth } = useAuth();

  const isLoggedIn = !!auth.userEmail && auth.userEmail === getCookieValue(AUTH_COOKIE_KEY);

  if (required && !isLoggedIn) {
    return <Navigate to={`${ROUTE_PATH.LOGIN}?redirect=${location.pathname}`} replace />;
  }

  if (!required && isLoggedIn) {
    const searchParams = new URLSearchParams(location.search);
    let redirectUrl = searchParams.get("redirect");
    if (!redirectUrl || !checkValidPath(redirectUrl)) {
      redirectUrl = ROUTE_PATH.HOME;
    }
    return <Navigate to={redirectUrl} replace />;
  }
  return <Outlet />;
};

export default AuthRoute;
