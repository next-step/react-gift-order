import { useState } from 'react';
import { Grid, Button } from '@/components/GiftRanking/GiftRanking.styles';
import ProductCard from '@/components/GiftRanking/ProductCard';
import { mockItem } from '@/components/GiftRanking/mockItem';

const allItems = Array.from({ length: 21 }, (_, i) => ({
  ...mockItem,
  id: i + 1,
}));

const GiftRankingGrid = () => {
  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded ? allItems : allItems.slice(0, 6);

  return (
    <>
      <Grid>
        {visibleItems.map((item, index) => (
          <ProductCard
            key={item.id}
            rank={index + 1}
            imageURL={item.imageURL}
            brand={item.brand}
            name={item.name}
            price={item.price}
          />
        ))}
      </Grid>

      <Button onClick={() => setExpanded(prev => !prev)}>
        {expanded ? '접기' : '더보기'}
      </Button>
    </>
  );
};

export default GiftRankingGrid;