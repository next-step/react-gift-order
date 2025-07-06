import GiftItem from '@/components/gift-ranking/GiftItem';
import { GiftList } from '@/components/gift-ranking/GiftList';
import { GridWrapper } from '@/components/gift-ranking/Grid.style';

const GiftGrid = () => {
  return (
    <GridWrapper>
      {GiftList.map((gift) => (
        <GiftItem key={gift.rank} {...gift} />
      ))}
    </GridWrapper>
  );
};

export default GiftGrid;
