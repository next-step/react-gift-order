import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import * as S from './styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const validateEmail = (email:string) => {
    if (!email) {
      return 'ID를 입력해주세요.';
    }
    const emailPattern = /^.+@.+\..+$/;
    if (!emailPattern.test(email)) {
      return 'ID는 이메일 형식으로 입력해주세요.';
    }
    return '';
  };

  const validatePassword = (password: string) => {
    if (!password) {
      return 'PW를 입력해주세요.';
    }
    
    if (password.length < 8) {
      return 'PW는 최소 8글자 이상이어야 합니다.';
    }
    
    return '';
  };

  // 로그인 버튼 활성화 여부 판단 
  const isFormValid = !validateEmail(email) && !validatePassword(password);

  const handleEmailBlur = () => {
    const error = validateEmail(email);
    setEmailError(error);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setEmail(email);
    //에러 상태에서 입력값을 변경해서 정상이되면 에러 메세지 없애기
    const error = validateEmail(email);
    setEmailError(error);
  };

  const handlePasswordBlur = () => {
    const error = validatePassword(password);
    setPasswordError(error);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setPassword(password);
    const error = validatePassword(password);
    setPasswordError(error);
  };

  const handleLogin = () => {
    const from = location.state?.from || '/';
    navigate(from, { replace: true });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      handleLogin();
    }
  };

  return (
    <S.Main>
      <S.Logo 
        src="/logo.png" 
        alt="카카오 공식 로고" 
      />
      
      <S.LoginSection>
        <form onSubmit={handleSubmit}>
          <S.InputContainer>
            <S.Input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              hasError={!!emailError}
            />
            {emailError && <S.ErrorMessage>{emailError}</S.ErrorMessage>}
          </S.InputContainer>
          
          <S.Spacer />
          
          <S.InputContainer>
            <S.Input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={handlePasswordChange}
              onBlur={handlePasswordBlur}
              hasError={!!passwordError}
            />
            {passwordError && <S.ErrorMessage>{passwordError}</S.ErrorMessage>}
          </S.InputContainer>
          
          <S.Spacer />
          
          <S.LoginButton type="submit" disabled={!isFormValid}>
            로그인
          </S.LoginButton>
        </form>
      </S.LoginSection>
    </S.Main>
  );
};

export default Login; 