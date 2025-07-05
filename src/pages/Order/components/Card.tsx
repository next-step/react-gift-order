import { orderCardMock } from "@/assets/orderCardMock";
import Divider from "@/components/common/Divider";
import type { orderCardType } from "@/types/orderCardType";
import styled from "@emotion/styled";
import type { ChangeEvent } from "react";

interface CardProps {
  selectedCard: orderCardType;
  setSelectedCard: (card: orderCardType) => void;
  message: string;
  onChangeMessage: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
const Card = ({ selectedCard, setSelectedCard, message, onChangeMessage }: CardProps) => {
  return (
    <Container>
      <Divider spacing="0.75rem" />
      <CardList>
        {orderCardMock.map((card) => (
          <CardListItem
            key={card.id}
            selected={card === selectedCard}
            alt={`${card.id}번 메시지 카드`}
            src={card.thumbUrl}
            onClick={() => setSelectedCard(card)}
          ></CardListItem>
        ))}
      </CardList>
      <SelectedCardWrapper>
        {<SelectedCard alt={`${selectedCard.id}번 메시지 카드`} src={selectedCard.imageUrl} />}
      </SelectedCardWrapper>
      <Divider spacing="2.5rem" />
      <CardMsgInputWrapper>
        <CardMsgInput value={message} onChange={onChangeMessage} />
      </CardMsgInputWrapper>
      <Divider spacing="2rem" />
    </Container>
  );
};

export default Card;
const Container = styled.div`
  width: 100%;
`;

const CardList = styled.div`
  width: 100%;
  overflow: auto scroll;
  display: flex;
  flex-wrap: nowrap;
  gap: ${({ theme }) => theme.spacing.spacing3};
  padding: ${({ theme }) => theme.spacing.spacing4};
`;
const CardListItem = styled.img<{ selected: boolean }>`
  width: 5.125rem;
  height: 3.5rem;
  border-radius: 0.5rem;
  border: 3px solid ${({ selected, theme }) => (selected ? `${theme.color.kakaoBrownPressed}` : "transparent")};
`;
const SelectedCardWrapper = styled.div`
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.spacing4};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SelectedCard = styled.img`
  max-width: 22.5rem;
  width: 100%;
  height: 100%;
  border-radius: 0.75rem;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.2) 0 2.5rem 1.25rem -1.875rem;
`;
const CardMsgInputWrapper = styled.div`
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.spacing4};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CardMsgInput = styled.textarea`
  width: 100%;
  max-width: 42.5rem;
  height: 5rem;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing.spacing4};
  font: ${({ theme }) => theme.typography.body1Regular};
  border: 1px solid ${({ theme }) => theme.color.gray600};
  border-radius: 0.5rem;
  outline: none;
  resize: none;
  &:focus {
    outline: 1px solid ${({ theme }) => theme.color.gray900};
  }
`;
