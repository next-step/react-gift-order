import * as S from '@/pages/LoginPage/LoginForm.styles';

const LoginForm = () => {
  return (
    <S.Form>
      <S.Logo
        src="https://cdn.freelogovectors.net/wp-content/uploads/2020/08/kakao-logo.png"
        alt="Kakao Logo"
      />
      <S.Input type="email" placeholder="이메일" />
      <S.Input type="password" placeholder="비밀번호" /> <S.LoginButton>로그인</S.LoginButton>
    </S.Form>
  );
};

export default LoginForm;
