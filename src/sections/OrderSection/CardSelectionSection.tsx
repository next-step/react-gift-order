import styled from '@emotion/styled';
import { messageCardData } from '@/mocks/messageCardData';

const Section = styled.section`
  margin-top: ${({ theme }) => theme.spacing.spacing10};
`;

const InnerContainer = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.spacing4};
`;

const ScrollContainer = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

const CardList = styled.div`
  display: flex;
  gap: 12px;
  width: max-content;
`;

const CardImage = styled.img<{ isSelected: boolean }>`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: ${({ isSelected, theme }) =>
        isSelected ? `2px solid ${theme.color.semantic.kakaoBrown}` : 'none'};
  cursor: pointer;
  flex-shrink: 0;
`;

const PreviewImage = styled.img`
  display: block;
  width: 240px;
  height: auto;
  margin: ${({ theme }) => theme.spacing.spacing6} auto;
`;

interface CardSelectionSectionProps {
    selectedCardId: number;
    onSelect: (id: number) => void;
    setMessage: (message: string) => void;
}

export default function CardSelectionSection({
    selectedCardId,
    onSelect,
    setMessage,
}: CardSelectionSectionProps) {
    const selectedCard = messageCardData.find((card) => card.id === selectedCardId);

    const handleSelect = (id: number, message: string) => {
        onSelect(id);
        setMessage(message);
    };

    return (
        <Section>
            <InnerContainer>
                <ScrollContainer>
                    <CardList>
                        {messageCardData.map((card) => (
                            <CardImage
                                key={card.id}
                                src={card.imageUrl}
                                alt={card.defaultTextMessage}
                                isSelected={card.id === selectedCardId}
                                onClick={() => handleSelect(card.id, card.defaultTextMessage)}
                            />
                        ))}
                    </CardList>
                </ScrollContainer>
                {selectedCard && (
                    <>
                        <PreviewImage src={selectedCard.imageUrl} alt={selectedCard.defaultTextMessage} />
                    </>
                )}
            </InnerContainer>
        </Section>
    );
}
