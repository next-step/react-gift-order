import GiftItem from '@/Components/GiftRanking/GiftItem';
import { GiftList } from '@/Components/GiftRanking/GiftList';
import { GridWrapper } from '@/Components/GiftRanking/GridStyle';


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
