import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from '@emotion/styled';
import type { Product } from '@/types/Product';
import { products } from '@/mock/productsData';
import RankingItem from './RankingItem';

const Wrapper = styled.section`
  margin-top: ${({ theme }) => theme.spacing.spacing10};
  padding: 0 ${({ theme }) => theme.spacing.spacing4};
`;

const Title = styled.h2`
  ${({ theme }) => theme.typography.title1Bold};
  margin-bottom: ${({ theme }) => theme.spacing.spacing5};
`;

/* 필터 */
const GenderRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.spacing2};
  justify-content: space-between;
`;

const GenderButton = styled.button<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0;
  background: none;
  cursor: pointer;
`;

const IconBox = styled.div<{ active: boolean }>`
  width: 44px;
  height: 44px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.typography.body2Bold};
  background: ${({ active, theme }) => (active ? theme.colors.blue[700] : theme.colors.blue[100])};
  color: ${({ active, theme }) => (active ? '#fff' : theme.colors.blue[400])};
  transition: background-color 200ms;
`;

const Label = styled.span<{ active: boolean }>`
  ${({ active, theme }) => (active ? theme.typography.body2Bold : theme.typography.body2Regular)};
  margin-top: ${({ theme }) => theme.spacing.spacing1};
  color: ${({ active, theme }) => (active ? theme.colors.blue[700] : theme.colors.gray[700])};
`;

/* 탭 */
const TabRow = styled.div`
  display: flex;
  margin: ${({ theme }) => theme.spacing.spacing4} 0;
  padding: ${({ theme }) => theme.spacing.spacing3} ${({ theme }) => theme.spacing.spacing4};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.blue[200]};
  background: ${({ theme }) => theme.colors.blue[100]};
`;

const TabBtn = styled.button<{ active: boolean }>`
  flex: 1 0 0;
  text-align: center;
  ${({ active, theme }) => (active ? theme.typography.body2Bold : theme.typography.body2Regular)};
  color: ${({ active, theme }) => (active ? theme.colors.blue[700] : theme.colors.blue[400])};
  cursor: pointer;
  border: none;
  background: none;
  transition:
    color 200ms,
    font-weight 200ms;
`;

/* 그리드 */
const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.spacing6} ${({ theme }) => theme.spacing.spacing2};
`;

const MoreBtn = styled.button`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.spacing8};
  margin-bottom: ${({ theme }) => theme.spacing.spacing10};
  padding: ${({ theme }) => theme.spacing.spacing3};
  border: 1px solid ${({ theme }) => theme.colors.gray[400]};
  border-radius: 4px;
  background: #fff;
  ${({ theme }) => theme.typography.body2Regular};
  cursor: pointer;
`;

const ageGenderFilters = [
  { key: 'all', icon: 'ALL', label: '전체' },
  { key: 'female', icon: '👩🏻', label: '여성이' },
  { key: 'male', icon: '👨🏻', label: '남성이' },
  { key: 'teen', icon: '👦🏻', label: '청소년이' },
];

const rankingTabs = [
  { key: 'want', label: '받고 싶어한' },
  { key: 'give', label: '많이 선물한' },
  { key: 'wish', label: '위시로 받은' },
];

export default function GiftRanking() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initGender = searchParams.get('gender') ?? 'all';
  const initType = searchParams.get('type') ?? 'want';

  const [filter, setFilter] = useState(initGender);
  const [tab, setTab] = useState(initType);
  const [collapsed, setCollapsed] = useState(true);

  const updateParams = (key: string, value: string) => {
    const next = new URLSearchParams(searchParams);
    next.set(key, value);
    setSearchParams(next, { replace: true });
  };

  const handleFilter = (key: string) => {
    setFilter(key);
    updateParams('gender', key);
  };
  const handleTab = (key: string) => {
    setTab(key);
    updateParams('type', key);
  };

  const visible: Product[] = collapsed ? products.slice(0, 6) : products;

  return (
    <Wrapper>
      <Title>실시간 급상승 선물랭킹</Title>

      {/* 필터 */}
      <GenderRow>
        {ageGenderFilters.map((f) => {
          const isActive = filter === f.key;
          return (
            <GenderButton key={f.key} active={isActive} onClick={() => handleFilter(f.key)}>
              <IconBox active={isActive}>{f.icon}</IconBox>
              <Label active={isActive}>{f.label}</Label>
            </GenderButton>
          );
        })}
      </GenderRow>

      {/* 탭 */}
      <TabRow>
        {rankingTabs.map((t) => (
          <TabBtn key={t.key} active={tab === t.key} onClick={() => handleTab(t.key)}>
            {t.label}
          </TabBtn>
        ))}
      </TabRow>

      {/* 상품 */}
      <Grid>
        {visible.map((item, index) => (
          <RankingItem key={item.id} item={item} rank={index + 1} />
        ))}
      </Grid>

      {/* 더보기 / 접기 */}
      <MoreBtn onClick={() => setCollapsed((c) => !c)}>{collapsed ? '더보기' : '접기'}</MoreBtn>
    </Wrapper>
  );
}
