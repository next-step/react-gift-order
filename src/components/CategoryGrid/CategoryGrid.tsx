import styled from '@emotion/styled';
import { colors, spacing, borderRadius } from '@/styles/tokens';
import type { CategoryTheme } from '@/types/';
import { CategoryItem } from './CategoryItem';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${spacing.lg} 0;
  background: ${colors.white};
  padding: ${spacing.xl};
  margin: 0 ${spacing.lg};
  border-radius: ${borderRadius.lg};
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.gray900};
  margin: ${spacing.xl} ${spacing.lg} ${spacing.md};
  grid-column: 1 / -1;
`;

interface CategoryGridProps {
  categories: CategoryTheme[];
  onCategoryClick?: (category: CategoryTheme) => void;
}
export const CategoryGrid = ({ categories, onCategoryClick }: CategoryGridProps) => {
  return (
    <div>
      <SectionTitle>선물 테마</SectionTitle>
      <GridContainer>
        {categories.map((category) => (
          <CategoryItem key={category.themeId} category={category} onClick={onCategoryClick} />
        ))}
      </GridContainer>
    </div>
  );
};
