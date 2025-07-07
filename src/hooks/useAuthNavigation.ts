import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function useAuthNavigation() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  const goToPathWithAuth = (targetPath: string) => {
    if (isLoggedIn) {
      navigate(targetPath);
    } else {
      navigate("/login", { state: { from: targetPath } });
    }
  };

  return { goToPathWithAuth };
}
