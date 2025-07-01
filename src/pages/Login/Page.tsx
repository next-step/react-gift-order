import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import * as S from './styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    const from = location.state?.from || '/';
    navigate(from, { replace: true });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin();
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
              onChange={(e) => setEmail(e.target.value)}
            />
          </S.InputContainer>
          
          <S.Spacer />
          
          <S.InputContainer>
            <S.Input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </S.InputContainer>
          
          <S.Spacer />
          
          <S.LoginButton type="submit">
            로그인
          </S.LoginButton>
        </form>
      </S.LoginSection>
    </S.Main>
  );
};

export default Login; 