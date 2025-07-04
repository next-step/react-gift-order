import { useAuth } from "@/hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export default function AuthGuard({ children }: Props) {
  const { isLoggedIn, isInitialized } = useAuth();
  const location = useLocation();

  if (!isInitialized) return null;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return <>{children}</>;
}
