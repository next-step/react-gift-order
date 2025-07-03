import { categories } from '@/data/categories';
import ItemCard from '@/components/common/ItemCard';
import * as S from './styles';

const CategorySection = () => {
  return (
    <S.Section>
      <S.Title>선물 테마</S.Title>
      <S.Grid>
        {categories.slice(0, 15).map((category) => (
          <ItemCard
            key={category.themeId}
            imageUrl={category.image}
            title={category.name}
            variant="category"
          />
        ))}
      </S.Grid>
    </S.Section>
  );
};

export default CategorySection; 