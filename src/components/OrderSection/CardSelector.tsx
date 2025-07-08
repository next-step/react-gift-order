import styled from '@emotion/styled';
import { messageCards } from '@/data/messageCards';

interface CardSelectorProps {
  selectedCardId: number;
  onSelect: (cardId: number) => void;
}

const CardSelector = ({ selectedCardId, onSelect }: CardSelectorProps) => {
  const selectedCard = messageCards.find(card => card.id === selectedCardId)!;

  return (
    <Wrapper>
      <CardSlider>
        {messageCards.map(card => (
          <CardImage
            key={card.id}
            src={card.imageUrl}
            isSelected={card.id === selectedCardId}
            onClick={() => onSelect(card.id)}
          />
        ))}
      </CardSlider>

      <PreviewCard>
        <SelectedImage src={selectedCard.imageUrl} alt="선택된 메시지 카드" />
      </PreviewCard>
    </Wrapper>
  );
};

export default CardSelector;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[0]};
  padding: ${({ theme }) => theme.spacing[4]};
  gap: ${({ theme }) => theme.spacing[5]};
`;

const CardSlider = styled.div`
  display: flex;
  overflow-x: auto;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} 0;
`;

const CardImage = styled.img<{ isSelected: boolean }>`
  height: 56px;
  border-radius: 8px;
  cursor: pointer;
  flex-shrink: 0;
  border: ${({ isSelected, theme }) =>
    isSelected ? `2px solid ${theme.color.semantic.kakaoYellow}` : 'none'};
`;

const PreviewCard = styled.div`
  display: flex;
  justify-content: center;
`;

const SelectedImage = styled.img`
  width: 100%;
  max-width: 360px;
  max-height: 300px;
  border-radius: 16px;
  object-fit: contain;
`;
