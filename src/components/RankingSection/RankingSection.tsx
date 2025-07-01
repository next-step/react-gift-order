import { useState } from 'react';
import styled from '@emotion/styled';
import { colors, spacing } from '@/styles/tokens';
import { FilterButtons } from '@/components/RankingSection/FilterButtons';
import { ProductGrid } from '@/components/RankingSection/ProductGrid';
import { TabNavigation } from '@/components/RankingSection/TabNavigation';
import { Button } from '@/components/common/Button';
import { tabs, filters, products } from '@/mock/mockData';
import { useSearchParams } from 'react-router';

const RankingHeader = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.gray900};
  padding: ${spacing.xl} ${spacing.lg} ${spacing.md};
  margin: 0;
`;

const ButtonContainer = styled.div`
  padding: ${spacing.xl} ${spacing.lg};
`;

export const RankingSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get('tab') || 'all');
  const [activeFilter, setActiveFilter] = useState(searchParams.get('filter') || 'wanted');
  const [isExpanded, setIsExpanded] = useState(false);
  const itemsPerPage = 6;
  const handleToggleView = () => {
    setIsExpanded(!isExpanded);
  };

  const handleTabChange = (newTab: string) => {
    setActiveTab(newTab);
    searchParams.set('tab', newTab);
    setSearchParams(searchParams);
  };

  const handleFilterChange = (newFilter: string) => {
    setActiveFilter(newFilter);
    searchParams.set('filter', newFilter);
    setSearchParams(searchParams);
  };

  const displayedProducts = isExpanded ? products : products.slice(0, itemsPerPage);
  const buttonText = isExpanded ? '접기' : '더보기';

  return (
    <>
      <RankingHeader>실시간 급상승 선물랭킹</RankingHeader>
      <TabNavigation tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
      <FilterButtons
        filters={filters}
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />

      <ProductGrid
        products={displayedProducts}
        onProductClick={(product) => console.log('제품클릭', product)}
      />
      <ButtonContainer>
        <Button onClick={handleToggleView}>{buttonText}</Button>
      </ButtonContainer>
    </>
  );
};
