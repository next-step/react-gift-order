import Category from '@/components/Category';
import { CategoryContainerStyle } from '@/styles/Category/CategoryContainer.styles';
import { useState } from 'react';

type CategoryType = '받고 싶어한' | '많이 선물한' | '위시로 받은';
const CATEGORY_TYPE = {
  받고싶어한: '받고 싶어한',
  많이선물한: '많이 선물한',
  위시로받은: '위시로 받은',
} as const;

function CategoryContainer() {
  function getInitialCategory(): CategoryType {
    const category = localStorage.getItem('selectedCategory');
    if (category && Object.values(CATEGORY_TYPE).includes(category as CategoryType)) {
      return category as CategoryType;
    }
    return CATEGORY_TYPE.받고싶어한;
  }
  const [selectCategory, setSelectCategory] = useState<CategoryType>(getInitialCategory);
  function handleCategoryClick(category: CategoryType) {
    setSelectCategory(category);
    localStorage.setItem('selectedCategory', category);
  }

  return (
    <CategoryContainerStyle>
      <Category
        onClick={() => handleCategoryClick(CATEGORY_TYPE.받고싶어한)}
        category="받고 싶어한"
        selectedCategory={selectCategory}
      />
      <Category
        onClick={() => handleCategoryClick(CATEGORY_TYPE.많이선물한)}
        category="많이 선물한"
        selectedCategory={selectCategory}
      />
      <Category
        onClick={() => handleCategoryClick(CATEGORY_TYPE.위시로받은)}
        category="위시로 받은"
        selectedCategory={selectCategory}
      />
    </CategoryContainerStyle>
  );
}

export default CategoryContainer;
