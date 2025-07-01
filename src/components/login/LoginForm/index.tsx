import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { buttonStyle } from "./style.ts";
import EmailInput from "./EmailInput/index.tsx";
import PasswordInput from "./PasswordInput/index.tsx";

export default function LoginForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handleLogin = () => {
    navigate(from, { replace: true });
  };

  return (
    <>
      <EmailInput onValidityChange={setIsEmailValid} />
      <PasswordInput onValidityChange={setIsPasswordValid} />
      <button
        onClick={handleLogin}
        css={buttonStyle}
        disabled={!(isEmailValid && isPasswordValid)}
      >
        로그인
      </button>
    </>
  );
}
