/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { CategoryCard } from '@/components/category/CategoryCard';
import { categories } from '@/mock/categories';

const CategoryGrid = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px 4px;
  padding: 20px 0;
`;

export const CategorySection = () => {
  return (
    <CategoryGrid>
      {categories.map(({ themeId, name, image }) => (
        <CategoryCard key={themeId} name={name} image={image} />
      ))}
    </CategoryGrid>
  );
};
