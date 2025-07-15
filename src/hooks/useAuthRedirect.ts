import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "@/context/AuthContext";
import { RouterPath } from "@/routes/path";

export function useAuthRedirect(defaultRedirect: string = RouterPath.MYPAGE) {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (auth?.user) {
      const redirectTo: string = location.state?.from || defaultRedirect;
      navigate(redirectTo, { replace: true });
    }
  }, [auth?.user, navigate, location.state, defaultRedirect]);
}
