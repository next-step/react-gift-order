import { CategoryContainerStyle } from '@/styles/Category/CategoryStyle.styles';
type CategoryType = '받고 싶어한' | '많이 선물한' | '위시로 받은';
type CategoryProps = {
  category: string;
  onClick: () => void;
  selectedCategory: CategoryType;
};

function Category({ category, onClick, selectedCategory }: CategoryProps) {
  const selected = category === selectedCategory;
  return (
    <CategoryContainerStyle onClick={onClick} selected={selected}>
      {category}
    </CategoryContainerStyle>
  );
}

export default Category;
