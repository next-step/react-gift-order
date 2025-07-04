import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export default function LogoutPage() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <div>
      <h3>회원님의 아이디는 {user} 입니다</h3>
      <h2>정말 로그아웃하시겠어요?</h2>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
}
