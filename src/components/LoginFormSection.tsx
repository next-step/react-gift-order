import styled from '@emotion/styled';
import KakaoLogo from '@/assets/kakao.webp';
import { useNavigate, useLocation } from 'react-router-dom';
import { LOCATION_STATE_KEYS } from '@/constants/navigationState';
import { ROUTES } from '@/constants/routes';
import useLoginForm from '@/hooks/useLoginForm';
import InputField from '@/components/common/InputField';

const LoginFormSection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.[LOCATION_STATE_KEYS.FROM] ?? ROUTES.HOME;

  const {
    email,
    setEmail,
    emailError,
    validateEmail,
    password,
    setPassword,
    passwordError,
    validatePassword,
    isButtonValid,
  } = useLoginForm();

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const redirectTo = from ? from.pathname + from.search : '/';
    navigate(redirectTo, { replace: true });
  };

  return (
    <Wrapper>
      <Logo src={KakaoLogo} alt="카카오 로고" />
      <FormWrapper onSubmit={handleLogin}>
        <InputWrapper>
          <InputField
            type="email"
            value={email}
            onChange={handleEmail}
            onBlur={() => validateEmail(email)}
            error={emailError}
            placeholder="이메일"
          />
          <InputField
            type="password"
            value={password}
            onChange={handlePassword}
            onBlur={() => validatePassword(password)}
            error={passwordError}
            placeholder="비밀번호"
          />
        </InputWrapper>
        <LoginButton type="submit" disabled={!isButtonValid}>
          로그인
        </LoginButton>
      </FormWrapper>
    </Wrapper>
  );
};

export default LoginFormSection;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[6]};
`;

const Logo = styled.img`
  width: 70px;
  height: auto;
  margin: ${({ theme }) => theme.spacing[8]} 0;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacing[5]};
`;

const InputWrapper = styled.div`
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[5]};
`;

const LoginButton = styled.button`
  width: 100%;
  max-width: 360px;
  padding: ${({ theme }) => theme.spacing[3]};
  background-color: ${({ theme }) => theme.color.semantic.kakaoYellow};
  ${({ theme }) => theme.typography.body.body2Regular};
  border: none;
  border-radius: 6px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;
