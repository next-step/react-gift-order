/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useState } from "react";

type Props = {
  onLoginSuccess: () => void;
};

export const LoginForm = ({ onLoginSuccess }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email: string) => {
    if (!email) return "ID를 입력해주세요.";
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) return "ID는 이메일 형식으로 입력해주세요.";
    return "";
  };

  const validatePassword = (password: string) => {
    if (!password) return "PW를 입력해주세요.";
    if (password.length < 8) return "PW는 최소 8글자 이상이어야 합니다.";
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
      if (emailError) setEmailError("");
    } else if (name === "password") {
      setPassword(value);
      if (passwordError) setPasswordError("");
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") setEmailError(validateEmail(value));
    if (name === "password") setPasswordError(validatePassword(value));
  };

  const handleSubmit = () => {
    const emailErr = validateEmail(email);
    const pwErr = validatePassword(password);
    setEmailError(emailErr);
    setPasswordError(pwErr);

    if (!emailErr && !pwErr) {
      onLoginSuccess(); 
    }
  };

  const disabled = !email || !password || !!emailError || !!passwordError;

  return (
    <FormSection>
      <InputWrapper>
        <Input
          type="text"
          name="email"
          placeholder="이메일"
          value={email}
          onChange={handleChange}
          onBlur={handleBlur}
          isError={!!emailError}
        />
        {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
      </InputWrapper>

      <InputWrapper>
        <Input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={password}
          onChange={handleChange}
          onBlur={handleBlur}
          isError={!!passwordError}
        />
        {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
      </InputWrapper>

      <LoginButton onClick={handleSubmit} disabled={disabled}>
        로그인
      </LoginButton>
    </FormSection>
  );
};


const FormSection = styled.section`
  width: 100%;
  max-width: 28rem;
  padding: ${({ theme }) => theme.spacing.spacing4};
`;

const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
`;

type InputProps = {
  isError?: boolean;
};

const Input = styled.input<InputProps>`
  width: 100%;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.textDefault};
  transition: border-color 200ms;
  border: none;
  border-bottom: 1px solid
    ${({ theme, isError }) =>
      isError ? theme.colors.red700 : theme.colors.borderDefault};
  min-height: 3rem;
  ${({ theme }) => theme.typography.body1Regular};
  padding: ${({ theme }) => `${theme.spacing.spacing2} 0`};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textPlaceholder};
  }
`;

const ErrorMessage = styled.p`
  ${({ theme }) => theme.typography.body1Regular};
  color: ${({ theme }) => theme.colors.red700};
  margin-top: ${({ theme }) => theme.spacing.spacing1};
`;

const LoginButton = styled.button<{ disabled: boolean }>`
  width: 100%;
  height: 50px;
  margin-top: ${({ theme }) => theme.spacing.spacing4};
  ${({ theme }) => theme.typography.subtitle2Regular};

  color: ${({ theme }) => theme.colors.textDefault};
  background-color: ${({ theme }) => theme.colors.kakaoYellow};
  border: none;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: background-color 200ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.kakaoYellowHover};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.kakaoYellowActive};
  }
`;
