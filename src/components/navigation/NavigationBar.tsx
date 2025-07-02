import styled from '@emotion/styled';
import BackButton from './BackButton';
import ProfileButton from './ProfileButton';

const NavWrapper = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: ${(props) => props.theme.semanticColors.background.default};
  border-bottom: 1px solid
    ${(props) => props.theme.semanticColors.border.default};

  /* 모바일 상단 안전 영역 고려 */
  padding-top: env(safe-area-inset-top);
`;

const NavContent = styled.div`
  padding: ${(props) => props.theme.spacing.spacing2}
    ${(props) => props.theme.spacing.spacing4};
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 56px; /* 최소 터치 영역 보장 */
  position: relative;
`;

const NavTitle = styled.h1`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: ${(props) => props.theme.typography.title2Bold.fontSize};
  font-weight: ${(props) => props.theme.typography.title2Bold.fontWeight};
  line-height: ${(props) => props.theme.typography.title2Bold.lineHeight};
  color: ${(props) => props.theme.semanticColors.text.default};
  margin: 0;
  white-space: nowrap;
`;

const NavLeft = styled.div`
  z-index: 1;
`;

const NavRight = styled.div`
  z-index: 1;
`;

interface NavigationBarProps {
  title: string;
  showBackButton?: boolean;
  showProfileButton?: boolean;
  onBackClick?: () => void;
  onProfileClick?: () => void;
}

const NavigationBar = ({
  title,
  showBackButton = true,
  showProfileButton = true,
  onBackClick,
  onProfileClick,
}: NavigationBarProps) => {
  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      window.history.back();  // 기본 뒤로가기 동작 (브라우저 히스토리)
    }
  };

  const handleProfileClick = () => {
    if (onProfileClick) {
      onProfileClick();
    }
  };

  return (
    <NavWrapper>
      <NavContent>
        <NavLeft>
          {showBackButton && <BackButton onClick={handleBackClick} />}
        </NavLeft>

        <NavTitle>{title}</NavTitle>

        <NavRight>
          {showProfileButton && <ProfileButton onClick={handleProfileClick} />}
        </NavRight>
      </NavContent>
    </NavWrapper>
  );
};

export default NavigationBar;
