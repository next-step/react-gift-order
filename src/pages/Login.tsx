import { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { TopNavBar } from '@/components/TopNavBar';
import { useLocation, useNavigate } from 'react-router-dom';
import useValidateId from '@/hooks/useValidateId';
import useValidatePassword from '@/hooks/useValidatePassword';
import useUserInfo from '@/hooks/useUserInfo';
import type { InputStyle } from '@/types/inputStyle';

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

const Input = styled.input<{ inputFieldStyle: string }>`
  all: unset;
  width: 24rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  margin-top: ${({ theme }) => theme.spacing.spacing4};
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme, inputFieldStyle }) => {
    if (inputFieldStyle === 'idle') {
      return theme.colors.gray400;
    } else if (inputFieldStyle === 'isClicked') {
      return theme.colors.gray700;
    } else {
      return theme.colors.red700;
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
  const location = useLocation();
  const nextPath = location.state?.from || -1;
  const [emailIsClicked, setEmailIsClicked] = useState(false);
  const [passwordIsClicked, setPasswordIsClicked] = useState(false);
  const [email, setEmail, isFirstIdTry, setIsFirstIdTry, idError] = useValidateId();
  const [password, setPassword, isFirstPwdTry, setIsFirstPwdTry, passwordError] =
    useValidatePassword();
  const [idInputFieldStyle, setIdInputFieldStyle] = useState<InputStyle>('idle');
  const [pwdInputFieldStyle, setPwdInputFieldStyle] = useState<InputStyle>('idle');
  const isFirstTry = isFirstIdTry || isFirstPwdTry;
  const isAllValid = !idError && !passwordError;
  const { setUser } = useUserInfo();
  const MIN_INPUT_LENGTH = 8;

  const handleInputFieldStyle = useCallback(
    (type: string, isFirstTry: boolean, isClicked: boolean, error: string) => {
      let inputStatus: InputStyle = 'idle';

      if (isFirstTry) {
        if (isClicked) {
          inputStatus = 'isClicked';
        } else {
          inputStatus = 'idle';
        }
      } else {
        if (isClicked) {
          if (!error) {
            inputStatus = 'isClicked';
          } else {
            inputStatus = 'error';
          }
        } else {
          if (!error) {
            inputStatus = 'isClicked';
          } else {
            inputStatus = 'error';
          }
        }
      }

      if (type === 'id') {
        setIdInputFieldStyle(inputStatus);
      } else {
        setPwdInputFieldStyle(inputStatus);
      }
    },
    []
  );

  useEffect(() => {
    handleInputFieldStyle('id', isFirstIdTry, emailIsClicked, idError);
  }, [handleInputFieldStyle, isFirstIdTry, emailIsClicked, idError]);

  useEffect(() => {
    handleInputFieldStyle('password', isFirstPwdTry, passwordIsClicked, passwordError);
  }, [handleInputFieldStyle, isFirstPwdTry, passwordIsClicked, passwordError]);

  return (
    <Container>
      <TopNavBar title="선물하기" mainPath="/" />
      <Body>
        <Logo>kakao</Logo>
        <div
          style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}
        >
          <Input
            inputFieldStyle={idInputFieldStyle}
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
          {idError && <ErrorText>{idError}</ErrorText>}
        </div>
        <div
          style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}
        >
          <Input
            inputFieldStyle={pwdInputFieldStyle}
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => {
              if (isFirstPwdTry && e.target.value.length >= MIN_INPUT_LENGTH) {
                setIsFirstPwdTry(false);
              }
              setPassword(e.target.value);
            }}
            onFocus={() => setPasswordIsClicked(true)}
            onBlur={() => {
              setIsFirstPwdTry(false);
              setPasswordIsClicked(false);
            }}
          />
          {passwordError && <ErrorText>{passwordError}</ErrorText>}
        </div>
        <Button
          onClick={() => {
            setUser({ id: email, password: password });
            navigate(nextPath, { replace: true });
          }}
          disabled={isFirstTry ? true : !isAllValid}
        >
          로그인
        </Button>
      </Body>
    </Container>
  );
};

export default Login;
