import styled from '@emotion/styled';
import LogoImg from '@/Assets/icons/logo.png';
import LoginButton from '@/Components/Login/LoginButton';
import { useLoginForm } from '@/Hooks/useLoginForm';
import { useNavigate, useLocation } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: calc(-2.75rem + 100vh);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.img`
  width: 5.5rem;
  color: rgb(42, 48, 56);
`;

const EmailInput = styled.input`
  width: 60%;
  height: 2.5rem;
  border: none;
  outline: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.semantic.border.default};
  font-size: 1rem;
`;

const PwInput = styled.input`
  width: 60%;
  height: 2.5rem;
  border: none;
  outline: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.semantic.border.default};
  font-size: 1rem;
`;
const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.color.red.red700};
  font-size: 0.875rem;
`;

const LoginForm = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    passwordError,
    isValid,
    handleEmailBlur,
    handlePasswordBlur,
  } = useLoginForm();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    navigate(from, { replace: true });
  };

  return (
    <Container>
      <Logo src={LogoImg} alt="로고" />
      <form
        onSubmit={handleSubmit}
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <EmailInput
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={handleEmailBlur}
          autoComplete="off"
        />
        {emailError && <ErrorMessage>{emailError}</ErrorMessage>}

        <PwInput
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={handlePasswordBlur}
          autoComplete="off"
        />
        {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}

        <LoginButton disabled={!isValid} />
      </form>
    </Container>
  );
};

export default LoginForm;