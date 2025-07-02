import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import LoginInput from "./LoginInput";

type Props = {
  onLogin: () => void;
};

const validateEmail = (email: string) => {
  if (!email) return "아이디를 입력해주세요.";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "아이디는 이메일 형식으로 입력해주세요.";
  return "";
};

const validatePassword = (password: string) => {
  if (!password) return "비밀번호를 입력해주세요.";
  if (password.length < 8) return "비밀번호는 최소 8글자 이상이어야 합니다.";
  return "";
};

export default function LoginFormSection({ onLogin }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleEmailBlur = () => {
    setEmailError(validateEmail(email));
  };

  const handlePasswordBlur = () => {
    setPasswordError(validatePassword(password));
  };

  useEffect(() => {
    const emailValid = validateEmail(email) === "";
    const passwordValid = validatePassword(password) === "";

    setIsButtonEnabled(emailValid && passwordValid);
  }, [email, password]);

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
