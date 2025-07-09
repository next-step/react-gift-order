import useLoginForm from '@/hooks/useLoginForm';
import {
  LoginTitle,
  LoginButton,
  LoginContainer,
  Input,
  ErrorContainer,
  LoginForm,
} from '@/styles/Login.styles';
import { useContext } from 'react';
import { LoginInfoContext } from '@/contexts/LoginInfoContext';

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
    handleIdChange,
    handlePwChange,
    handleIdBlur,
    handlePwBlur,
    isValidForm,
  } = useLoginForm();

  const { setLoginInfo } = useContext(LoginInfoContext);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isValidForm()) return;
    setLoginInfo(id);
    localStorage.setItem('id', id);
    localStorage.setItem('name', id.split('@')[0]);
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
