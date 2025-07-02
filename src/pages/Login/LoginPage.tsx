import { useNavigate, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import Spacing from "@/components/Spacing";
import { useLoginForm } from "./useLoginForm";
import { css } from "@emotion/react";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string })?.from || "/";

  const {
    email,
    emailError,
    password,
    passwordError,
    changeEmail,
    notFocusEmail,
    changePassword,
    notFocusPassword,
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
            onChange={changeEmail}
            onBlur={notFocusEmail}
            hasError={!!emailError}
          />
          {emailError && <ErrorText>{emailError}</ErrorText>}
          <Spacing />
          <Input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={changePassword}
            onBlur={notFocusPassword}
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

const disabledStyles = ({ theme }: { theme: any }) => css`
  opacity: 0.5;
  cursor: not-allowed;
  background-color: ${theme.colors.kakao.yellow.default};
  &:hover,
  &:active {
    background-color: ${theme.colors.kakao.yellow.default};
  }
`;

const enabledStyles = ({ theme }: { theme: any }) => css`
  opacity: 1;
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.kakao.yellow.hover};
  }
  &:active {
    background-color: ${theme.colors.kakao.yellow.pressed};
  }
`;

const LoginButton = styled.button<{ disabled: boolean }>`
  width: 100%;
  height: 2.75rem;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.kakao.yellow.default};
  color: ${({ theme }) => theme.colors.gray[900]};
  ${({ theme }) => theme.typography.body2Regular};
  transition: background-color 200ms;

  ${({ disabled }) => (disabled ? disabledStyles : enabledStyles)}
`;
