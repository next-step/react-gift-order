import { useNavigate, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { NavigationHeader } from '@/components/NavigationHeader';
import { LoginForm } from '@/components/LoginForm';
import { theme } from '@/styles/theme';

const AppContainer = styled.div`
  min-height: 100vh;
  background: ${theme.colors.gray200};
  display: flex;
  justify-content: center;
  padding: 0 ${theme.spacing.spacing4};

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const MobileViewport = styled.div`
  width: 100%;
  max-width: 720px;
  min-height: 100vh;
  background: ${theme.colors.default};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  position: relative;

  @media (max-width: 768px) {
    max-width: 100%;
    box-shadow: none;
  }
`;

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleRedirect = (replace: boolean = true) => {
    const from = location.state?.from || '/';
    navigate(from, { replace });
  };

  return (
    <AppContainer>
      <MobileViewport>
        <NavigationHeader
          title="선물하기"
          onBackClick={() => handleRedirect(false)}
        />
        <LoginForm onSubmit={() => handleRedirect(true)} />
      </MobileViewport>
    </AppContainer>
  );
}
