import { useState } from 'react';
import styled from '@emotion/styled';
import { Header } from '@/components/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import type { Path } from '@/types/path';

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

const Input = styled.input<{ isClicked: boolean }>`
  all: unset;
  width: 24rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  margin-top: ${({ theme }) => theme.spacing.spacing4};
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme, isClicked }) =>
    isClicked ? theme.colors.gray700 : theme.colors.gray400};
  font-size: 1rem;
  transition: border-color 0.3s;
`;

const Button = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24rem;
  height: 2.75rem;
  margin-top: ${({ theme }) => theme.spacing.spacing12};
  background-color: ${({ theme }) => theme.colors.yellow600};
  border-radius: 0.24rem;
  ${({ theme }) => theme.typography.label1Regular};

  &:hover {
    background-color: ${({ theme }) => theme.colors.yellow500};
  }
`;

const Login = ({ prevPath, setPrevPath }: Path) => {
  const url = useLocation();
  const navigate = useNavigate();
  const [emailIsClicked, setEmailIsClicked] = useState(false);
  const [passwordIsClicked, setPasswordIsClicked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Header title="선물하기" mainPath="/" prevPath={prevPath} setPrevPath={setPrevPath} />
      <Body>
        <Logo>kakao</Logo>
        <Input
          isClicked={emailIsClicked}
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setEmailIsClicked(true)}
          onBlur={() => setEmailIsClicked(false)}
        />
        <Input
          isClicked={passwordIsClicked}
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setPasswordIsClicked(true)}
          onBlur={() => setPasswordIsClicked(false)}
        />
        <Button
          onClick={() => {
            if (url.pathname !== prevPath) {
              setPrevPath(url.pathname);
            }
            navigate(prevPath);
          }}
        >
          로그인
        </Button>
      </Body>
    </Container>
  );
};

export default Login;
