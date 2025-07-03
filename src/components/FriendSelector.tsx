import styled from '@emotion/styled';
import { Plus } from 'lucide-react';
import { theme } from '@/styles/theme';

interface FriendSelectorProps {
  onAddFriend?: () => void;
  placeholder?: string;
}

export function FriendSelector({
  onAddFriend,
  placeholder = '선물할 친구를 선택해 주세요.',
}: FriendSelectorProps) {
  const handleClick = () => {
    console.log('친구 선택 클릭');
    onAddFriend?.();
  };

  return (
    <SelectorContainer>
      <SelectorWrapper onClick={handleClick}>
        <PlusButton type="button">
          <Plus />
        </PlusButton>
        <PlaceholderText>{placeholder}</PlaceholderText>
      </SelectorWrapper>
    </SelectorContainer>
  );
}

const SelectorContainer = styled.div`
  padding: ${theme.spacing.spacing3};
  background-color: ${theme.colors.gray200};
`;

const SelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${theme.colors.default};
  border-radius: 12px;
  padding: ${theme.spacing.spacing5} ${theme.spacing.spacing4};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
`;

const PlusButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${theme.colors.kakaoYellow};
  border: none;
  border-radius: 30%;
  margin-right: ${theme.spacing.spacing3};
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background: ${theme.colors.kakaoYellowHover};
    transform: scale(1.05);
  }

  &:active {
    background: ${theme.colors.kakaoYellowActive};
    transform: scale(0.95);
  }

  svg {
    width: 22px;
    height: 22px;
    color: ${theme.colors.gray1000};
  }
`;

const PlaceholderText = styled.span`
  font-size: ${theme.typography.subtitle1Bold.fontSize};
  font-weight: ${theme.typography.subtitle1Bold.fontWeight};
  line-height: ${theme.typography.body1Regular.lineHeight};
  color: ${theme.colors.textDefault};
  flex: 1;
  user-select: none;
`;
