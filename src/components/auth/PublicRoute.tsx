import { ROUTE_PATH } from "@/constants";
import { getUserInfo } from "@/utils";
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute = () => {
  const userInfo = getUserInfo();

  return userInfo ? <Navigate to={ROUTE_PATH.HOME} replace /> : <Outlet />;
};
