import { useState } from 'react';
import styled from '@emotion/styled';
import { CardData } from '@/components/order/CardData';

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

const MessageArea = styled.textarea`
  width: 100%;
  min-height: 20px !important;
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.color.semantic.text.default};
  line-height: 1.375rem;

  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.semantic.border.default};
`;

const CardSelect = () => {
  const [selectedId, setSelectedId] = useState<number>(CardData[0].id);
  const [message, setMessage] = useState<string>(CardData[0].defaultTextMessage);

  const handleSelectCard = (id: number) => {
    const selectedCard = CardData.find((card) => card.id === id);
    if (selectedCard) {
      setSelectedId(id);
      setMessage(selectedCard.defaultTextMessage);
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
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
        <img src={selectedCard.imageUrl} />
      </ImageUrl>

      <MessageArea
        value={message}
        onChange={handleMessageChange}
        placeholder="메시지를 입력하세요"
      />
    </Wrapper>
  );
};

export default CardSelect;
