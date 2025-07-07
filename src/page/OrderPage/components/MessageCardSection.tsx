import styled from '@emotion/styled';
import { messageCardDatas } from '@/data/messageCardDatas';

const MessageCardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.semantic.background.fill};
  padding: ${({ theme }) => theme.spacing.spacing4} ${({ theme }) => theme.spacing.spacing3};
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
`;

const MessageCardList = styled.div`
  display: flex;
  overflow-x: auto;
  gap: ${({ theme }) => theme.spacing.spacing2};
  padding-bottom: ${({ theme }) => theme.spacing.spacing2};
`;

const MessageCardItem = styled.div`
  flex-shrink: 0;
  width: 100px; /* Adjust as needed */
  height: 100px; /* Adjust as needed */
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.colorScale.gray[200]};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MessageCardSection = () => {
  return (
    <MessageCardContainer>
      <h3>메시지 카드 선택</h3>
      <MessageCardList>
        {messageCardDatas[0].map((card) => (
          <MessageCardItem key={card.id}>
            <img src={card.thumbUrl} alt={card.defaultTextMessage} />
          </MessageCardItem>
        ))}
      </MessageCardList>
    </MessageCardContainer>
  );
};

export default MessageCardSection;
