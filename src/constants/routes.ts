import { deepFreeze } from "@/utils/deepFreeze";

export const ROUTES = deepFreeze({
  HOME: "/",
  LOGIN: "/login",
  MY: "/my",
  ORDER: "/order/:id",
  NOT_FOUND: "*",
} as const);
