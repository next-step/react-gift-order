import { useNavigate, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import Spacing from "@/components/Spacing";
import { useLoginForm } from "./useLoginForm";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string })?.from || "/";

  const {
    email,
    emailError,
    password,
    passwordError,
    handleEmailChange,
    handleEmailBlur,
    handlePasswordChange,
    handlePasswordBlur,
    isFormValid,
  } = useLoginForm();

  const goToLogin = () => {
    if (!isFormValid) return;
    navigate(from, { replace: true });
  };

  return (
    <Wrapper>
      <Form>
        <Logo src="/loginlogo.svg" alt="kakao logo" />
        <FormBox>
          <Input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            hasError={!!emailError}
          />
          {emailError && <ErrorText>{emailError}</ErrorText>}
          <Spacing />
          <Input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
            hasError={!!passwordError}
          />
          {passwordError && <ErrorText>{passwordError}</ErrorText>}
          <Spacing height="48px" />
          <LoginButton onClick={goToLogin} disabled={!isFormValid}>
            로그인
          </LoginButton>
        </FormBox>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
  min-height: calc(100vh - 56px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
`;

const Form = styled.div`
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 5.5rem;
  margin-bottom: 2rem;
`;

const FormBox = styled.div`
  width: 100%;
`;

const Input = styled.input<{ hasError?: boolean }>`
  width: 100%;
  border: none;
  border-bottom: 1px solid
    ${({ hasError, theme }) =>
      hasError ? theme.colors.state.critical : theme.colors.gray[400]};
  padding: 8px 0;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  ${({ theme }) => theme.typography.body1Regular};
  &:focus {
    outline: none;
    border-color: black;
  }
`;

const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.state.critical};
  ${({ theme }) => theme.typography.label2Regular};
`;

const LoginButton = styled.button<{ disabled: boolean }>`
  width: 100%;
  height: 2.75rem;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.kakao.yellow.default};
  color: ${({ theme }) => theme.colors.gray[900]};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  ${({ theme }) => theme.typography.body2Regular};
  transition: background-color 200ms;

  &:hover {
    background-color: ${({ theme, disabled }) =>
      disabled
        ? theme.colors.kakao.yellow.default
        : theme.colors.kakao.yellow.hover};
  }

  &:active {
    background-color: ${({ theme, disabled }) =>
      disabled
        ? theme.colors.kakao.yellow.default
        : theme.colors.kakao.yellow.pressed};
  }
`;
