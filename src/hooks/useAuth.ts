import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth 훅은 AuthProvider 내부에서 사용되어야 합니다.");
  }
  return context;
};
