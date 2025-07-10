import { matchPath } from "react-router-dom";

export const ROUTE_PATH = {
  HOME: "/",
  LOGIN: "/login",
  PROFILE: "/my",
  ORDER: "/order",
  ORDER_ID: "/order/:productId",
  NOT_FOUND: "*",
} as const;

const validPaths = Object.values(ROUTE_PATH).filter((path) => path !== ROUTE_PATH.NOT_FOUND);

export const checkValidPath = (path: string): boolean => {
  return validPaths.some((pattern) => {
    const match = matchPath(pattern, path);
    return match !== null;
  });
};
