import { useNavigate, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import LoginButton from "../components/common/BaseButton";
import KakaoLogo from "../components/common/KakaoLogo";
import { useEmailInput } from "../hooks/useEmailInput";

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
      <Input type="password" placeholder="비밀번호" />
      <LoginButton
        color="yellow"
        onClick={handleLogin}
        label="로그인"
        size="large"
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
  font-size: 12px;
  margin-top: -10px;
  margin-bottom: 10px;
`;

export default LoginPage;
