import styled from "@emotion/styled";
import { CategoryCard } from "@/pages/home/components/CategoryCard";
import { mockCategoryData } from "@/mock/mockData";

export const CategorySection = () => {
  return (
    <Section>
      <Title>선물 테마</Title>
      <Grid>
        {mockCategoryData.map((item) => (
          <CategoryCard
            key={item.themeId}
            name={item.name}
            image={item.image}
          />
        ))}
      </Grid>
    </Section>
  );
};

const Section = styled.section`
  padding: 20px 16px;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px 8px;
`;
