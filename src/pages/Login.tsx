import { useLocation, useNavigate } from 'react-router-dom';
import KakaoLogo from '@/assets/kakao-logo.svg';
import * as S from '@/pages/LoginStyle';
import { useValidation } from '@/hooks/useValidation';
import { useAuth } from '@/contexts/AuthContext';


export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const from = location.state?.from ?? '/';


  const email = useValidation<string>('', v => {
    if (!v) return '이메일을 입력해주세요.';
    return /\S+@\S+\.\S+/.test(v)
      ? null
      : '이메일 형식이 아닙니다.';
  });

  const password = useValidation<string>('', v => {
    if (!v) return '비밀번호를 입력해주세요.';
    return v.length >= 8
      ? null
      : '비밀번호는 최소 8자 이상입니다.';
  });


  const canSubmit = email.isValid && password.isValid;



  const handleLogin = async () => {
    const success = await login(email.value, password.value);
    if (success) {
      navigate(from, { replace: true });
    }
  };

  return (
    <S.Wrap>
      <S.Logo src={KakaoLogo} alt="kakao" />

      <S.Input
        type="text"
        placeholder="이메일"
        value={email.value}
        onChange={email.onChange}
        onBlur={email.onBlur}
        hasError={!!email.error}
      />
      <S.ErrorMsg>{email.error}</S.ErrorMsg>
      <S.Input
        type="password"
        placeholder="비밀번호"
        value={password.value}
        onChange={password.onChange}
        onBlur={password.onBlur}
        hasError={!!password.error}
      />
      <S.ErrorMsg>{password.error}</S.ErrorMsg>
      <S.Button
        disabled={!canSubmit}
        onClick={handleLogin}
      >
        로그인
      </S.Button>
    </S.Wrap>
  );
}
