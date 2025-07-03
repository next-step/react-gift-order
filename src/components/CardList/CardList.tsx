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
}

export default function CardList({ cards }: CardListProps) {
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
        />
      ))}
    </Grid>
  );
}
