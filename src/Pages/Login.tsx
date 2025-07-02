import kakaologo from '@/assets/icons/kakaologo.svg';
import InputBox from '@/components/Common/InputBox';
import Header from '@/components/Header';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useLoginForm } from '@/hooks/useLoginForm';

const Login = () => {
  const navigate = useNavigate();
  const { email, password, isFormValid } = useLoginForm();

  return (
    <>
      <Header title="로그인" />
      <LoginContainer>
        <LoginSection>
          <Kakaologo src={kakaologo} alt="카카오 로고" />
          <InputBox
            type="email"
            placeholder="이메일"
            value={email.value}
            onChange={email.onChange}
            onBlur={email.onBlur}
            error={email.error}
          />

          <InputBox
            type="password"
            placeholder="비밀번호"
            value={password.value}
            onChange={password.onChange}
            onBlur={password.onBlur}
            error={password.error}
          />
          <LoginButton onClick={() => navigate('/')} disabled={!isFormValid}>
            로그인
          </LoginButton>
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

  &:disabled {
    background-color: ${({ theme }) => theme.colors.yellow300};
    cursor: not-allowed;
  }
`;
