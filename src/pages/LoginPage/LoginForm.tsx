import * as S from '@/pages/LoginPage/LoginForm.styles';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLoginForm } from './useLoginForm';


const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    const redirectTo = location.state?.from?.pathname || '/';
    navigate(redirectTo, { replace: true });
  };

  //커스텀훅
  const {
    email,
    password,
    emailError,
    passwordError,
    handleEmailChange,
    handlePasswordChange,
    validateEmail,
    validatePassword,
    isValid,
  } = useLoginForm();

  return (
    <S.Form>
      <S.Logo
        src="https://cdn.freelogovectors.net/wp-content/uploads/2020/08/kakao-logo.png"
        alt="Kakao Logo"
      />
      <S.Input type="email" value={email} placeholder="이메일" onChange={(e) => handleEmailChange(e.target.value)}
        onBlur={validateEmail} hasError={!!emailError} />
      {emailError && <S.ErrorMessage>{emailError}</S.ErrorMessage>}
      <S.Input type="password" value={password} placeholder="비밀번호" onChange={(e) => handlePasswordChange(e.target.value)}
        onBlur={validatePassword} hasError={!!passwordError} />
      {passwordError && <S.ErrorMessage>{passwordError}</S.ErrorMessage>}
      <S.LoginButton type="button" onClick={handleLogin} disabled={!isValid} >
        로그인
      </S.LoginButton>
    </S.Form>
  );
};

export default LoginForm;
