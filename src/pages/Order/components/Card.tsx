import { orderCardMock } from "@/assets/orderCardMock";
import Divider from "@/components/common/Divider";
import styled from "@emotion/styled";
import ErrorMsg from "./ErrorMsg";
import { useOrderContext } from "@/contexts/orderContext";
import { useEffect } from "react";

const Card = () => {
  const { formData, setOrderMessage, selectCard, onChangeOrder, errorMsg } = useOrderContext();
  const selectedCard = orderCardMock.find((card) => card.id === formData.cardId);
  useEffect(() => {
    if (selectedCard) {
      setOrderMessage(selectedCard.defaultTextMessage);
    }
  }, [selectedCard]);
  return (
    <Container>
      <Divider spacing="0.75rem" />
      <CardList>
        {orderCardMock.map((card) => (
          <CardListItem
            key={card.id}
            selected={card.id === formData.cardId}
            alt={`${card.id}번 메시지 카드`}
            src={card.thumbUrl}
            onClick={() => selectCard(card.id)}
          ></CardListItem>
        ))}
      </CardList>
      <SelectedCardWrapper>
        {selectedCard && <SelectedCard alt={`${formData.cardId}번 메시지 카드`} src={selectedCard.imageUrl} />}
      </SelectedCardWrapper>
      <Divider spacing="2.5rem" />
      <CardMsgInputWrapper>
        <CardMsgInput name="message" value={formData.message} onChange={onChangeOrder} />
        {errorMsg.message && <ErrorMsg>{errorMsg.message}</ErrorMsg>}
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
  flex-direction: column;
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
    border: 1px solid ${({ theme }) => theme.color.gray900};
  }
`;
