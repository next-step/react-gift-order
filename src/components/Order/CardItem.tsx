import styled from '@emotion/styled';
import type { cardTemplate } from '@/types/card';

type Props = {
  card: cardTemplate;
  onClick: (card: cardTemplate) => void;
  selected: boolean;
};

const CardItem = ({ card, onClick, selected }: Props) => {
  return (
    <ItemWrapper onClick={() => onClick(card)} isSelected={selected}>
      <CardImage src={card.imageUrl} alt="카드" />
    </ItemWrapper>
  );
};

export default CardItem;

const ItemWrapper = styled.div<{ isSelected: boolean }>`
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  width: 120px;
  flex-shrink: 0;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;
