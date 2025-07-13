import styled from '@emotion/styled';
import { colors, typography, spacing } from '@/styles/tokens';
import { useNavigate } from 'react-router';
import { ROUTE_PATH } from '@/shared/RoutePath';
import { useAuth } from '@/contexts/AuthContext';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  background: ${colors.white};
  padding: ${spacing.lg} ${spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.gray200};
  z-index: 100;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: ${typography.fontSize.lg};
  color: ${colors.gray700};
  cursor: pointer;
  padding: ${spacing.sm};
`;

const Title = styled.h1`
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.gray900};
  margin: 0;
  cursor: pointer;
`;

const ProfileButton = styled.button`
  background: none;
  border: none;
  font-size: ${typography.fontSize.lg};
  color: ${colors.gray700};
  cursor: pointer;
  padding: ${spacing.sm};
`;

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const handleLogin = () => {
    if (user) {
      navigate(ROUTE_PATH.MY_PAGE);
    } else {
      navigate(ROUTE_PATH.LOGIN);
    }
  };
  const handleHome = () => {
    navigate(ROUTE_PATH.HOME);
  };
  return (
    <HeaderContainer>
      <BackButton onClick={handleBack}>&#8249;</BackButton>
      <Title onClick={handleHome}>{title}</Title>
      <ProfileButton onClick={handleLogin}>&#128100;</ProfileButton>
    </HeaderContainer>
  );
};
