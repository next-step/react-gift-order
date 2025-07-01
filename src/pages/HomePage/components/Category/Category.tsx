import { categoryMockData } from '@/data/categoryMockData';
import ThemeCard from './ThemeCard';
import { CATEGORY_LABELS } from './constants/labels';
import { GiftThemeSection, SectionHeader, SectionTitle, ThemeGrid } from './Category.styles';

function Category() {
  return (
    <GiftThemeSection>
      <SectionHeader>
        <SectionTitle>{CATEGORY_LABELS.SECTION_TITLE}</SectionTitle>
      </SectionHeader>
      <ThemeGrid>
        {categoryMockData.map((theme) => (
          <ThemeCard key={theme.themeId} name={theme.name} image={theme.image} />
        ))}
      </ThemeGrid>
    </GiftThemeSection>
  );
}

export default Category;
