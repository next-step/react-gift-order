import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header/Header';
import { Alert, Container, InputWrapper, LoginButton, LogoImg, StyledInput } from '@/pages/Login/Login.styles';
import { KAKAO_LOGO_SVG } from "@/assets/svg/kakaoLogo";
import { useLoginForm } from '@/hooks/useLoginForm.ts';
import { PASSWORD_LENGTH } from '@/constants/password.ts';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    id,
    password,
    isValidEmail,
    isValidPassword,
    handleEmailCheck,
    handlePasswordCheck,
    isFormValid,
  } = useLoginForm();

  const handleLogin = (e) => {
    e.preventDefault();

    if (isFormValid) {
      return;
    }

    const splitedId = id.split("@")[0];

    sessionStorage.setItem('splitedId', splitedId);
    sessionStorage.setItem('email', id);

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
                (id ? (
                  <Alert>올바른 이메일 형식이 아닙니다.</Alert>
                ) : (
                  <Alert>아이디를 입력해주세요.</Alert>
                ))}
            </>

            <>
              <StyledInput
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={handlePasswordCheck}
              />
              {!isValidPassword &&
                (password
                    ? (password.length < PASSWORD_LENGTH && <Alert>비밀번호는 최소 8글자 이상이어야 합니다.</Alert>)
                    : <Alert>비밀번호를 입력해주세요.</Alert>
                )}
            </>

          </InputWrapper>
          <LoginButton
            type="submit"
            disabled={isFormValid}
          >
            로그인
          </LoginButton>
        </form>
      </Container>
    </div>
  );
};

export default Login;
