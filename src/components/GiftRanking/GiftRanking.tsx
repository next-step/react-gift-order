import { useState } from 'react';
import { productList } from '@/data/productList';
import {
  CategoryFilter,
  MoreButton, Grid, Section, Title,
  SortOptions,
} from '@/components/GiftRanking/GiftRanking.styles';
import { categories, sorts, INITIAL_VISIBLE_GIFT_COUNT } from "@/constants/RankingConstants";
import FilterButton from '@/components/Common/FilterButton/FilterButton';
import SortSpan from "@/components/Common/SortOption/SortOption"
import RankingCard from '@/components/Common/RankingCard/RankingCard';
import usePersistedState from '@/hooks/usePersistedState.tsx';

export default function GiftRanking() {
  const [showCount, setShowCount] = useState(INITIAL_VISIBLE_GIFT_COUNT); // 초기에 6개 보여줌
  const [category, setCategory] = usePersistedState("giftRankingCategory", "전체");
  const [sort, setSort] = usePersistedState("giftRankingSort", "받고 싶어한");

  const handleToggle = () => {
    setShowCount(prev => (prev === 6 ? 21 : 6));
  };

  const expandedList = Array(21).fill(productList[0]);

  return (
    <Section>
      <Title>실시간 급상승 선물랭킹</Title>

      <CategoryFilter>
        {categories.map(({ label, icon }) => (
          <FilterButton
            key={label}
            label={label}
            icon={icon}
            isActive={category === label}
            onClick={() => setCategory(label)}
          />
        ))}
      </CategoryFilter>

      <SortOptions>
        {sorts.map(option => (
          <SortSpan
            key={option}
            label={option}
            isActive={sort === option}
            onClick={() => setSort(option)}
          />
        ))}
      </SortOptions>

      <Grid>
        {expandedList.slice(0, showCount).map((item, index) => (
          <RankingCard
            key={item.name + index}
            rank={index + 1}
            image={item.imageURL}
            name={item.name}
            price={item.price.sellingPrice}
            brand={item.brandInfo.name}
          />
        ))}
      </Grid>

      <MoreButton onClick={handleToggle}>
        {showCount === INITIAL_VISIBLE_GIFT_COUNT ? '더보기' : '접기'}
      </MoreButton>
    </Section>
  );
}
