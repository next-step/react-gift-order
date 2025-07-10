import styled from '@emotion/styled';
import { messageCardDatas, type MessageCard } from '@/data/messageCardDatas';
import { useState } from 'react';

const MessageCardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.semantic.background.default};
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
  width: 100px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.colorScale.gray[200]};
`;

const SelectedCardItem = styled.div`
  width: 100%;
  max-width: 360px;
  height: 240px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 39px 20px -30px;
`;

const SelectedCardContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MessageCardSection = () => {
  const [selected, setSelected] = useState<MessageCard>(messageCardDatas[0][0]);

  return (
    <MessageCardContainer>
      <MessageCardList>
        {messageCardDatas[0].map(card => (
          <MessageCardItem key={card.id} onClick={() => setSelected(card)}>
            <Img src={card.thumbUrl} alt={card.defaultTextMessage} />
          </MessageCardItem>
        ))}
      </MessageCardList>
      <SelectedCardContainer>
        <SelectedCardItem>
          <Img src={selected.thumbUrl} alt={selected.defaultTextMessage} />
        </SelectedCardItem>
      </SelectedCardContainer>
    </MessageCardContainer>
  );
};

export default MessageCardSection;
