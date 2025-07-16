import * as S from '@/pages/LoginPage/LoginForm.styles';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLoginForm } from './useLoginForm';
import { useAuth } from '@/contexts/AuthContext';

const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const {
    email: { value: email, change: changeEmail, error: emailError, validate: validateEmail },
    password: {
      value: password,
      change: changePassword,
      error: passwordError,
      validate: validatePassword,
    },
    isValid,
  } = useLoginForm();

  const handleLogin = () => {
    login({
      email,
      pw: password,
    });

    const redirectTo = location.state?.from?.pathname || '/';
    navigate(redirectTo, { replace: true });
  };

  return (
    <S.Form>
      <S.Logo
        src="https://cdn.freelogovectors.net/wp-content/uploads/2020/08/kakao-logo.png"
        alt="Kakao Logo"
      />
      <S.Input
        type="email"
        placeholder="이메일"
        value={email ?? ''}
        onChange={(e) => changeEmail(e.target.value)}
        onBlur={validateEmail}
        hasError={!!emailError}
      />
      {emailError && <S.ErrorMessage>{emailError}</S.ErrorMessage>}

      <S.Input
        type="password"
        placeholder="비밀번호"
        value={password ?? ''}
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
