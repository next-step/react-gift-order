import { useNavigate } from "react-router-dom";
import { RouterPath } from "@/routes/path";
import logo from "@/assets/images/logo.png";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import {
  Wrapper,
  Form,
  LogoImg,
  Input,
  LoginButton,
  ErrorMessage,
} from "@/pages/Login/Login.style";
import { useLoginFormValidation } from "@/hooks/useLoginFormValidation";

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    email,
    password,
    emailError,
    passwordError,
    handleEmailInput,
    handlePasswordInput,
  } = useLoginFormValidation();

  const handleLoginClick = () => {
    const hasPrev = window.history.length;
    if (hasPrev > 1) {
      navigate(-1);
    } else {
      navigate(RouterPath.HOME);
    }
  };

  return (
    <>
      <NavigationBar />
      <Wrapper>
        <Form>
          <LogoImg src={logo} alt="logo" />
          <Input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => handleEmailInput(e.target.value)}
          />
          {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
          <Input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => handlePasswordInput(e.target.value)}
          />
          {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
          <LoginButton type="button" onClick={handleLoginClick}>
            로그인
          </LoginButton>
        </Form>
      </Wrapper>
    </>
  );
};

export default LoginPage;
