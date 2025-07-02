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
import styled from "@emotion/styled";

const ErrorMessage = styled.p`
  font-size: ${({ theme }) => theme.typography.label.label2Regular.fontSize};
  font-weight: ${({ theme }) =>
    theme.typography.label.label2Regular.fontWeight};
  color: ${({ theme }) => theme.colors.red[700]};
`;

function LoginPage() {
  const [email, setEmail] = useState("");
  const [hasEmailBlurred, setHasEmailBlurred] = useState(false);
  const [emailErrors, setEmailErrors] = useState({
    isEmpty: false,
    invalidFormat: false,
  });

  const validateEmailFormat = (email: string) => {
    return /^[\w.-]+@[\w-]+\.\w+$/.test(email);
  };

  const hasEmailValue = (email: string) => {
    return email.length > 0;
  };

  const validateEmailErrors = (email: string) => {
    const hasValue = hasEmailValue(email);
    const isFormatValid = validateEmailFormat(email);

    setEmailErrors({
      isEmpty: !hasValue,
      invalidFormat: hasValue && !isFormatValid,
    });
  };

  const handleEmailChange = (email: string) => {
    setEmail(email);

    if (hasEmailBlurred) {
      validateEmailErrors(email);
    }
  };

  const handleEmailBlur = () => {
    setHasEmailBlurred(true);
    validateEmailErrors(email);
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
              onBlur={handleEmailBlur}
              required
              isError={emailErrors.isEmpty || emailErrors.invalidFormat}
            />
            {emailErrors.isEmpty ? (
              <ErrorMessage>ID를 입력해주세요.</ErrorMessage>
            ) : emailErrors.invalidFormat ? (
              <ErrorMessage>ID는 이메일 형식으로 입력해주세요.</ErrorMessage>
            ) : null}
            <InputField
              type="password"
              placeholder={LOGIN_LABELS.PASSWORD_PLACEHOLDER}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              isError={false}
            />
          </InputFieldGroup>
          <LoginButton type="submit">{LOGIN_LABELS.LOGIN_BUTTON}</LoginButton>
        </LoginForm>
      </LoginContainer>
    </Layout>
  );
}

export default LoginPage;
