import React, { useState, useEffect } from 'react';
import {
  Container,
  CardContainer,
  Card,
  CardImage,
  EnlargedImageContainer,
  EnlargedImage,
  MessageTextarea,
} from './styles';
import { messageCards } from './mockData';

function MessageCard() {
  const [selectedCardId, setSelectedCardId] = useState<number>(messageCards[0].id);
  const [message, setMessage] = useState('');

  const selectedCardData = messageCards.find((card) => card.id === selectedCardId);

  useEffect(() => {
    if (selectedCardData) {
      setMessage(selectedCardData.defaultTextMessage);
    }
  }, [selectedCardData]);

  return (
    <Container>
      <CardContainer>
        {messageCards.map((card) => (
          <Card
            key={card.id}
            className={selectedCardId === card.id ? 'selected' : ''}
            onClick={() => setSelectedCardId(card.id)}
          >
            <CardImage src={card.thumbUrl} alt={`card-${card.id}`} />
          </Card>
        ))}
      </CardContainer>
      {selectedCardData && (
        <EnlargedImageContainer>
          <EnlargedImage
            src={selectedCardData.imageUrl}
            alt={`enlarged-card-${selectedCardData.id}`}
          />
          <MessageTextarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </EnlargedImageContainer>
      )}
    </Container>
  );
}

export default MessageCard;
