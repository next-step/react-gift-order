import Navigation from '@/components/Navigation';
import styled from '@emotion/styled';
import { useNavigate, useLocation } from 'react-router-dom';
import KakaoLogo from '@/assets/kakao.webp';
import { LOCATION_STATE_KEYS } from '@/constants/navigationState';
import { ROUTES } from '@/constants/routes';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.[LOCATION_STATE_KEYS.FROM] ?? ROUTES.HOME;

  const handleLogin = () => {
    const redirectTo = from ? from.pathname + from.search : '/';
    navigate(redirectTo, { replace: true });
  };

  return (
    <>
      <Navigation showLoginButton={false} />
      <Wrapper>
        <Logo src={KakaoLogo} alt="카카오 로고" />
        <InputWrapper>
          <StyledInput type="email" placeholder="이메일" />
          <StyledInput type="password" placeholder="비밀번호" />
        </InputWrapper>
        <LoginButton onClick={handleLogin}>로그인</LoginButton>
      </Wrapper>
    </>
  );
};

export default LoginPage;

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

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray[400]};
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
