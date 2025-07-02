import { useLoginForm } from '../../hooks/useLoginForm';
import * as S from './styles';

const Login = () => {
  const { email, password, isFormValid, handleSubmit } = useLoginForm();

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
              value={email.value}
              onChange={email.onChange}
              onBlur={email.onBlur}
              hasError={email.hasError}
            />
            {email.error && <S.ErrorMessage>{email.error}</S.ErrorMessage>}
          </S.InputContainer>
          
          <S.Spacer />
          
          <S.InputContainer>
            <S.Input
              type="password"
              placeholder="비밀번호"
              value={password.value}
              onChange={password.onChange}
              onBlur={password.onBlur}
              hasError={password.hasError}
            />
            {password.error && <S.ErrorMessage>{password.error}</S.ErrorMessage>}
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