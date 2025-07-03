import { useAuth } from "@/contexts/AuthContext";
import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function useLoginSubmit() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const handleSubmit = useCallback(
    (e: React.FormEvent, email: string) => {
      e.preventDefault();
      login(email);
      const from = location.state?.from || "/";
      navigate(from, { replace: true });
    },
    // TODO: eslint 경고 확인
    [navigate, location]
  );

  return { handleSubmit };
}

export default useLoginSubmit;
