import { useState } from 'react';
import styled from '@emotion/styled';
import { theme } from '../styles/theme';
import { IconFilterItem } from './common/IconFilterItem';

const filters = [
  { key: 'all', label: '전체', icon: 'ALL' },
  { key: 'female', label: '여성', icon: '👩' },
  { key: 'male', label: '남성', icon: '👨' },
  { key: 'teen', label: '청소년', icon: '🧒' },
] as const;

type FilterKey = (typeof filters)[number]['key'];

const tabOptions = ['받고 싶어한', '많이 선물한', '위시로 받은'];

const LOCAL_FILTER_KEY = 'gift_filter_selected';
const LOCAL_TAB_KEY = 'gift_tab_selected';

const IconFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: ${theme.typography.spacing.spacing4} 0px;
`;

const Container = styled.div`
  width: 100%;
  padding: 24px 0px;
  background-color: ${theme.colors.backgroundDefault};
`;

const Heading = styled.h2`
  ${theme.typography.title2Bold};
  margin-bottom: 16px;
  padding-left: 8px;
`;

const TabBar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${theme.colors.blue100};
  border-radius: 8px;
  overflow: hidden;
`;

const TabButton = styled.button<{ selected: boolean }>`
  flex: 1;
  padding: 12px 0;
  text-align: center;
  ${theme.typography.body2Bold};
  color: ${({ selected }) =>
    selected ? theme.colors.blue700 : theme.colors.blue300};
  background-color: transparent;
  border: none;
`;

function getValidStoredValue<T>(
  key: string,
  validValues: T[],
  defaultValue: T
): T {
  const stored = localStorage.getItem(key);
  return validValues.includes(stored as T)
    ? (stored as T)
    : defaultValue;
}

export default function GiftRankingFilter() {
  const [selected, setSelected] = useState<FilterKey>(() =>
    getValidStoredValue(
      LOCAL_FILTER_KEY,
      filters.map(f => f.key),
      filters[0].key
    )
  );

  const [selectedTab, setSelectedTab] = useState(() =>
    getValidStoredValue(LOCAL_TAB_KEY, tabOptions, tabOptions[0])
  );

  const handleFilterChange = (key: FilterKey) => {
    setSelected(key);
    localStorage.setItem(LOCAL_FILTER_KEY, key);
  };

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
    localStorage.setItem(LOCAL_TAB_KEY, tab);
  };

  return (
    <Container>
      <Heading>실시간 급상승 선물랭킹</Heading>

      <IconFilterContainer>
        {filters.map(({ key, label, icon }) => (
          <IconFilterItem
            key={key}
            label={label}
            icon={icon}
            selected={selected === key}
            onClick={() => handleFilterChange(key)}
          />
        ))}
      </IconFilterContainer>

      <TabBar>
        {tabOptions.map(tab => (
          <TabButton
            key={tab}
            selected={selectedTab === tab}
            onClick={() => handleTabChange(tab)}
          >
            {tab}
          </TabButton>
        ))}
      </TabBar>
    </Container>
  );
}
