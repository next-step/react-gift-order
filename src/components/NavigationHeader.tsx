import { useNavigate, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { ChevronLeft, User } from 'lucide-react';
import { theme } from '@/styles/theme';
import type { NavigationState } from '@/types';
import { useAuth } from '@/contexts/AuthContext';

interface NavigationHeaderProps {
  title: string;
  onBackClick?: () => void;
  onProfileClick?: () => void;
  showBackButton?: boolean;
  showProfileButton?: boolean;
}

export function NavigationHeader({
  title,
  onBackClick,
  onProfileClick,
  showBackButton = true,
  showProfileButton = true,
}: NavigationHeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      navigate(-1);
    }
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleProfileClick = () => {
    if (onProfileClick) {
      onProfileClick();
    } else if (user) {
      navigate('/my');
    } else {
      const navState: NavigationState = { from: location.pathname };
      navigate('/login', {
        state: navState,
      });
    }
  };

  return (
    <HeaderContainer>
      <SideContainer position="left">
        {showBackButton && (
          <IconButton onClick={handleBackClick} type="button">
            <ChevronLeft />
          </IconButton>
        )}
      </SideContainer>

      <TitleContainer onClick={handleHomeClick}>
        <Title>{title}</Title>
      </TitleContainer>

      <SideContainer position="right">
        {showProfileButton && (
          <IconButton onClick={handleProfileClick} type="button">
            <User />
          </IconButton>
        )}
      </SideContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.spacing.spacing1} ${theme.spacing.spacing4};
  background-color: ${theme.colors.default};
  position: relative;
`;

interface SideContainerProps {
  position: 'left' | 'right';
}

const SideContainer = styled.div<SideContainerProps>`
  display: flex;
  align-items: center;
  width: 48px;
  justify-content: ${({ position }) =>
    position === 'left' ? 'flex-start' : 'flex-end'};
`;

const TitleContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Title = styled.h1`
  font-size: ${theme.typography.title1Bold.fontSize};
  font-weight: ${theme.typography.title1Bold.fontWeight};
  line-height: ${theme.typography.title1Bold.lineHeight};
  color: ${theme.colors.gray1000};
  margin: 0;
  cursor: pointer;
`;

const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${theme.colors.gray100};
  }

  &:active {
    background-color: ${theme.colors.gray200};
  }

  svg {
    width: 27px;
    height: 27px;
    color: ${theme.colors.gray1000};
  }
`;
