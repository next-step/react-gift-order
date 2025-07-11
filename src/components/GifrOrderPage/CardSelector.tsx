import cardTemplate from '@data/cardTemplate.json';
import styled from '@emotion/styled';
import { useState } from 'react';

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
  width: theme.spacing.spacing16,
  height: theme.spacing.spacing10,
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

const CardSelector = () => {
  const defaultCard = cardTemplate[0];
  const [selectedCard, setSelectedCard] = useState(defaultCard.imageUrl);

  return (
    <Wrapper>
      <ThumbnailList>
        {cardTemplate.map((card: CardTemplate) => (
          <Thumbnail
            key={card.id}
            src={card.thumbUrl}
            alt={`card-${card.id}`}
            selected={selectedCard === card.imageUrl}
            onClick={() => setSelectedCard(card.imageUrl)}
          />
        ))}
      </ThumbnailList>
      <SelectedImage src={selectedCard} alt="선택된 카드" />
    </Wrapper>
  );
};

export default CardSelector;
