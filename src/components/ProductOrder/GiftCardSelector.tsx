import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { orderData } from '@/data/ORDER_DATA';

export interface OrderItem {
  id: number;
  thumbUrl: string;
  imageUrl: string;
  defaultTextMessage: string;
}

const GiftCardSelector = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const selectedCard = orderData[selectedCardIndex];
  const [message, setMessage] = useState(selectedCard.defaultTextMessage);

  useEffect(() => {
    setMessage(selectedCard.defaultTextMessage);
  }, [selectedCard]);

  const handleCardSelect = (index: number) => {
    setSelectedCardIndex(index);
  };

  return (
    <>
      <Container>
        <CardSlider>
          {orderData.map((card, index) => (
            <CardItem
              key={card.id}
              isSelected={index === selectedCardIndex}
              onClick={() => handleCardSelect(index)}
            >
              <CardImage src={card.thumbUrl} />
            </CardItem>
          ))}
        </CardSlider>
      </Container>

      <SelectedCardPreview>
        <CardFrame>
          <PreviewImage src={selectedCard.imageUrl} />
        </CardFrame>

        <CardMessage
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </SelectedCardPreview>
    </>
  );
};

export default GiftCardSelector;

const Container = styled.div`
  background: white;
  padding: 20px 0;
  margin-bottom: 10px;
`;

const CardSlider = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 0 20px;
  gap: 10px;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CardItem = styled.div<{ isSelected: boolean }>`
  flex-shrink: 0;
  width: 76px;
  height: 50px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid ${(props) => (props.isSelected ? '#fee500' : 'transparent')};
  transition: border-color 0.2s;

  &:hover {
    border-color: ${(props) => (props.isSelected ? '#fee500' : '#ddd')};
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SelectedCardPreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 20px;
  margin-bottom: 10px;
  justify-content: center;
`;

const CardFrame = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const CardMessage = styled.input`
  width: 688px;
  height: 45px;
  padding: 10px;
  margin-top: 40px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  font-size: ${({ theme }) => theme.typography.fontSizes.label1};
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
