import styled from '@emotion/styled';
import CardSelector from '@/components/OrderForm/CardSelector';
import { useState } from 'react';
import { MOCK_CARDFORM_LIST } from '@/components/OrderForm/mock';
import { CardImg } from '@/components/OrderForm/CardImg';
import { Message } from '@/components/OrderForm/Message';

const Wrapper = styled.div`
  width: 100%;
`;
const Margin = styled.div<{ height: string }>`
  width: 100%;
  height: ${({ height }) => height};
  background-color: transparent;
`;

interface CardProps {
  message: string;
  onMessageChange: (newMsg: string) => void;
  messageError?: string;
}

const Card = ({ message, onMessageChange, messageError }: CardProps) => {
  const defaultCard = MOCK_CARDFORM_LIST[0];
  const [selectedCardId, setSelectedCardId] = useState<number>(defaultCard.id);

  const handleCardSelect = (id: number) => {
    setSelectedCardId(id);
    const selected = MOCK_CARDFORM_LIST.find((card) => card.id === id);
    if (selected) {
      onMessageChange(selected.defaultTextMessage || '');
    }
  };

  const selectedCard = MOCK_CARDFORM_LIST.find((card) => card.id === selectedCardId);

  return (
    <Wrapper>
      <Margin height={'12px'} />
      <CardSelector selectedCardId={selectedCardId} onChange={handleCardSelect} />
      <Margin height={'12px'} />
      {selectedCard && <CardImg selectedImgUrl={selectedCard.imageUrl} />}
      <Margin height={'40px'} />
      <Message value={message} onChange={onMessageChange} error={messageError} />
      <Margin height={'32px'} />
    </Wrapper>
  );
};

export default Card;
