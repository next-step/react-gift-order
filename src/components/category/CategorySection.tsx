import { Section } from '@/components/layout';
import CategoryGrid, { type CategoryData } from './CategoryGrid';

interface CategorySectionProps {
  categories: CategoryData[];
  onCategoryClick?: (category: CategoryData) => void;
}

const CategorySection = ({
  categories,
  onCategoryClick,
}: CategorySectionProps) => {
  return (
    <Section title="선물 테마" spacing="md">
      <CategoryGrid categories={categories} onCategoryClick={onCategoryClick} />
    </Section>
  );
};

export default CategorySection;
