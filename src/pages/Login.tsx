import { Navigation } from "@/components/header/Navigation";
import { PageContainer } from "@/components/layout/PageContainer";
import { LoginForm } from "@/components/login/LoginForm";
import styled from "@emotion/styled";
import { useNavigate, useLocation } from "react-router-dom";
import { useLoginForm } from "@/hooks/useLoginForm";

const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  background-color: ${({ theme }) => theme.colors.backgroundDefault};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 9rem;
  margin-bottom: ${({ theme }) => theme.spacing.spacing7};
`;

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.from?.pathname || "/";

  const {
    email,
    password,
    emailError,
    passwordError,
    isValid,
    handleChange,
    handleBlur,
  } = useLoginForm();

  const handleLogin = () => {
    navigate(redirectPath, { replace: true });
  };

  return (
    <PageContainer>
      <Navigation />
      <Container>
        <Logo src="/assets/kakao_logo.svg" alt="카카오 로고" />
        <LoginForm
          email={email}
          password={password}
          emailError={emailError}
          passwordError={passwordError}
          onChange={handleChange}
          onBlur={handleBlur}
          onSubmit={handleLogin}
          disabled={!isValid}
        />
      </Container>
    </PageContainer>
  );
};

export default LoginPage;
