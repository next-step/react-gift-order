import styled from '@emotion/styled';
import CardItem from './CardItem';
import { cardTemplateMocks } from '@/mocks/cardTemplateMock';
import type { cardTemplate } from '@/types/card';

type Props = {
  selectedCardId?: number;
  onSelectCard: (card: cardTemplate) => void;
};

const CardList = ({ selectedCardId, onSelectCard }: Props) => {
  return (
    <ScrollContainer>
      {cardTemplateMocks.map((card) => (
        <CardItem
          key={card.id}
          card={card}
          selected={selectedCardId === card.id}
          onClick={() => onSelectCard(card)}
        />
      ))}
    </ScrollContainer>
  );
};

export default CardList;

const ScrollContainer = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 8px 0;
`;
