import styled from "@emotion/styled";
import { cards } from "@/data/card";
import CardThumbnail from "@/components/order/CardThumbnail";
import CardImage from "@/components/order/CardImage";
import type { Card } from "@/types/card";
import CardTextarea from "./CardTextarea";
import { useFormContext } from "react-hook-form";
import { checkMessageError } from "@/utils/validation";

type CardSectionProps = {
  selectedCard: Card;
  setSelectedCard: (card: Card) => void;
};

const CardSection = ({ selectedCard, setSelectedCard }: CardSectionProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<{ message: string }>();

  return (
    <Section>
      <CardList>
        {cards.map(card => (
          <CardThumbnail
            key={card.id}
            card={card}
            isSelected={card.id === selectedCard.id}
            onClick={() => setSelectedCard(card)}
          />
        ))}
      </CardList>
      <CardImage selectedCard={selectedCard} />
      <CardTextarea
        {...register("message", {
          validate: value => checkMessageError(value),
        })}
        error={errors.message?.message}
      />
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
