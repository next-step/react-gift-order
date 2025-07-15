import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import logo from "@/assets/images/logo.png";
import { useAuthRedirect } from "@/hooks/useAuthRedirect";
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
  const auth = useContext(AuthContext);
  useAuthRedirect();
  const {
    email,
    password,
    emailError,
    passwordError,
    handleEmailInput,
    handleEmailBlur,
    handlePasswordInput,
    handlePasswordBlur,
    isValid,
  } = useLoginFormValidation();

  const handleLoginClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid && auth) {
      auth.login({ email });
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
            onBlur={handleEmailBlur}
          />
          {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
          <Input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => handlePasswordInput(e.target.value)}
            onBlur={handlePasswordBlur}
          />
          {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
          <LoginButton
            type="submit"
            disabled={!isValid}
            isValid={isValid}
            onClick={handleLoginClick}
          >
            로그인
          </LoginButton>
        </Form>
      </Wrapper>
    </>
  );
};

export default LoginPage;
