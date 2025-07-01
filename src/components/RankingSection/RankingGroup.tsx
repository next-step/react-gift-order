import styled from '@emotion/styled';
import { useSearchParams } from 'react-router-dom';
import { mockProducts } from '@/data/products';
import RankingFilter from '@/components/RankingSection/RankingFilter';
import RankingSort from '@/components/RankingSection/RankingSort';
import ProductGrid from '@/components/RankingSection/ProductGrid';
import ExpandButton from '@/components/RankingSection/ExpandButton';
import { useState } from 'react';

const INITIAL_VISIBLE_COUNT = 6;

const RankingGroup = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const [searchParams, setSearchParams] = useSearchParams();

  const targetType = searchParams.get('targetType') || 'ALL';
  const rankType = searchParams.get('rankType') || 'MANY_WISH';

  const handleFilterChange = (value: string) => {
    searchParams.set('targetType', value);
    setSearchParams(searchParams);
  };

  const handleSortChange = (value: string) => {
    searchParams.set('rankType', value);
    setSearchParams(searchParams);
  };

  const isExpanded = visibleCount === mockProducts.length;
  const toggleVisibleCount = () => {
    setVisibleCount(isExpanded ? INITIAL_VISIBLE_COUNT : mockProducts.length);
  };

  return (
    <Section>
      <Title>실시간 급상승 선물랭킹</Title>
      <RankingFilter
        selectedFilter={targetType}
        onSelect={handleFilterChange}
      />
      <RankingSort selectedSort={rankType} onSelect={handleSortChange} />
      <ProductGrid
        products={
          isExpanded
            ? mockProducts
            : mockProducts.slice(0, INITIAL_VISIBLE_COUNT)
        }
      />
      <ExpandButton isExpanded={isExpanded} onToggle={toggleVisibleCount} />
    </Section>
  );
};

export default RankingGroup;

const Section = styled.section`
  padding: ${({ theme }) => `${theme.spacing[0]} ${theme.spacing[4]}`};
  margin-bottom: ${({ theme }) => theme.spacing[5]};
`;

const Title = styled.h3`
  ${({ theme }) => theme.typography.title.title1Bold};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;
