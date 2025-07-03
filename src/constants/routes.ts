import { deepFreeze } from "@/utils/deepFreeze";

export const ROUTES = deepFreeze({
  HOME: "/",
  LOGIN: "/login",
  MY: "/my",
  NOT_FOUND: "*",
} as const);
