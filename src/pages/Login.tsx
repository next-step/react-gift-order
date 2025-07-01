import {
  LoginTitle,
  LoginButton,
  LoginContainer,
  LoginInput,
  LoginPasswordInput,
} from '@/styles/Login.styles';

type LoginProps = {
  onLogin: () => void;
};

function Login({ onLogin }: LoginProps) {
  return (
    <LoginContainer>
      <LoginTitle>KAKAO</LoginTitle>
      <LoginInput placeholder="이메일" />
      <LoginPasswordInput type="password" placeholder="비밀번호" />
      <LoginButton onClick={onLogin}>로그인</LoginButton>
    </LoginContainer>
  );
}

export default Login;
