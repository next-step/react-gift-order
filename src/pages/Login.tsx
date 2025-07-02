import { useState } from 'react';
import styled from '@emotion/styled';
import { TopNavBar } from '@/components/TopNavBar';
import { useNavigate } from 'react-router-dom';
import useValidateId from '@/hooks/useValidateId';
import useValidatePassword from '@/hooks/useValidatePassword';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 100vh;
  max-width: 720px;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.gray200};
`;

const Body = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 2.8rem;
  background-color: white;
`;

const Logo = styled.div`
  font-size: 2.2rem;
  font-weight: 400;
  margin-bottom: ${({ theme }) => theme.spacing.spacing6};
`;

const Input = styled.input<{ isClicked: boolean; isValid: boolean; isFirstTry: boolean }>`
  all: unset;
  width: 24rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  margin-top: ${({ theme }) => theme.spacing.spacing4};
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme, isClicked, isValid, isFirstTry }) => {
    if (isFirstTry) {
      if (isClicked) {
        return theme.colors.gray700;
      } else {
        return theme.colors.gray400;
      }
    } else {
      if (isClicked) {
        if (isValid) {
          return theme.colors.gray700;
        } else {
          return theme.colors.red700;
        }
      } else {
        if (isValid) {
          return theme.colors.gray400;
        } else {
          return theme.colors.red700;
        }
      }
    }
  }};
  font-size: 1rem;
  transition: border-color 0.3s;
`;

const ErrorText = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
  margin-top: 0.3rem;
  color: ${({ theme }) => theme.colors.red700};
`;

const Button = styled.button`
  all: unset;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24rem;
  height: 2.75rem;
  margin-top: ${({ theme }) => theme.spacing.spacing12};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.yellow300 : theme.colors.yellow600};
  border-radius: 0.24rem;
  ${({ theme }) => theme.typography.label1Regular};

  ${({ theme, disabled }) =>
    !disabled &&
    `
    &:hover {
      background-color: ${theme.colors.yellow500};
    }
  `}
`;

const Login = () => {
  const navigate = useNavigate();
  const [emailIsClicked, setEmailIsClicked] = useState(false);
  const [passwordIsClicked, setPasswordIsClicked] = useState(false);
  const [email, setEmail, isFirstIdTry, setIsFirstIdTry, isValidId, idError] = useValidateId();
  const [password, setPassword, isFirstPwdTry, setIsFirstPwdTry, isValidPassword, passwordError] =
    useValidatePassword();

  return (
    <Container>
      <TopNavBar title="선물하기" mainPath="/" />
      <Body>
        <Logo>kakao</Logo>
        <div
          style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}
        >
          <Input
            isClicked={emailIsClicked}
            isValid={isValidId}
            isFirstTry={isFirstIdTry}
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setEmailIsClicked(true)}
            onBlur={() => {
              setIsFirstIdTry(false);
              setEmailIsClicked(false);
            }}
          />
          {isValidId ? <></> : <ErrorText>{idError}</ErrorText>}
        </div>
        <div
          style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}
        >
          <Input
            isClicked={passwordIsClicked}
            isValid={isValidPassword}
            isFirstTry={isFirstPwdTry}
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setPasswordIsClicked(true)}
            onBlur={() => {
              setIsFirstPwdTry(false);
              setPasswordIsClicked(false);
            }}
          />
          {isValidPassword ? <></> : <ErrorText>{passwordError}</ErrorText>}
        </div>
        <Button
          onClick={() => {
            navigate('/');
          }}
          disabled={!(isValidId && isValidPassword)}
        >
          로그인
        </Button>
      </Body>
    </Container>
  );
};

export default Login;
