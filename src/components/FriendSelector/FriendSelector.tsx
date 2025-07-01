import styled from '@emotion/styled';
import { colors, typography, spacing, borderRadius } from '@/styles/tokens';

const Container = styled.div`
  background: ${colors.yellow};
  margin: ${spacing.lg};
  padding: ${spacing.lg};
  border-radius: ${borderRadius.lg};
  display: flex;
  align-items: center;
  gap: ${spacing.md};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

const PlusIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: ${borderRadius.round};
  background: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.primary};
`;

const Text = styled.span`
  font-size: ${typography.fontSize.md};
  font-weight: ${typography.fontWeight.medium};
  color: ${colors.gray900};
`;

interface FriendSelectorProps {
  onClick?: () => void;
}

export const FriendSelector = ({ onClick }: FriendSelectorProps) => {
  return (
    <Container onClick={onClick}>
      <PlusIcon>+</PlusIcon>
      <Text>선물할 친구를 선택해 주세요.</Text>
    </Container>
  );
};
