import useLoginForm from '@/hooks/useLoginForm';
import {
  LoginTitle,
  LoginButton,
  LoginContainer,
  LoginInput,
  LoginPasswordInput,
  LoginForm,
  IDErrorContainer,
  PWErrorContainer,
} from '@/styles/Login.styles';

type LoginProps = {
  onLogin: () => void;
};

function Login({ onLogin }: LoginProps) {
  const {
    id,
    pw,
    idError,
    pwError,
    isValid,
    checkId,
    checkPw,
    handleIdChange,
    handlePwChange,
    handleIdBlur,
    handlePwBlur,
  } = useLoginForm();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!checkId(id) || !checkPw(pw)) return;
    onLogin();
  }

  return (
    <LoginContainer>
      <LoginTitle>KAKAO</LoginTitle>
      <LoginForm onSubmit={handleSubmit}>
        <LoginInput
          placeholder="이메일"
          value={id}
          onChange={handleIdChange}
          onBlur={handleIdBlur}
        />
        {idError && <IDErrorContainer>{idError}</IDErrorContainer>}
        <LoginPasswordInput
          type="password"
          placeholder="비밀번호"
          value={pw}
          onChange={handlePwChange}
          onBlur={handlePwBlur}
        />
        {pwError && <PWErrorContainer>{pwError}</PWErrorContainer>}
        <LoginButton type="submit" $active={isValid}>
          로그인
        </LoginButton>
      </LoginForm>
    </LoginContainer>
  );
}

export default Login;
