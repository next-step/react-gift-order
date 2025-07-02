import styled from '@emotion/styled';
import categories from '@/mock/categories'; 


const CategorySection = () => {
  return (
    <Section>
      <Title>선물 테마</Title>
      <Grid>
        {categories.map((item) => (
          <CategoryItem key={item.themeId}>
            <img src={item.image} alt={item.name} />
            <span>{item.name}</span>
          </CategoryItem>
        ))}
      </Grid>
    </Section>
  );
};

export default CategorySection;


const CategoryItem = styled.div`
  text-align: center;

  img {
    width: 56px;
    height: 56px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 6px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  span {
    display: block;
    font-size: 12px;
    color: ${({ theme }) => theme.textColors.default};
  }
`;


const Section = styled.section`
  margin-top: 24px;
`;

const Title = styled.h2`
  font: ${({ theme }) => theme.typography.title2Bold};
  color: ${({ theme }) => theme.textColors.default};
  padding: 0 16px;
  margin-bottom: 12px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px 8px;
  padding: 0 16px;
`;
