import styled from '@emotion/styled';
import KakaoLogo from '@/assets/kakao.webp';
import { useNavigate, useLocation } from 'react-router-dom';
import { LOCATION_STATE_KEYS } from '@/constants/navigationState';
import { ROUTES } from '@/constants/routes';
import { useState } from 'react';

const LoginFormSection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.[LOCATION_STATE_KEYS.FROM] ?? ROUTES.HOME;

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (value: string) => {
    if (!value) {
      setEmailError('ID를 입력해주세요.');
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
      setEmailError('ID는 이메일 형식으로 입력해주세요.');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (value: string) => {
    if (!value) {
      setPasswordError('PW를 입력해주세요.');
    } else if (value.length < 8) {
      setPasswordError('PW는 최소 8글자 이상이어야 합니다.');
    } else {
      setPasswordError('');
    }
  };

  const handleLogin = () => {
    const redirectTo = from ? from.pathname + from.search : '/';
    navigate(redirectTo, { replace: true });
  };

  return (
    <>
      <Wrapper>
        <Logo src={KakaoLogo} alt="카카오 로고" />
        <InputWrapper>
          <StyledInput
            type="email"
            placeholder="이메일"
            value={email}
            onChange={e => {
              const value = e.target.value;
              setEmail(value);
              validateEmail(value);
            }}
            onBlur={() => validateEmail(email)}
            hasError={!!emailError}
          />
          {emailError && <ErrorText>{emailError}</ErrorText>}
          <StyledInput
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={e => {
              const value = e.target.value;
              setPassword(value);
              validatePassword(value);
            }}
            onBlur={() => validatePassword(password)}
            hasError={!!passwordError}
          />
          {passwordError && <ErrorText>{passwordError}</ErrorText>}
        </InputWrapper>
        <LoginButton onClick={handleLogin}>로그인</LoginButton>
      </Wrapper>
    </>
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

const InputWrapper = styled.div`
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[5]};
`;

const StyledInput = styled.input<{ hasError: boolean }>`
  border: none;
  border-bottom: 1px solid
    ${({ hasError, theme }) =>
      hasError ? theme.color.red[500] : theme.color.gray[400]};
  padding: ${({ theme }) => theme.spacing[3]} 0;
  color: ${({ theme }) => theme.color.semantic.text.default};
  background-color: transparent;

  &::placeholder {
    color: ${({ theme }) => theme.color.semantic.text.sub};
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid ${({ theme }) => theme.color.gray[500]};
  }
`;

const LoginButton = styled.button`
  width: 100%;
  max-width: 360px;
  padding: ${({ theme }) => theme.spacing[3]};
  background-color: ${({ theme }) => theme.color.semantic.kakaoYellow};
  ${({ theme }) => theme.typography.body.body2Regular};
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

const ErrorText = styled.p`
  color: ${({ theme }) => theme.color.red[500]};
  ${({ theme }) => theme.typography.body.body2Regular};
  margin: 0;
`;
