import { ROUTE_PATH } from "@/constants";
import { getUserInfo } from "@/utils";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const userInfo = getUserInfo();

  return userInfo ? <Outlet /> : <Navigate to={ROUTE_PATH.LOGIN} replace />;
};
