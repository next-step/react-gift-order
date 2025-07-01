import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header/Header';
import { Container, InputWrapper, LoginButton, LogoImg, StyledInput } from '@/pages/Login/Login.styles';
import { KAKAO_LOGO_SVG                                                                                                  } from "@/assets/svg/kakaoLogo";
import { useState } from 'react';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [id, setId] = useState('');
  const [passwd, setPasswd] = useState('');

  const handleLogin = () => {
    if (!id) {
      toast.error("아이디를 입력해주세요.");
      return;
    }

    if (!passwd) {
      toast.error("비밀번호를 입력해주세요.");
      return;
    }

    const fallback = location.state?.from || '/';
    navigate(fallback);
  }

  return (
    <div>
      <Header />
      <Container>
        <LogoImg
          src={KAKAO_LOGO_SVG}
          alt="kakao-logo"
        />
        <InputWrapper>
          <StyledInput type="text" placeholder="이메일" onChange={(e)=>setId(e.target.value)}/>
          <StyledInput type="password" placeholder="비밀번호" onChange={(e)=>setPasswd(e.target.value)}/>
        </InputWrapper>
        <LoginButton onClick={handleLogin}>로그인</LoginButton>
      </Container>
    </div>
  );
};

export default Login;
