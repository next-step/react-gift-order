import styled from '@emotion/styled';

interface RankingFilterProps {
  selectedFilter: string;
  onSelect: (label: string) => void;
}

const filters = [
  { emoji: 'ALL', label: '전체', value: 'ALL' },
  { emoji: '👩🏻', label: '여성이', value: 'FEMALE' },
  { emoji: '👨🏻', label: '남성이', value: 'MALE' },
  { emoji: '👦🏻', label: '청소년이', value: 'TEEN' },
];

const RankingFilter = ({ selectedFilter, onSelect }: RankingFilterProps) => {
  return (
    <FilterWrapper>
      {filters.map(filter => {
        const isSelected = selectedFilter === filter.value;
        return (
          <FilterButton
            key={filter.value}
            onClick={() => onSelect(filter.value)}
          >
            <Emoji isSelected={isSelected}>{filter.emoji}</Emoji>
            <Label isSelected={isSelected}>{filter.label}</Label>
          </FilterButton>
        );
      })}
    </FilterWrapper>
  );
};

export default RankingFilter;

const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const FilterButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[2]};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  border: none;
  background-color: ${({ theme }) => theme.color.semantic.background.default};
  cursor: pointer;
`;

const Emoji = styled.div<{ isSelected: boolean }>`
  background: ${({ theme, isSelected }) =>
    isSelected ? theme.color.blue[700] : theme.color.blue[200]};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.color.gray[0] : theme.color.blue[400]};
  border-radius: 16px;
  width: 2.75rem;
  height: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.typography.subtitle.subtitle2Bold};
`;

const Label = styled.p<{ isSelected: boolean }>`
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.color.blue[700] : theme.color.semantic.text.sub};
  ${({ theme, isSelected }) =>
    isSelected
      ? theme.typography.subtitle.subtitle2Bold
      : theme.typography.subtitle.subtitle2Regular};
  margin: 0;
  text-align: left;
`;
