import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import GiftItemCard from './GiftItemCard';
import GiftRankingFilter from './GiftRankingFilter';
import GiftRankingTab from './GiftRankingTab';
import { giftItems } from '@/mock/giftItems';
import type { TabValue } from '@/constants/RankingTabs';

type GiftItem = typeof giftItems[number];
const INITIAL_VISIBLE_COUNT = 6;

const GiftRankingGrid = () => {
  const [showAll, setShowAll] = useState(false);

  const [selectedTab, setSelectedTab] = useState<TabValue>(() => {
    const saved = localStorage.getItem('selectedSubTab');
    return saved === 'wish' || saved === 'sent' || saved === 'wishlist'
      ? saved
      : 'wish';
  });

  useEffect(() => {
    localStorage.setItem('selectedSubTab', selectedTab);
  }, [selectedTab]);

  const [selectedFilter, setSelectedFilter] = useState<'all' | 'female' | 'male' | 'teen'>(() => {
    const saved = localStorage.getItem('selectedFilter');
    return saved === 'all' || saved === 'female' || saved === 'male' || saved === 'teen'
      ? saved
      : 'all';
  });

  useEffect(() => {
    localStorage.setItem('selectedFilter', selectedFilter);
  }, [selectedFilter]);

  const visibleItems = showAll ? giftItems : giftItems.slice(0, INITIAL_VISIBLE_COUNT);

  return (
    <Wrapper>
      <Title>실시간 급상승 선물랭킹</Title>

      <GiftRankingFilter onChange={setSelectedFilter} />
      <GiftRankingTab selected={selectedTab} onChange={setSelectedTab} />

      <Container>
        {visibleItems.map((item: GiftItem) => (
          <GiftItemCard key={item.id} item={item} />
        ))}
      </Container>

      <ToggleButton onClick={() => setShowAll(prev => !prev)}>
        {showAll ? '접기' : '더보기'}
      </ToggleButton>
    </Wrapper>
  );
};

export default GiftRankingGrid;

const Wrapper = styled.div`
  padding: 24px 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.textColors.default};
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`;

const ToggleButton = styled.button`
  margin-top: 16px;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.gray200};
  color: ${({ theme }) => theme.textColors.default};
  border: 1px solid ${({ theme }) => theme.borderColors.default};
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
`;
