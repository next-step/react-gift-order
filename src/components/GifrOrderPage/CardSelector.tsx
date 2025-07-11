import cardTemplate from '@data/cardTemplate.json';
import styled from '@emotion/styled';

interface CardTemplate {
  id: number;
  thumbUrl: string;
  imageUrl: string;
  defaultTextMessage: string;
}

const ThumbnailList = styled.div(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing.spacing1,
  overflowX: 'auto',
  padding: theme.spacing.spacing2,
}));

const CardSelector = () => {
  return (
    <div>
      <ThumbnailList>
        {cardTemplate.map((card: CardTemplate) => (
          <img key={card.id} src={card.thumbUrl} />
        ))}
      </ThumbnailList>
      <img src={cardTemplate[0].imageUrl} />
    </div>
  );
};

export default CardSelector;
