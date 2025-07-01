import kakaologo from '@/assets/icons/kakaologo.svg';
import Header from '@/components/Header';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header title="로그인" />
      <LoginContainer>
        <LoginSection>
          <Kakaologo src={kakaologo} alt="카카오 로고" />
          <EmailInput placeholder="이메일" />
          <PasswordInput placeholder="비밀번호" />
          <LoginButton onClick={() => navigate('/')}>로그인</LoginButton>
        </LoginSection>
      </LoginContainer>
    </>
  );
};

export default Login;

const LoginContainer = styled.main`
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: ${({ theme }) => theme.colors.backgroundDefault};
  height: 100vh;
  width: 100%;
`;

const LoginSection = styled.section`
  gap: ${({ theme }) => theme.spacing.spacing2};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 360px;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing.spacing4};
`;

const Kakaologo = styled.img`
  width: 120px;
  max-width: 100%;
  height: auto;
  display: block;
`;

const EmailInput = styled.input`
  width: 100%;
  transition: border-color 0.2s ease;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray500};
  ${({ theme }) => `
    font-size: ${theme.font.body1Regular.size};
    font-weight: ${theme.font.body1Regular.weight};
    line-height: ${theme.font.body1Regular.lineHeight};
  `}
  padding: ${({ theme }) => theme.spacing.spacing2};

  &:focus {
    outline: none;
    border-bottom-color: ${({ theme }) => theme.colors.gray700};
  }

  &::placeholder {
    font: ${({ theme }) => theme.font.title1Regular};
  }
`;

const PasswordInput = styled.input`
  width: 100%;
  transition: border-color 0.2s ease;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray500};
  ${({ theme }) => `
    font-size: ${theme.font.body1Regular.size};
    font-weight: ${theme.font.body1Regular.weight};
    line-height: ${theme.font.body1Regular.lineHeight};
  `}
  padding: ${({ theme }) => theme.spacing.spacing2};

  &:focus {
    outline: none;
    border-bottom-color: ${({ theme }) => theme.colors.gray700};
  }

  &::placeholder {
    font: ${({ theme }) => theme.font.title1Regular};
  }
`;

const LoginButton = styled.button`
  margin-top: ${({ theme }) => theme.spacing.spacing6};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.kakaoYellow};
  padding: ${({ theme }) => theme.spacing.spacing4};
  text-align: center;
  border: none;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.kakaoYellowHover};
  }
`;
