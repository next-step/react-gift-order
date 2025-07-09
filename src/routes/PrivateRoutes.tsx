import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export default function PrivateRoute({ children }: { children: ReactNode }) {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to={`/login?redirect=${location.pathname}`} replace />;
  }

  return <>{children}</>;
}
