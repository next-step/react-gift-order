import { TabGroup, Tab } from '@/Components/Filter/CategoryStyle';

const categoryOptions = ['받고 싶어한', '많이 선물한', '위시로 받은'];
interface CategoryProps {
  selectedCategory: string;
  onChange: (value: string) => void;
}

const Category = ({ selectedCategory, onChange }: CategoryProps) => {
  return (
    <TabGroup>
      {categoryOptions.map((option) => (
        <Tab
          key={option}
          active={selectedCategory === option}
          onClick={() => onChange(option)}
        >
          {option}
        </Tab>
      ))}
    </TabGroup>
  );
};

export default Category;
