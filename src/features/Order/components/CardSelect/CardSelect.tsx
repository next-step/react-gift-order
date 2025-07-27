import { cards } from '@/data/cards';
import type { Dispatch, SetStateAction } from 'react';
import { Container, Thumbnail } from './CardSelect.styles';

interface Props {
  selectedCardId: number;
  setSelectedCardId: Dispatch<SetStateAction<number>>;
}

const CardSelect: React.FC<Props> = ({ selectedCardId, setSelectedCardId }) => {
  return (
    <Container>
      {cards.map((card) => (
        <Thumbnail
          key={card.id}
          src={card.thumbUrl}
          alt="card"
          isSelected={card.id === selectedCardId}
          onClick={() => setSelectedCardId(card.id)}
        />
      ))}
    </Container>
  );
};

export default CardSelect;
