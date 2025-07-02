import styled from '@emotion/styled';
import { Button } from '@/components/common';

interface FilterOption {
  value: string;
  label: string;
}

interface FilterButtonGroupProps {
  type: 'target' | 'rank';
  options: readonly FilterOption[];
  selected: string;
  onChange: (value: string) => void;
}

const FilterContainer = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.spacing2};
  margin-bottom: ${(props) => props.theme.spacing.spacing4};
`;

const FilterButtonGroup = ({
  options,
  selected,
  onChange,
}: FilterButtonGroupProps) => {
  return (
    <FilterContainer>
      {options.map((option) => (
        <Button
          key={option.value}
          variant="toggle"
          size="sm"
          active={selected === option.value}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </Button>
      ))}
    </FilterContainer>
  );
};

export default FilterButtonGroup;
