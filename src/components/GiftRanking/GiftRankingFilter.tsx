import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

const filters = [
  { label: '전체', value: 'all', icon: '👥' },
  { label: '여성이', value: 'female', icon: '👩' },
  { label: '남성이', value: 'male', icon: '👨' },
  { label: '청소년이', value: 'teen', icon: '🧒' },
] as const;

type FilterValue = typeof filters[number]['value'];

interface GiftRankingFilterProps {
  onChange: (value: FilterValue) => void;
}

const GiftRankingFilter = ({ onChange }: GiftRankingFilterProps) => {
  const [selected, setSelected] = useState<FilterValue>(() => {
    return (localStorage.getItem('selectedFilter') as FilterValue) || 'all';
  });

  useEffect(() => {
    localStorage.setItem('selectedFilter', selected);
    onChange(selected);
  }, [selected, onChange]);

  return (
    <FilterContainer>
      {filters.map((filter) => (
        <FilterButton
          key={filter.value}
          selected={selected === filter.value}
          onClick={() => setSelected(filter.value)}
        >
          <span className="icon">{filter.icon}</span>
          <span className="label">{filter.label}</span>
        </FilterButton>
      ))}
    </FilterContainer>
  );
};

export default GiftRankingFilter;

const FilterContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;

const FilterButton = styled.button<{ selected: boolean }>`
  flex: 1;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.blue700 : theme.colors.blue100};
  color: ${({ theme, selected }) =>
    selected ? theme.colors.gray00 : theme.textColors.default};
  border: none;
  cursor: pointer;
  transition: 0.2s ease;

  .icon {
    font-size: 18px;
    margin-bottom: 4px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue300};
  }
`;
