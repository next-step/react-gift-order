import styled from '@emotion/styled';
import { colors, typography, spacing, borderRadius } from '@/styles/tokens';
import type { Filter } from '@/types/';

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: ${spacing.md};
  padding: ${spacing.lg};
`;

const FilterButton = styled.button<{ active: boolean }>`
  background: ${(props) => (props.active ? colors.primary : colors.gray200)};
  color: ${(props) => (props.active ? colors.white : colors.gray700)};
  border: none;
  border-radius: ${borderRadius.xl};
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.medium};
  padding: ${spacing.sm} ${spacing.lg};
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  &:hover {
    background: ${(props) => (props.active ? colors.primary : colors.gray300)};
  }
`;

interface FilterButtonsProps {
  filters: readonly Filter[];
  activeFilter: string;
  onFilterChange: (filterId: string) => void;
}

export const FilterButtons = ({ filters, activeFilter, onFilterChange }: FilterButtonsProps) => {
  return (
    <FilterContainer>
      {filters.map((filter) => (
        <FilterButton
          key={filter.id}
          active={activeFilter === filter.id}
          onClick={() => onFilterChange(filter.id)}
        >
          {filter.label}
        </FilterButton>
      ))}
    </FilterContainer>
  );
};
