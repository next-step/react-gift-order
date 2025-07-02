import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header/Header';
import { Alert, Container, InputWrapper, LoginButton, LogoImg, StyledInput } from '@/pages/Login/Login.styles';
import { KAKAO_LOGO_SVG                                                                                                  } from "@/assets/svg/kakaoLogo";
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [id, setId] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [passwd, setPasswd] = useState('');
  const [isValidPass, setIsValidPass] = useState(true);

  const handleEmailCheck = e => {
    const value = e.target.value;
    setId(value);

    const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(value));
  }

  const handlePasswordCheck = e => {
    const value = e.target.value;
    setPasswd(value);

    if (value.length < 8) {
      setIsValidPass(false);
    } else {
      setIsValidPass(true);
    }
  }

  const handleLogin = (e) => {
    e.preventDefault();

    if (!isValidEmail || !isValidPass || id === '' || passwd === '') {
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

        <form onSubmit={handleLogin}>
          <InputWrapper>
            <>
              <StyledInput
                type="email"
                placeholder="이메일"
                value={id}
                onChange={handleEmailCheck}
              />
              {!isValidEmail &&
                (id && <Alert>올바른 이메일 형식이 아닙니다.</Alert>
                  || !id && <Alert>아이디를 입력해주세요.</Alert>)}
            </>

            <>
              <StyledInput
                type="password"
                placeholder="비밀번호"
                value={passwd}
                onChange={handlePasswordCheck}
              />
              {!isValidPass &&
                ((passwd.length > 0 && passwd.length < 8) && <Alert>비밀번호는 최소 8글자 이상이어야 합니다.</Alert>
                  || !passwd && <Alert>비밀번호를 입력해주세요.</Alert>)}
            </>

          </InputWrapper>
          <LoginButton
            type="submit"
            disabled={!isValidEmail || !isValidPass || !id || !passwd}
          >
            로그인
          </LoginButton>
        </form>
      </Container>
    </div>
  );
};

export default Login;
