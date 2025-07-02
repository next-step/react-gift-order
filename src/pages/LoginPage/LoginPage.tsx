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
  getFormErrorMessage: () => string | null;
  hasError: boolean;
}

function LoginPage() {
  const { handleSubmit } = useLoginSubmit();

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
