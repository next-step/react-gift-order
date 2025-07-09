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

interface MessageCardProps {
  onMessageChange: (message: string) => void;
}

function MessageCard({ onMessageChange }: MessageCardProps) {
  const [selectedCardId, setSelectedCardId] = useState<number>(messageCards[0].id);
  const [message, setMessage] = useState('');

  const selectedCardData = messageCards.find((card) => card.id === selectedCardId);

  useEffect(() => {
    if (selectedCardData) {
      const defaultMessage = selectedCardData.defaultTextMessage;
      setMessage(defaultMessage);
      onMessageChange(defaultMessage);
    }
  }, [selectedCardData, onMessageChange]);

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newMessage = e.target.value;
    setMessage(newMessage);
    onMessageChange(newMessage);
  };

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
            onChange={handleMessageChange}
          />
        </EnlargedImageContainer>
      )}
    </Container>
  );
}

export default MessageCard;
