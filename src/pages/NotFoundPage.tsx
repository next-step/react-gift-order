import { useNavigate, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';
import { NavigationHeader } from '@/components/NavigationHeader';
import { NotFoundLogo } from '@/components/NotFoundLogo';

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
  background: ${theme.colors.fill};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  position: relative;

  @media (max-width: 768px) {
    max-width: 100%;
    box-shadow: none;
  }
`;

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 60px);
  padding: ${theme.spacing.spacing8} ${theme.spacing.spacing6};
  text-align: center;
`;

const ErrorTitle = styled.h2`
  font-size: ${theme.typography.title1Bold.fontSize};
  font-weight: ${theme.typography.title1Bold.fontWeight};
  color: ${theme.colors.textDefault};
  margin: ${theme.spacing.spacing4} 0 ${theme.spacing.spacing2} 0;
`;

const ErrorMessage = styled.p`
  font-size: ${theme.typography.body1Regular.fontSize};
  color: ${theme.colors.textSub};
  margin: 0 0 ${theme.spacing.spacing8} 0;
  line-height: 1.6;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.spacing3};
  width: 100%;
  max-width: 300px;
`;

const HomeButton = styled.button`
  width: 100%;
  padding: ${theme.spacing.spacing4};
  background: ${theme.colors.kakaoYellow};
  border: none;
  border-radius: 8px;
  font-size: ${theme.typography.body1Bold.fontSize};
  font-weight: ${theme.typography.body1Bold.fontWeight};
  color: ${theme.colors.kakaoBrown};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${theme.colors.kakaoYellowHover};
    transform: translateY(-1px);
  }

  &:active {
    background: ${theme.colors.kakaoYellowActive};
    transform: translateY(0);
  }
`;

export default function NotFoundPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoHome = () => {
    navigate('/', { replace: true });
  };

  const handleBackClick = () => {
    // 이전 페이지로 이동하거나 홈으로 이동
    const from = location.state?.from || '/';
    navigate(from);
  };

  return (
    <AppContainer>
      <MobileViewport>
        <NavigationHeader title="선물하기" onBackClick={handleBackClick} />
        <NotFoundContainer>
          <NotFoundLogo
            style={{
              width: '200px',
              height: 'auto',
              marginBottom: theme.spacing.spacing6,
              objectFit: 'contain',
            }}
          />
          <ErrorTitle>잘못된 접근입니다.</ErrorTitle>
          <ErrorMessage>찾으시는 페이지가 존재하지 않습니다.</ErrorMessage>

          <ButtonContainer>
            <HomeButton onClick={handleGoHome}>홈으로</HomeButton>
          </ButtonContainer>
        </NotFoundContainer>
      </MobileViewport>
    </AppContainer>
  );
}
