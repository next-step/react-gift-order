import { useState } from "react";
import {
  LoginContainer,
  KakaoLogo,
  LoginForm,
  InputField,
  LoginButton,
  InputFieldGroup,
} from "./LoginPage.styles";
import { LOGIN_LABELS } from "./constants/labels";
import Layout from "@/layout";
import { useLocation, useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const handleEmailChange = (email: string) => {
    setEmail(email);
  };

  const isValidEmail = (email: string) => {
    setEmail(email);
    return /^[\w.-]+@[\w-]+\.\w+$/.test(email);
  };

  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const from = location.state?.from || "/";
    navigate(from, { replace: true });
  };

  return (
    <Layout>
      <LoginContainer>
        <KakaoLogo>kakao</KakaoLogo>
        <LoginForm onSubmit={handleSubmit}>
          <InputFieldGroup>
            <InputField
              type="email"
              placeholder={LOGIN_LABELS.EMAIL_PLACEHOLDER}
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
              required
            />
            <InputField
              type="password"
              placeholder={LOGIN_LABELS.PASSWORD_PLACEHOLDER}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputFieldGroup>
          <LoginButton type="submit">{LOGIN_LABELS.LOGIN_BUTTON}</LoginButton>
        </LoginForm>
      </LoginContainer>
    </Layout>
  );
}

export default LoginPage;
