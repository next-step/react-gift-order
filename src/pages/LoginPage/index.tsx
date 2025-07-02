import { useNavigate, useLocation } from 'react-router-dom';
import NavigationBar from '@/components/NavigationBar';
import { Container, Logo, Input, LoginButton, ErrorMessage, InputWrapper } from './styles'
import LogoIcon from '@/assets/logo.svg';
import { useLoginForm } from './useLoginForm';

interface LocationState {
  from?: string;
}
const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;
  const from = state?.from || '/';
  const {
    email,
    pw,
    emailError,
    pwError,
    isValid,
    setEmail,
    setPw,
    handleEmailBlur,
    handlePwBlur,
  } = useLoginForm();

  const handleLogin = () => {
    if (isValid) navigate(from, { replace: true });
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  return (
    <>
      <NavigationBar />
      <Container>
        <Logo src={LogoIcon} alt='kakao logo' />
        <InputWrapper>
          <Input type="email" name="email" id="email" autoComplete="email" placeholder="이메일" value={email} onChange={handleEmailChange} onBlur={handleEmailBlur} />
          {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
        </InputWrapper>
        <InputWrapper>
          <Input type="password" name="password" id="password" autoComplete="current-password" placeholder="비밀번호" value={pw} onChange={handlePwChange} onBlur={handlePwBlur} />
          {pwError && <ErrorMessage>{pwError}</ErrorMessage>}
        </InputWrapper>
        <LoginButton onClick={handleLogin}>로그인</LoginButton>
      </Container>
    </>
  );
};

export default LoginPage;
