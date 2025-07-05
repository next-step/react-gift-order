import { ROUTE_PATH } from "@/components/routes/Routes";
import { matchPath } from "react-router-dom";

export const checkValidPath = (path: string): boolean => {
  return Object.values(ROUTE_PATH).some((pattern) => {
    const match = matchPath({ path: pattern, end: true }, path);
    return match !== null;
  });
};
