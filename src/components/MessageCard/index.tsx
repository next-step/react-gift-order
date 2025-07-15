import React, { useState, useEffect } from 'react';
import type { UseFormRegister, UseFormSetValue } from 'react-hook-form';
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
import type { IFormData } from '@/types/order.d';

interface MessageCardProps {
  register: UseFormRegister<IFormData>;
  setValue: UseFormSetValue<IFormData>;
}

function MessageCard({ register, setValue }: MessageCardProps) {
  const [selectedCardId, setSelectedCardId] = useState<number>(messageCards[0].id);
  const selectedCardData = messageCards.find((card) => card.id === selectedCardId);

  useEffect(() => {
    if (selectedCardData) {
      const defaultMessage = selectedCardData.defaultTextMessage;
      setValue('message', defaultMessage, { shouldDirty: true, shouldValidate: true });
    }
  }, [selectedCardData, setValue]);

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
          <MessageTextarea {...register('message')} />
        </EnlargedImageContainer>
      )}
    </Container>
  );
}

export default MessageCard;
