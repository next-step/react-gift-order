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
} from "@/pages/Login/Login.style";

const LoginPage = () => {
  const navigate = useNavigate();

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
          <Input type="email" placeholder="이메일" />
          <Input type="password" placeholder="비밀번호" />
          <LoginButton type="button" onClick={handleLoginClick}>
            로그인
          </LoginButton>
        </Form>
      </Wrapper>
    </>
  );
};

export default LoginPage;
