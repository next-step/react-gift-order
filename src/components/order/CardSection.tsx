import styled from "@emotion/styled";
import { cards } from "@/data/card";
import CardItem from "@/components/order/CardItem";
import CardGif from "@/components/order/CardGif";
import { useEffect, useState } from "react";
import type { Card } from "@/types/card";
import CardTextarea from "./CardTextarea";

const CardSection = () => {
  const [selectedCard, setSelectedCard] = useState<Card>(cards[0]);
  const [cardMessage, setCardMessage] = useState<string>(
    selectedCard.defaultTextMessage,
  );

  useEffect(() => {
    setCardMessage(selectedCard.defaultTextMessage);
  }, [selectedCard]);

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
      <CardTextarea message={cardMessage} onChange={setCardMessage} />
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
