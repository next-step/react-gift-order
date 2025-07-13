import {
  LoginContainer,
  KakaoLogo,
  LoginForm,
  LoginButton,
  InputFieldGroup,
} from "./LoginPage.styles";
import { LOGIN_LABELS } from "./constants/labels";
import Layout from "@/layout";
import IDField from "./components/IDField";
import PasswordField from "./components/PasswordField";
import { useEmailValidation } from "./hooks/useEmailValidation";
import usePasswordValidation from "./hooks/usePasswordValidation";
import useLoginSubmit from "./hooks/useLoginSubmit";

export interface LoginFormProps {
  value: string;
  handleChange: (value: string) => void;
  validator: (value: string) => void;
  errorMessage: string;
}

function LoginPage() {
  const { handleSubmit } = useLoginSubmit();

  const { email, handleEmailValueChange, validateEmail, emailErrorMessage } =
    useEmailValidation();

  const {
    password,
    handlePasswordValueChange,
    validatePassword,
    passwordErrorMessage,
  } = usePasswordValidation();

  const isValidEmail = !emailErrorMessage && email.trim() !== "";
  const isValidPassword = !passwordErrorMessage && password.trim() !== "";

  const isFormValid = isValidEmail && isValidPassword;

  return (
    <Layout>
      <LoginContainer>
        <KakaoLogo>kakao</KakaoLogo>
        <LoginForm onSubmit={(e) => handleSubmit(e, email)}>
          <InputFieldGroup>
            <IDField
              value={email}
              handleChange={handleEmailValueChange}
              validator={validateEmail}
              errorMessage={emailErrorMessage}
            />
            <PasswordField
              value={password}
              handleChange={handlePasswordValueChange}
              validator={validatePassword}
              errorMessage={passwordErrorMessage}
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
