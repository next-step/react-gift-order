import styled from '@emotion/styled';
import { Button } from '@/components/common';

const ProfileIcon = styled.span`
  font-size: ${(props) => props.theme.typography.title2Bold.fontSize};
  color: ${(props) => props.theme.semanticColors.text.default};
  line-height: 1;
`;

interface ProfileButtonProps {
  onClick?: () => void;
}

const ProfileButton = ({ onClick }: ProfileButtonProps) => {
  return (
    <Button variant="ghost" onClick={onClick} aria-label="프로필">
      <ProfileIcon>👤</ProfileIcon>
    </Button>
  );
};

export default ProfileButton;
