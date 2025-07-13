import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { CardData } from '@/mock-data/CardData';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Card = styled.div`
  width: 100%;
  overflow-x: auto;
  display: flex;
  flex-wrap: nowrap;
  gap: 4px;
`;

interface ThumbNailProps {
  isSelected: boolean;
}

const ThumbNail = styled.img<ThumbNailProps>`
  flex: 0 0 auto;
  width: 82px;
  height: 56px;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 3px solid
    ${({ isSelected, theme }) => (isSelected ? theme.color.semantic.border.default : 'transparent')};
  cursor: pointer;
`;

const ImageUrl = styled.div`
  width: 100%;
  max-width: 360px;
  height: 240px;
  overflow: hidden;
  border-radius: 12px;
  margin: 16px auto;
  box-shadow: ${({ theme }) => theme.color.gray.gray700} 0px 39px 20px -30px;
`;
interface CardSelectProps {
  setTemplateMessage: (message: string) => void;
}

const CardSelect = ({ setTemplateMessage }: CardSelectProps) => {
  const [selectedId, setSelectedId] = useState<number>(CardData[0].id);

  useEffect(() => {
    setTemplateMessage(CardData[0].defaultTextMessage);
  }, [setTemplateMessage]);

  const handleSelectCard = (id: number) => {
    const selectedCard = CardData.find((card) => card.id === id);
    if (selectedCard) {
      setSelectedId(id);
      setTemplateMessage(selectedCard.defaultTextMessage);
    }
  };

  const selectedCard = CardData.find((card) => card.id === selectedId) ?? CardData[0];

  return (
    <Wrapper>
      <Card>
        {CardData.map((card) => (
          <ThumbNail
            key={card.id}
            src={card.thumbUrl}
            alt="카드 썸네일"
            isSelected={selectedId === card.id}
            onClick={() => handleSelectCard(card.id)}
          />
        ))}
      </Card>

      <ImageUrl>
        <img src={selectedCard.imageUrl} alt="선택한 카드 이미지" />
      </ImageUrl>
    </Wrapper>
  );
};

export default CardSelect;
