import { ROUTE_PATH } from "@/routes/paths";
import styled from "@emotion/styled";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import ErrorMessage from "./ErrorMessage";

const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const checkEmailError = (newEmail: string): string => {
    if (!newEmail.trim()) {
      return "ID를 입력해주세요.";
    } else if (!validateEmail(newEmail)) {
      return "올바른 이메일 형식이 아닙니다.";
    }
    return "";
  };
  const checkPasswordError = (newPassword: string): string => {
    if (!newPassword.trim()) {
      return "비밀번호를 입력해주세요.";
    } else if (newPassword.length < 8) {
      return "비밀번호는 8자 이상이어야 합니다.";
    }
    return "";
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (!checkEmailError(newEmail)) {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (!checkPasswordError(newPassword)) {
      setPasswordError("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(location.state?.from || ROUTE_PATH.HOME);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        error={!!emailError}
        type="text"
        value={email}
        placeholder="이메일"
        onChange={handleEmailChange}
        onBlur={() => setEmailError(checkEmailError(email))}
      />
      {emailError && <ErrorMessage message={emailError} />}
      <Input
        error={!!passwordError}
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={handlePasswordChange}
        onBlur={() => setPasswordError(checkPasswordError(password))}
      />
      {passwordError && <ErrorMessage message={passwordError} />}
      <Button
        type="submit"
        disabled={!email || !password || !!emailError || !!passwordError}
      >
        로그인
      </Button>
    </Form>
  );
};

export default LoginForm;

const Form = styled.form`
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.spacing4};
`;

const Input = styled.input<{ error: boolean }>`
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.semantic.text.default};
  margin: ${({ theme }) => `${theme.spacing.spacing4} 0 0`};
  padding: ${({ theme }) => theme.spacing.spacing2};
  border-bottom: 1px solid
    ${({ theme, error }) =>
      error ? theme.colors.red.red700 : theme.colors.gray.gray400};
  font-size: ${({ theme }) => theme.typography.body1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.body1Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.body1Regular.lineHeight};

  &::placeholder {
    color: ${({ theme }) => theme.colors.semantic.text.placeholder};
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.semantic.text.default};
  font-size: ${({ theme }) => theme.typography.label1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label1Regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.label1Regular.lineHeight};
  margin-top: ${({ theme }) => theme.spacing.spacing12};
  background-color: ${({ theme }) => theme.colors.semantic.kakaoYellow};
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
