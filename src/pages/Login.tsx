import useLoginForm from '@/hooks/useLoginForm';
import {
  LoginTitle,
  LoginButton,
  LoginContainer,
  Input,
  ErrorContainer,
  LoginForm,
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
    handleCheckId,
    handleCheckPw,
    handleIdChange,
    handlePwChange,
    handleIdBlur,
    handlePwBlur,
  } = useLoginForm();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!handleCheckId() || !handleCheckPw()) return;
    onLogin();
  }

  return (
    <LoginContainer>
      <LoginTitle>KAKAO</LoginTitle>
      <LoginForm onSubmit={handleSubmit}>
        <Input placeholder="이메일" value={id} onChange={handleIdChange} onBlur={handleIdBlur} />
        {idError && <ErrorContainer>{idError}</ErrorContainer>}
        <Input
          type="password"
          placeholder="비밀번호"
          value={pw}
          onChange={handlePwChange}
          onBlur={handlePwBlur}
        />
        {pwError && <ErrorContainer>{pwError}</ErrorContainer>}
        <LoginButton type="submit" $active={isValid}>
          로그인
        </LoginButton>
      </LoginForm>
    </LoginContainer>
  );
}

export default Login;
