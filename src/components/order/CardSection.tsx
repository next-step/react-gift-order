import styled from "@emotion/styled";
import { cards } from "@/data/card";
import CardItem from "@/components/order/CardItem";
import CardGif from "@/components/order/CardGif";
import type { Card } from "@/types/card";
import CardTextarea from "./CardTextarea";

type CardSectionProps = {
  selectedCard: Card;
  setSelectedCard: (card: Card) => void;
  messageInput: {
    value: string;
    setValue: (value: string) => void;
    error: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur: () => void;
  };
};

const CardSection = ({
  selectedCard,
  setSelectedCard,
  messageInput,
}: CardSectionProps) => {
  return (
    <Section>
      <CardList>
        {cards.map(card => (
          <CardItem
            key={card.id}
            card={card}
            isSelected={card.id === selectedCard.id}
            onClick={() => setSelectedCard(card)}
          />
        ))}
      </CardList>
      <CardGif selectedCard={selectedCard} />
      <CardTextarea messageInput={messageInput} />
    </Section>
  );
};

export default CardSection;

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.semantic.background.default};
`;

const CardList = styled.div`
  padding-top: ${({ theme }) => theme.spacing.spacing3};
  display: flex;
  overflow: scroll auto;
  flex-wrap: nowrap;
  gap: ${({ theme }) => theme.spacing.spacing1};
`;
