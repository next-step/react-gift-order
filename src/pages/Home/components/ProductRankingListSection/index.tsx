import { Typography } from '@/components/common/Typography';
import type { ProductRankingFilterOption } from '@/types/products';
import styled from '@emotion/styled';
import { useState } from 'react';
import { ProductRankingFilter } from './RankingFilter';
import { HorizontalSpacing } from '@/components/common/Spacing/HorizontalSpacing';
import { ProductRankingList } from './ProductRankingList';
import { useSearchParams } from 'react-router';

export const ProductRankingListSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const targetType = (searchParams.get('targetType') ??
    'ALL') as ProductRankingFilterOption['targetType'];
  const rankType = (searchParams.get('rankType') ??
    'MANY_WISH') as ProductRankingFilterOption['rankType'];

  const [filterOption, setFilterOption] = useState<ProductRankingFilterOption>({
    targetType,
    rankType,
  });

  const handleFilterOptionChange = (option: ProductRankingFilterOption) => {
    setFilterOption(option);

    searchParams.set('targetType', option.targetType);
    searchParams.set('rankType', option.rankType);
    setSearchParams(searchParams, {
      replace: true,
    });
  };

  return (
    <Section>
      <Typography as='h3' variant='title1Bold' color='default' width='100%'>
        실시간 급상승 선물랭킹
      </Typography>
      <HorizontalSpacing size='spacing5' />
      <ProductRankingFilter option={filterOption} onOptionChange={handleFilterOptionChange} />
      <HorizontalSpacing size='spacing4' />
      <ProductRankingList />
    </Section>
  );
};

const Section = styled.section(({ theme }) => ({
  padding: `0 ${theme.spacing.spacing4}`,
  width: '100%',
}));
