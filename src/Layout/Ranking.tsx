import SexContainer from '@/pages/SexContainer';
import CategoryContainer from '@/pages/CategoryContainer';
import ItemContainer from '@/pages/ItemContainer';
import { mockItem } from '@/mocks/mockItem';
import { RankingContainer, RankingTitle } from '@/styles/RankingStyle.styles.ts';

function Ranking() {
  return (
    <RankingContainer>
      <RankingTitle>실시간 급상승 선물랭킹</RankingTitle>
      <SexContainer />
      <CategoryContainer />
      <ItemContainer itemList={mockItem} />
    </RankingContainer>
  );
}

export default Ranking;
