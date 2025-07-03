import styled from "@emotion/styled";
import { cardTempleteMockData } from "@src/mock/cardTempleteMockData";
import theme from "@src/styles/kakaoTheme";
import { useState } from "react";

function CardSelector() {
  const cardTemplete = cardTempleteMockData;
  const [selectedCard, setSelectedCard] = useState<number>(0);
  return (
    <CardSelectorWrapper>
      <CardThumbnailWrapper>
        {cardTemplete.map((c, i) => {
          return (
            <CardThumbnail
              onClick={() => setSelectedCard(i)}
              key={c.id}
              src={c.thumbUrl}
              alt="card"
              selected={selectedCard === i}
            />
          );
        })}
      </CardThumbnailWrapper>
      <CardImage src={cardTemplete[selectedCard].imageUrl} alt="card" />
      <MessegeArea placeholder="메세지를 입력해주세요." />
    </CardSelectorWrapper>
  );
}

const CardSelectorWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: white;
`;

const CardThumbnail = styled.img<{ selected: boolean }>`
  border-radius: 10px;
  border: ${({ selected }) => (selected ? "2px solid black" : "none")};
`;

const CardImage = styled.img`
  border-radius: 10px;
  margin-left: 20%;
  margin-right: 20%;
  box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.35);
`;

const CardThumbnailWrapper = styled.div`
  height: 75px;
  padding: 10px;
  display: flex;
  gap: 10px;
  overflow-x: scroll;
`;

const MessegeArea = styled.textarea`
  margin: 20px;
  flex: 1;
  border: 1px solid ${theme.colors.gray.gray500};
  border-radius: 10px;
  background-color: transparent;
  padding: 10px;
  outline: none;
  transition: border-bottom 0.25s ease;

  &:focus {
    border: 1px solid ${theme.colors.gray.gray700};
  }
`;

export default CardSelector;
