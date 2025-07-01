import styled from '@emotion/styled';
import { Button } from '@/components/common';

const BackIcon = styled.span`
  font-size: ${(props) => props.theme.typography.title2Bold.fontSize};
  color: ${(props) => props.theme.semanticColors.text.default};
  line-height: 1;
`;

interface BackButtonProps {
  onClick?: () => void;
}

const BackButton = ({ onClick }: BackButtonProps) => {
  return (
    <Button variant="ghost" onClick={onClick} aria-label="뒤로가기">
      <BackIcon>&lt;</BackIcon>
    </Button>
  );
};

export default BackButton;
