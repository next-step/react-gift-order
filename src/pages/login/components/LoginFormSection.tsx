import styled from "@emotion/styled";
import LoginInput from "@/pages/login/components/LoginInput";
import { useLoginForm } from "@/hooks/useLoginForm";

type Props = {
  onLogin: () => void;
};

export default function LoginFormSection({ onLogin }: Props) {
  const {
    email,
    password,
    emailError,
    passwordError,
    isButtonEnabled,
    setEmail,
    setPassword,
    handleEmailBlur,
    handlePasswordBlur,
  } = useLoginForm();

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <LoginInput
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={handleEmailBlur}
        error={emailError}
      />
      <LoginInput
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onBlur={handlePasswordBlur}
        error={passwordError}
      />
      <LoginButton onClick={onLogin} disabled={!isButtonEnabled}>
        로그인
      </LoginButton>
    </Form>
  );
}

const Form = styled.form`
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const LoginButton = styled.button<{ disabled: boolean }>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.brand.kakao.yellow};
  color: ${({ theme }) => theme.colors.brand.kakao.brown};
  border: none;
  border-radius: 8px;
  padding: 12px 0;
  font-weight: 700;
  font-size: 0.875rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  &:hover {
    background-color: ${({ theme, disabled }) =>
      disabled
        ? theme.colors.brand.kakao.yellow
        : theme.colors.brand.kakao.yellowHover};
  }

  &:active {
    background-color: ${({ theme, disabled }) =>
      disabled
        ? theme.colors.brand.kakao.yellow
        : theme.colors.brand.kakao.yellowActive};
  }
`;
