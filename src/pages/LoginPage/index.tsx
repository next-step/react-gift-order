import { useNavigate, useLocation } from 'react-router-dom';
import NavigationBar from '@/components/NavigationBar';
import {Container, Logo, Input, LoginButton} from './styles'
import LogoIcon from '@/assets/logo.svg';

interface LocationState {
  from?: string;
}
const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;
  const from = state?.from || '/';

  const handleLogin = () => {
    navigate(from, { replace: true });
  };

  return (
    <>
      <NavigationBar />
      <Container>
        <Logo src={LogoIcon} alt='kakao logo'/>
        <Input type="email" name="email" id="email" autoComplete="email" placeholder="이메일" />
        <Input type="password" name="password" id="password" autoComplete="current-password" placeholder="비밀번호" />
        <LoginButton onClick={handleLogin}>로그인</LoginButton>
      </Container>
    </>
  );
};

export default LoginPage;
