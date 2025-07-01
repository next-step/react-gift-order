import * as S from '@/pages/LoginPage/LoginForm.styles';
import { useNavigate, useLocation } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    const redirectTo = location.state?.from?.pathname || '/';
    navigate(redirectTo, { replace: true });
  };
  return (
    <S.Form>
      <S.Logo
        src="https://cdn.freelogovectors.net/wp-content/uploads/2020/08/kakao-logo.png"
        alt="Kakao Logo"
      />
      <S.Input type="email" placeholder="이메일" />
      <S.Input type="password" placeholder="비밀번호" />
      <S.LoginButton type="button" onClick={handleLogin}>
        로그인
      </S.LoginButton>
    </S.Form>
  );
};

export default LoginForm;
