import styled from '@emotion/styled';
import KakaoLogo from '@/assets/kakao.webp';
import { useNavigate, useLocation } from 'react-router-dom';
import { LOCATION_STATE_KEYS } from '@/constants/navigationState';
import { ROUTES } from '@/constants/routes';
import useLoginForm from '@/hooks/useLoginForm';
import InputField from '@/components/common/InputField';
import { useAuth } from '@/contexts/AuthContext';

type FromState = {
  pathname: string;
  search?: string;
};

const LoginFormSection = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const fromState = location.state?.[LOCATION_STATE_KEYS.FROM] as
    | FromState
    | undefined;
  const redirectTo = fromState
    ? fromState.pathname + (fromState.search ?? '')
    : ROUTES.HOME;

  const { userInfo, handleChange, errors, validateField, isValidForm } =
    useLoginForm();

  const isLoginField = (name: string): name is 'email' | 'password' => {
    return name === 'email' || name === 'password';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (isLoginField(name)) {
      handleChange(name, value);
    }
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isEmailOk = validateField('email');
    const isPasswordOk = validateField('password');
    if (!isEmailOk || !isPasswordOk) return;

    login({ email: userInfo.email });
    navigate(redirectTo, { replace: true });
  };

  return (
    <Wrapper>
      <Logo src={KakaoLogo} alt="카카오 로고" />
      <FormWrapper onSubmit={handleLogin}>
        <InputWrapper>
          <InputField
            name="email"
            type="email"
            value={userInfo.email}
            onChange={handleInputChange}
            onBlur={() => validateField('email')}
            error={errors.email}
            placeholder="이메일"
          />
          <InputField
            name="password"
            type="password"
            value={userInfo.password}
            onChange={handleInputChange}
            onBlur={() => validateField('password')}
            error={errors.password}
            placeholder="비밀번호"
          />
        </InputWrapper>
        <LoginButton disabled={!isValidForm}>로그인</LoginButton>
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
