import { categoryList } from "@/mockdata/categoryList";
import {
  Container,
  Title,
  Grid,
  CategoryItem,
  CategoryImage,
} from "@/sections/CategorySection/CategorySection.style";

const CategorySection = () => {
  return (
    <Container>
      <Title>선물 테마</Title>
      <Grid>
        {categoryList.map((category) => (
          <CategoryItem key={category.themeId}>
            <CategoryImage src={category.image} />
            <span>{category.name}</span>
          </CategoryItem>
        ))}
      </Grid>
    </Container>
  );
};

export default CategorySection;
