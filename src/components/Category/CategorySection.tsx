import { categoryData } from '@/data/categories';
import * as S from './CategorySection.styles';
import CategoryItem from './CategoryItem';


const CategorySection = () => {
  return (
    <>
    <S.Wrapper>
      {categoryData.map((category) => (
        <CategoryItem
          key={category.themeId}
          name={category.name}
          image={category.image}
        />
      ))}
    </S.Wrapper>
      <S.Banner>
        <p>카카오테크 캠퍼스 3기여러분</p>
        <h3>프론트엔드 2단계 과제 화이팅! 🎉</h3>
      </S.Banner>
      </>
  );
};

export default CategorySection;
