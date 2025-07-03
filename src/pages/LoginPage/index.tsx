import { useNavigate, useLocation } from 'react-router-dom';
import NavigationBar from '@/components/NavigationBar';
import { Container, Logo, Input, LoginButton, ErrorMessage, InputWrapper } from './styles'
import LogoIcon from '@/assets/logo.svg';
import { useLoginForm } from './useLoginForm';
import { PATH } from '../../constants/paths';

interface LocationState {
  from?: string;
}
const LoginPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation<LocationState>();
  const from = state?.from || PATH.HOME;
  const {
    email,
    pw,
    emailError,
    pwError,
    emailTouched,
    pwTouched,
    isValid,
    handleEmailChange,
    handlePwChange,
  } = useLoginForm();

  const handleLogin = () => {
    if (isValid) navigate(from, { replace: true });
  };
  

  return (
    <>
      <NavigationBar />
      <Container>
        <Logo src={LogoIcon} alt='kakao logo' />
        <InputWrapper>
          <Input type="email" name="email" id="email" autoComplete="email" placeholder="이메일" value={email} onChange={e => handleEmailChange(e.currentTarget.value)} isError={Boolean(emailError)} />
          {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
        </InputWrapper>
        <InputWrapper>
          <Input type="password" name="password" id="password" autoComplete="current-password" placeholder="비밀번호" value={pw} onChange={e => handlePwChange(e.currentTarget.value)} isError={Boolean(pwError)}/>
          {pwError && <ErrorMessage>{pwError}</ErrorMessage>}
        </InputWrapper>
        <LoginButton disabled={!(isValid && emailTouched && pwTouched)} onClick={handleLogin}>로그인</LoginButton>
      </Container>
    </>
  );
};

export default LoginPage;
