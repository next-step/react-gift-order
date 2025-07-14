import { useState } from 'react';
import { productList } from '@/data/productList';
import {
  CategoryFilter,
  MoreButton, Grid, Section, Title,
  SortOptions,
} from '@/components/GiftRanking/GiftRanking.styles';
import { categories, sorts, INITIAL_VISIBLE_GIFT_COUNT, TOTAL_GIFT_COUNT } from '@/constants/RankingConstants';
import FilterButton from '@/components/Common/FilterButton/FilterButton';
import SortSpan from "@/components/Common/SortOption/SortOption"
import RankingCard from '@/components/Common/RankingCard/RankingCard';
import useSelectedState from '@/hooks/useLocalStorageState.ts';
import { useNavigate } from 'react-router-dom';
import { EXPANDED_LIST_STORAGE_ID } from '@/constants/storage.ts';

export default function GiftRanking() {
  const navigate = useNavigate();
  const [showCount, setShowCount] = useState(INITIAL_VISIBLE_GIFT_COUNT); // 초기에 6개 보여줌
  const [category, setCategory] = useSelectedState("giftRankingCategory", "전체");
  const [sort, setSort] = useSelectedState("giftRankingSort", "받고 싶어한");

  const handleToggle = () => {
    setShowCount(prev => (prev === INITIAL_VISIBLE_GIFT_COUNT ? TOTAL_GIFT_COUNT : INITIAL_VISIBLE_GIFT_COUNT));
  };

  const expandedList = Array(TOTAL_GIFT_COUNT).fill(productList[0]);
  localStorage.setItem(EXPANDED_LIST_STORAGE_ID, JSON.stringify(expandedList));

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
            onClick={() =>
              navigate(
                sessionStorage.getItem('splitedId')
                ?`/order/${index + 1}`
                : '/login', { state: { from: `/order/${index + 1}`}}
              )}
          />
        ))}
      </Grid>

      <MoreButton onClick={handleToggle}>
        {showCount === INITIAL_VISIBLE_GIFT_COUNT ? '더보기' : '접기'}
      </MoreButton>
    </Section>
  );
}
