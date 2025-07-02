import { useNavigate, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import LoginButton from "../components/common/BaseButton";
import KakaoLogo from "../components/common/KakaoLogo";
import { useEmailInput } from "../hooks/useEmailInput";
import { usePasswordInput } from "../hooks/usePasswordInput";

type LocationState = {
  from?: {
    pathname: string;
  };
};

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from =
    typeof location.state?.from?.pathname === "string"
      ? location.state.from.pathname
      : "/";

  const handleLogin = () => {
    navigate(from, { replace: true });
  };

  const { email, emailError, handleEmailChange, handleEmailBlur } =
    useEmailInput();

  const {
    password,
    passwordError,
    handleChange: handlePasswordChange,
    handleBlur: handlePasswordBlur,
  } = usePasswordInput();

  return (
    <Wrapper>
      <Logo>
        <KakaoLogo />
      </Logo>
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
        onClick={handleLogin}
        label="로그인"
        size="large"
        disabled={
          !!emailError ||
          !!passwordError ||
          email.trim() === "" ||
          password.trim() === ""
        }
      ></LoginButton>
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
