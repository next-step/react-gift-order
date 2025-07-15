import { useContext } from "react";
import { UserInfoContext } from "@/context/UserInfoContext";

export function useUserInfo() {
  const context = useContext(UserInfoContext);
  if (!context) {
    throw new Error("UserInfoProvider 안에서 사용하세요.");
  }
  return context;
}
