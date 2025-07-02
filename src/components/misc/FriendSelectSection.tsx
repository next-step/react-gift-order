import styled from '@emotion/styled';
import { Button } from '@/components/common';

const SectionWrapper = styled.div`
  background-color: ${(props) => props.theme.semanticColors.background.fill};
  padding: ${(props) => props.theme.spacing.spacing4};
  margin-bottom: ${(props) => props.theme.spacing.spacing2};
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.spacing3};
`;

const PlusIcon = styled.span`
  font-size: 20px;
  font-weight: bold;
  line-height: 1;
`;

const MessageText = styled.span`
  font-size: ${(props) => props.theme.typography.body1Bold.fontSize};
  font-weight: ${(props) => props.theme.typography.body1Bold.fontWeight};
  color: ${(props) => props.theme.semanticColors.text.default};
  font-family: 'Pretendard', sans-serif;
`;

interface FriendSelectSectionProps {
  onSelectFriend?: () => void;
}

const FriendSelectSection = ({ onSelectFriend }: FriendSelectSectionProps) => {
  return (
    <SectionWrapper>
      <ContentContainer>
        <Button variant="icon" onClick={onSelectFriend} aria-label="친구 선택">
          <PlusIcon>+</PlusIcon>
        </Button>
        <MessageText>선물할 친구를 선택해 주세요.</MessageText>
      </ContentContainer>
    </SectionWrapper>
  );
};

export default FriendSelectSection;
