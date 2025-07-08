import styled from '@emotion/styled';
import CardSelector from './CardSelector';
import { useState } from 'react';
import { MOCK_CARDFORM_LIST } from './mock';
import { CardImg } from './CardImg';
import { Message } from './Message';

const Wrapper = styled.div`
  width: 100%;
`;
const Margin1 = styled.div`
  width: 100%;
  height: 12px;
  background-color: transparent;
`;

const Margin2 = styled.div`
  width: 100%;
  height: 40px;
  background-color: transparent;
`;

const Margin3 = styled.div`
  width: 100%;
  height: 32px;
  background-color: transparent;
`;

const Card = () => {
  const defaultCard = MOCK_CARDFORM_LIST[0];
  const [selectedCardId, setSelectedCardId] = useState<number>(defaultCard.id);
  const [message, setMessage] = useState(defaultCard.defaultTextMessage || '');

  const handleCardSelect = (id: number) => {
    setSelectedCardId(id);
    const selected = MOCK_CARDFORM_LIST.find((card) => card.id === id);
    if (selected) {
      setMessage(selected.defaultTextMessage || '');
    }
  };

  const selectedCard = MOCK_CARDFORM_LIST.find((card) => card.id === selectedCardId);

  return (
    <Wrapper>
      <Margin1 />
      <CardSelector selectedCardId={selectedCardId} onChange={handleCardSelect} />
      <Margin1 />
      {selectedCard && <CardImg selectedImgUrl={selectedCard.imageUrl} />}
      <Margin2 />
      <Message value={message} onChange={(e) => setMessage(e.target.value)} />
      <Margin3 />
    </Wrapper>
  );
};

export default Card;
