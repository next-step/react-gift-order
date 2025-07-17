import styled from '@emotion/styled';
import { Navbar } from '@/components/Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { useLoginForm } from '@/hooks/useLoginForm';

export function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const { emailInput, passwordInput, isFormValid } = useLoginForm();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      navigate(from, { replace: true });
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <Logo>kakao</Logo>
        <Form onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="이메일"
            {...emailInput.bind}
            error={emailInput.error}
          />
          <Input
            type="password"
            placeholder="비밀번호"
            {...passwordInput.bind}
            error={passwordInput.error}
          />
          <LoginButton type="submit" disabled={!isFormValid}>
            로그인
          </LoginButton>
        </Form>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
`;

const Logo = styled.h1`
  font-size: 34px;
  font-family: 'Kakao', sans-serif;
  margin-bottom: 33px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 13px;
`;

const LoginButton = styled(Button)`
  margin-top: 33px;
`;
