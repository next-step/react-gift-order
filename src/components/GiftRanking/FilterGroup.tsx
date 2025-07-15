import * as S from './GiftRankingSection.styles';

interface FilterGroupProps {
  items: string[];
  selected: string;
  onSelect: (item: string) => void;
}

const FilterGroup = ({ items, selected, onSelect }: FilterGroupProps) => {
  return (
    <S.FilterRow>
      {items.map((item) => (
        <S.FilterButton key={item} isActive={selected === item} onClick={() => onSelect(item)}>
          {item}
        </S.FilterButton>
      ))}
    </S.FilterRow>
  );
};

export default FilterGroup;
