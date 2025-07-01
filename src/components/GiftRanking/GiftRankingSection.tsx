import { useState } from 'react';
import { Section, Heading } from '@/components/GiftRanking/GiftRanking.styles';
import GiftRankingFilter from '@/components/GiftRanking/GiftRankingFilter';
import GiftRankingGrid from '@/components/GiftRanking/GiftRankingGrid';
import { categoryTabs, sortTabs } from '@/components/GiftRanking/mockItem';

type Category = typeof categoryTabs[number];
type Sort = typeof sortTabs[number];

const GiftRankingSection = () => {
  const getInitialCategory = (): Category => {
    const stored = localStorage.getItem('selectedCategory');
    return categoryTabs.includes(stored as Category) ? (stored as Category) : '전체';
  };

  const getInitialSort = (): Sort => {
    const stored = localStorage.getItem('selectedSort');
    return sortTabs.includes(stored as Sort) ? (stored as Sort) : '받고 싶어한';
  };

  const [selectedCategory, setSelectedCategory] = useState<Category>(getInitialCategory);
  const [selectedSort, setSelectedSort] = useState<Sort>(getInitialSort);

  return (
    <Section>
      <Heading>실시간 급상승 선물랭킹</Heading>
      <GiftRankingFilter
        selectedCategory={selectedCategory}
        selectedSort={selectedSort}
        onChangeCategory={(tab) => {
          setSelectedCategory(tab);
          localStorage.setItem('selectedCategory', tab);
        }}
        onChangeSort={(tab) => {
          setSelectedSort(tab);
          localStorage.setItem('selectedSort', tab);
        }}
      />
      <GiftRankingGrid />
    </Section>
  );
};

export default GiftRankingSection;