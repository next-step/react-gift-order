import styled from "@emotion/styled";
import { GENDER_FILTERS, type GenderType } from "@/constants/ranking";

type RankingFilterProps = {
  selected: GenderType;
  onChange: (filter: GenderType) => void;
};

export const RankingFilter = ({ selected, onChange }: RankingFilterProps) => {
  return (
    <Wrapper>
      {GENDER_FILTERS.map((filter) => (
        <FilterButton
          key={filter}
          active={selected === filter}
          onClick={() => onChange(filter)}
        >
          {filter}
        </FilterButton>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  overflow-x: auto;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 20px;
  border: 1px solid
    ${({ theme, active }) =>
      active
        ? theme.colors.colorScale.gray.gray800
        : theme.colors.semantic.border.default};
  background-color: ${({ theme, active }) =>
    active
      ? theme.colors.colorScale.gray.gray800
      : theme.colors.semantic.background.default};

  color: ${({ theme, active }) =>
    active
      ? theme.colors.semantic.background.default
      : theme.colors.semantic.text.default};
`;
