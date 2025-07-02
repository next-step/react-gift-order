import {
  LoginContainer,
  KakaoLogo,
  LoginForm,
  LoginButton,
  InputFieldGroup,
} from "./LoginPage.styles";
import { LOGIN_LABELS } from "./constants/labels";
import Layout from "@/layout";
import { useLocation, useNavigate } from "react-router-dom";
import IDField from "./components/IDField";
import PasswordField from "./components/PasswordField";

function LoginPage() {
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
            <IDField />
            <PasswordField />
          </InputFieldGroup>
          <LoginButton type="submit">{LOGIN_LABELS.LOGIN_BUTTON}</LoginButton>
        </LoginForm>
      </LoginContainer>
    </Layout>
  );
}

export default LoginPage;
