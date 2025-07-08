import { ROUTES } from "@/constants/routes";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

function useLoginSubmit() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent, email: string) => {
    e.preventDefault();
    login(email);

    const redirectPath = searchParams.get("redirect");
    const from = redirectPath || location.state?.from || ROUTES.HOME;

    navigate(from, { replace: true });
  };

  return { handleSubmit };
}

export default useLoginSubmit;
