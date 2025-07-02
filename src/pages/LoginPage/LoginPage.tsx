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
import usePasswordValidation from "./hooks/usePasswordValidation";
import { useEmailValidation } from "./hooks/useEmailValidation";

export interface LoginFormProps {
  value: string;
  handleChange: (value: string) => void;
  validator: (value: string) => void;
  getFormErrorMessage: () => string | null;
  hasError: boolean;
}

function LoginPage() {
  const {
    email,
    handleEmailValueChange,
    validateEmail,
    getEmailErrorMessage,
    hasEmailError,
  } = useEmailValidation();

  const {
    password,
    handlePasswordValueChange,
    validatePassword,
    getPasswordErrorMessage,
    hasPasswordError,
  } = usePasswordValidation();

  const isFormValid =
    !hasEmailError &&
    !hasPasswordError &&
    email.trim() !== "" &&
    password.trim() !== "";

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
            <IDField
              value={email}
              handleChange={handleEmailValueChange}
              validator={validateEmail}
              getFormErrorMessage={getEmailErrorMessage}
              hasError={hasEmailError}
            />
            <PasswordField
              value={password}
              handleChange={handlePasswordValueChange}
              validator={validatePassword}
              getFormErrorMessage={getPasswordErrorMessage}
              hasError={hasPasswordError}
            />
          </InputFieldGroup>
          <LoginButton type="submit" disabled={!isFormValid}>
            {LOGIN_LABELS.LOGIN_BUTTON}
          </LoginButton>
        </LoginForm>
      </LoginContainer>
    </Layout>
  );
}

export default LoginPage;
