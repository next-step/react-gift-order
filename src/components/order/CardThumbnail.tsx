import styled from "@emotion/styled";
import type { Card } from "@/types/card";

type CardThumbnailProps = {
  card: Card;
  isSelected: boolean;
  onClick: () => void;
};

const CardThumbnail = ({ card, isSelected, onClick }: CardThumbnailProps) => {
  return (
    <CardDiv onClick={onClick} isSelected={isSelected}>
      <Img src={card.thumbUrl} alt={card.defaultTextMessage} />
    </CardDiv>
  );
};
export default CardThumbnail;

const CardDiv = styled.div<{ isSelected: boolean }>`
  flex: 0 0 auto;
  overflow: hidden;
  width: 82px;
  height: 56px;
  border-radius: 0.5rem;
  border: 3px solid transparent;
  cursor: pointer;

  border: ${({ isSelected, theme }) =>
    isSelected && `3px solid ${theme.colors.gray.gray900}`};
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
