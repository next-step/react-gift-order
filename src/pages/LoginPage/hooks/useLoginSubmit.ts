import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function useLoginSubmit() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const from = location.state?.from || "/";
      navigate(from, { replace: true });
    },
    [navigate, location]
  );

  return { handleSubmit };
}

export default useLoginSubmit;
