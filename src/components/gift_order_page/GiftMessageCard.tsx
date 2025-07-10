import styled from '@emotion/styled';

interface GiftMessageCardType {
  id: number;
  image: string;
  selectedCardId: number;
  setSelectedCardId: React.Dispatch<React.SetStateAction<number>>;
}

const Border = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  width: 5.08rem;
  height: 3.46rem;
  background-color: ${({ isSelected }) => (isSelected ? '#000000' : '#FFFFFF')};
  border-radius: 0.5rem;
  margin-left: 0.15rem;
  margin-right: 0.15rem;
`;

const Card = styled.div<{ image: string }>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
  width: 4.7rem;
  height: 3.1rem;
  border-radius: 0.3rem;
  background-image: url(${({ image }) => image});
  background-size: contain;
`;

export const GiftMessageCard = ({
  id,
  image,
  selectedCardId,
  setSelectedCardId,
}: GiftMessageCardType) => {
  return (
    <Border isSelected={id === selectedCardId}>
      <Card
        image={image}
        onClick={() => {
          setSelectedCardId(id);
        }}
      />
    </Border>
  );
};
