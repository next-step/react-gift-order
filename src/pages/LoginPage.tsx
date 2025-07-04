import { useNavigate, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import LoginButton from "../components/common/BaseButton";
import KakaoLogo from "../components/common/KakaoLogo";
import { useInput } from "../hooks/useInput";
import { useAuth } from "../contexts/AuthContext";

type LocationState = {
  from?: {
    pathname: string;
  };
};

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const from =
    typeof location.state?.from?.pathname === "string"
      ? location.state.from.pathname
      : "/";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      emailError ||
      passwordError ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      return;
    }
    login();
    navigate(from, { replace: true });
  };

  const emailValidation = (value: string) => {
    if (!value.trim()) return "이메일을 입력해주세요.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value))
      return "이메일은 이메일 형식으로 입력해주세요.";
    return "";
  };

  const passwordValidation = (value: string) => {
    if (!value.trim()) return "비밀번호를 입력해주세요.";
    if (value.length < 8) return "비밀번호는 최소 8자 이상이어야 합니다.";
    return "";
  };

  const {
    value: email,
    error: emailError,
    handleChange: handleEmailChange,
    handleBlur: handleEmailBlur,
  } = useInput(emailValidation);

  const {
    value: password,
    error: passwordError,
    handleChange: handlePasswordChange,
    handleBlur: handlePasswordBlur,
  } = useInput(passwordValidation);

  return (
    <Wrapper>
      <Logo>
        <KakaoLogo />
      </Logo>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
        />
        {emailError && <ErrorText>{emailError}</ErrorText>}
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
        />
        {passwordError && <ErrorText>{passwordError}</ErrorText>}
        <LoginButton
          color="yellow"
          type="submit"
          label="로그인"
          size="large"
          disabled={
            !!emailError ||
            !!passwordError ||
            email.trim() === "" ||
            password.trim() === ""
          }
        />
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 400px;
  margin: 80px auto 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: ${({ theme }) => theme.colors.default};
  border-radius: 16px;
`;

const Logo = styled.div`
  margin-bottom: 20px;

  svg {
    width: 100px;
    height: 100px;
    display: flex;
    margin: 0 auto 12px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray600};
  padding: 12px 8px;
  font-size: ${({ theme }) => theme.typography.subtitle1Regular.fontSize};
  outline: none;
  background: transparent;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray600};
  }
`;

const ErrorText = styled.div`
  color: red;
  font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
  margin-top: -10px;
  margin-bottom: 10px;
`;

export default LoginPage;
