import { useState } from 'react';
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
  const [id, setId] = useState<string>('');
  const [pw, setPw] = useState<string>('');
  const [idError, setIdError] = useState<string>('');
  const [pwError, setPwError] = useState<string>('');
  function isEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function checkId(id: string): boolean {
    if (!id) {
      setIdError('ID를 입력해주세요');
      return false;
    } else if (!isEmail(id)) {
      setIdError('ID는 이메일 형식으로 입력해주세요.');
      return false;
    }
    setIdError('');
    return true;
  }
  function checkPw(pw: string): boolean {
    if (!pw) {
      setPwError('PW를 입력해주세요.');
      return false;
    } else if (pw.length < 8) {
      setPwError('PW는 최소 8글자 이상이어야 합니다.');
      return false;
    }
    setPwError('');
    return true;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!checkId(id)) {
      return;
    }
    if (!checkPw(pw)) {
      return;
    }

    onLogin();
  }
  return (
    <LoginContainer>
      <LoginTitle>KAKAO</LoginTitle>
      <LoginForm onSubmit={handleSubmit}>
        <LoginInput
          placeholder="이메일"
          value={id}
          onChange={(e) => setId(e.target.value)}
          onBlur={(e) => {
            checkId(e.target.value);
          }}
        />
        {idError === '' ? <></> : <IDErrorContainer>{idError}</IDErrorContainer>}
        <LoginPasswordInput
          type="password"
          placeholder="비밀번호"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          onBlur={(e) => {
            checkPw(e.target.value);
          }}
        />
        {pwError === '' ? <></> : <PWErrorContainer>{pwError}</PWErrorContainer>}
        <LoginButton type="submit" active={idError == '' && pwError === ''}>
          로그인
        </LoginButton>
      </LoginForm>
    </LoginContainer>
  );
}

export default Login;
