import styled from "@emotion/styled";
import { useLocation, useNavigate } from "react-router-dom";
import LoginFormSection from "@/pages/login/components/LoginFormSection";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = () => {
    navigate(from, { replace: true });
  };

  return (
    <Wrapper>
      <Title>kakao</Title>
      <LoginFormSection onLogin={handleLogin} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 24px 80px;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 48px;
  color: ${({ theme }) => theme.colors.semantic.text.default};
`;
