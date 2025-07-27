import { cards } from '@/data/cards';
import { Container, Thumbnail } from './CardPreview.styles';

interface CardPreviewProps {
  selectedCardId: number;
}

const CardPreview = ({ selectedCardId }: CardPreviewProps) => {
  const card = cards.find((c) => c.id === selectedCardId);
  if (!card) return null;

  return (
    <Container>
      <Thumbnail
        src={card.imageUrl}
        alt="card-preview"
        isSelected={card.id === selectedCardId}
      />
    </Container>
  );
};

export default CardPreview;
