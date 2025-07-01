import { useLocation, useNavigate } from 'react-router-dom';
import KakaoLogo from '@/assets/kakao-logo.svg';
import * as S from '@/pages/LoginStyle';


export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from ?? '/';



  const handleLogin = () => {

    navigate(from, { replace: true });
  };

  return (
    <S.Wrap>
      <S.Logo src={KakaoLogo} alt="kakao" />
      <S.Input type="text" placeholder="이메일" />
      <S.Input type="password" placeholder="비밀번호" />
      <S.Button onClick={handleLogin}>로그인</S.Button>
    </S.Wrap>
  );
}
