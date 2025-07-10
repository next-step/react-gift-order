import * as S from '@/pages/LoginPage/LoginForm.styles';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLoginForm } from './useLoginForm';
import { useAuth } from '@/contexts/AuthContext';

const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const handleLogin = () => {
    // 로그인 정보 저장
    login({
      email,
      pw: password,
    });

    const redirectTo = location.state?.from?.pathname || '/';
    navigate(redirectTo, { replace: true });
  };

  //커스텀훅
  const {
    email,
    password,
    emailError,
    passwordError,
    changeEmail,
    changePassword,
    validateEmail,
    validatePassword,
    isValid,
  } = useLoginForm();

  //인풋관리

  return (
    <S.Form>
      <S.Logo
        src="https://cdn.freelogovectors.net/wp-content/uploads/2020/08/kakao-logo.png"
        alt="Kakao Logo"
      />
      <S.Input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => changeEmail(e.target.value)}
        onBlur={validateEmail}
        hasError={!!emailError}
      />
      {emailError && <S.ErrorMessage>{emailError}</S.ErrorMessage>}
      <S.Input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => changePassword(e.target.value)}
        onBlur={validatePassword}
        hasError={!!passwordError}
      />
      {passwordError && <S.ErrorMessage>{passwordError}</S.ErrorMessage>}
      <S.LoginButton type="button" onClick={handleLogin} disabled={!isValid}>
        로그인
      </S.LoginButton>
    </S.Form>
  );
};

export default LoginForm;
