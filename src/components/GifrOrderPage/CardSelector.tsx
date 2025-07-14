import cardTemplate from '@data/cardTemplate.json';
import styled from '@emotion/styled';
import { useState } from 'react';
import MessageInput from './MessageInput';
import type { FormSectionProps } from '@pages/GiftOrderPage';
import ErrorText from '@components/common/ErrorText';

interface CardTemplate {
  id: number;
  thumbUrl: string;
  imageUrl: string;
  defaultTextMessage: string;
}

const Wrapper = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing.spacing3,
}));

const ThumbnailList = styled.div(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing.spacing1,
  overflowX: 'auto',
  padding: theme.spacing.spacing2,
}));

const Thumbnail = styled.img<{ selected: boolean }>(({ theme, selected }) => ({
  width: '5rem',
  height: 'auto',
  borderRadius: theme.spacing.spacing2,
  cursor: 'pointer',
  border: selected
    ? `2px solid ${theme.colors.semantic.textDefault}`
    : `2px solid ${theme.colors.semantic.borderDisabled}`,
}));

const SelectedImage = styled.img(({ theme }) => ({
  margin: `${theme.spacing.spacing3} auto`,
  width: '360px',
  height: 'auto',
  borderRadius: theme.spacing.spacing4,
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
}));

const CardSelector = ({ register, errors, setValue }: FormSectionProps) => {
  const defaultCard = cardTemplate[0];
  const [selectedCard, setSelectedCard] = useState(defaultCard.imageUrl);

  const handleCardSelect = (card: CardTemplate) => {
    setSelectedCard(card.imageUrl);
    setValue?.('message', card.defaultTextMessage);
  };

  return (
    <Wrapper>
      <ThumbnailList>
        {cardTemplate.map((card: CardTemplate) => (
          <Thumbnail
            key={card.id}
            src={card.thumbUrl}
            alt={`card-${card.id}`}
            selected={selectedCard === card.imageUrl}
            onClick={() => handleCardSelect(card)}
          />
        ))}
      </ThumbnailList>
      <SelectedImage src={selectedCard} alt="선택된 카드" />
      <MessageInput register={register} />
      {errors.message && <ErrorText>{errors.message.message}</ErrorText>}
    </Wrapper>
  );
};

export default CardSelector;
