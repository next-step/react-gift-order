import SegmentedControl from '@/components/common/SegmentedControl';

interface RankingSortProps {
  selectedSort: string;
  onSelect: (value: string) => void;
}

const options = [
  { label: '받고 싶어한', value: 'MANY_WISH' },
  { label: '많이 선물한', value: 'MANY_RECEIVE' },
  { label: '위시로 받은', value: 'MANY_WISH_RECEIVE' },
];

const RankingSort = ({ selectedSort, onSelect }: RankingSortProps) => {
  return (
    <SegmentedControl
      options={options}
      selectedValue={selectedSort}
      onSelect={onSelect}
    />
  );
};

export default RankingSort;
