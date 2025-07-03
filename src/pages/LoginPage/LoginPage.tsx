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
import usePasswordValidation from "./hooks/usePasswordValidation";
import { useEmailValidation } from "./hooks/useEmailValidation";
import useLoginSubmit from "./hooks/useLoginSubmit";

export interface LoginFormProps {
  value: string;
  handleChange: (value: string) => void;
  validator: (value: string) => void;
  errorMessage: string | null;
  hasError: boolean;
}

function LoginPage() {
  const { handleSubmit } = useLoginSubmit();

  const {
    email,
    handleEmailValueChange,
    validateEmail,
    emailErrorMessage,
    hasEmailError,
  } = useEmailValidation();

  const {
    password,
    handlePasswordValueChange,
    validatePassword,
    passwordErrorMessage,
    hasPasswordError,
  } = usePasswordValidation();

  const isValidEmail = !hasEmailError && email.trim() !== "";
  const isValidPassword = !hasPasswordError && password.trim() !== "";

  const isFormValid = isValidEmail && isValidPassword;

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
              errorMessage={emailErrorMessage}
              hasError={hasEmailError}
            />
            <PasswordField
              value={password}
              handleChange={handlePasswordValueChange}
              validator={validatePassword}
              errorMessage={passwordErrorMessage}
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
