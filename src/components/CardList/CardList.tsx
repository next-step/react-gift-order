import { Grid } from "@/components/CardList/CardList.style";
import Card from "@/components/Card/Card";

export interface CardListProps {
  cards: {
    id: number;
    imageUrl: string;
    brand: string;
    name: string;
    price: number;
  }[];
  onCardClick: (cardId: number) => void;
}

export default function CardList({ cards, onCardClick }: CardListProps) {
  return (
    <Grid>
      {cards.map((card, idx) => (
        <Card
          key={card.id}
          rank={idx + 1}
          imageUrl={card.imageUrl}
          brand={card.brand}
          name={card.name}
          price={card.price}
          onClick={onCardClick ? () => onCardClick(card.id) : undefined}
        />
      ))}
    </Grid>
  );
}
