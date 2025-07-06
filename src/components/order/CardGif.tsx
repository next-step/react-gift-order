import type { Card } from "@/types/card";
import styled from "@emotion/styled";

type CardGifProps = {
  selectedCard: Card;
};

const CardGif = ({ selectedCard }: CardGifProps) => {
  return (
    <CardDiv>
      <Img src={selectedCard.imageUrl} alt={selectedCard.defaultTextMessage} />
    </CardDiv>
  );
};

export default CardGif;

const CardDiv = styled.div`
  height: 272px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.spacing4};
`;

const Img = styled.img`
  height: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
