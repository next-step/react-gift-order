import { Navigation } from "@/components/header/Navigation";
import { PageContainer } from "@/components/layout/PageContainer";
import styled from "@emotion/styled";
import { useNavigate, useLocation } from "react-router-dom";

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

const FormSection = styled.section`
  width: 100%;
  max-width: 500px;
  padding: ${({ theme }) => theme.spacing.spacing4};
`;

const Input = styled.input`
  width: 100%;
  color: ${({ theme }) => theme.colors.textDefault};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderDefault};
  background-color: transparent;
  ${({ theme }) => theme.typography.body1Regular};
  padding: ${({ theme }) => `${theme.spacing.spacing2} 0`};
  margin-bottom: ${({ theme }) => theme.spacing.spacing5};
  &::placeholder {
    color: ${({ theme }) => theme.colors.textPlaceholder};
  }
`;

const LoginButton = styled.button`
  width: 100%;
  height: 50px;
  margin-top: ${({ theme }) => theme.spacing.spacing5};
  ${({ theme }) => theme.typography.subtitle2Regular};

  color: ${({ theme }) => theme.colors.textDefault};
  background-color: ${({ theme }) => theme.colors.kakaoYellow};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 200ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.kakaoYellowHover};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.kakaoYellowActive};
  }
`;


const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.from?.pathname || "/";

  const handleLogin = () => {
    navigate(redirectPath, { replace: true });
  };

  return (
    <PageContainer>
      <Navigation />
      <Container>
        <Logo src="/assets/kakao_logo.svg" alt="카카오 로고" />
        <FormSection>
          <Input type="email" placeholder="이메일" />
          <Input type="password" placeholder="비밀번호" />
          <LoginButton onClick={handleLogin}>로그인</LoginButton>
        </FormSection>
      </Container>
    </PageContainer>
  );
};

export default LoginPage;