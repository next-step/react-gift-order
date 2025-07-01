import { useNavigate, useLocation } from "react-router-dom";
import { buttonStyle } from "./style.ts";
import EmailInput from "./EmailInput/index.tsx";
import PasswordInput from "./PasswordInput/index.tsx";

export default function LoginForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = () => {
    navigate(from, { replace: true });
  };

  return (
    <>
      <EmailInput />
      <PasswordInput />
      <button onClick={handleLogin} css={buttonStyle}>
        로그인
      </button>
    </>
  );
}
