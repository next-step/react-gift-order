import styled from '@emotion/styled';
import { mockCategories } from '@/data/categories';

const CategorySection = () => {
  return (
    <Section>
      <TitleWrapper>
        <Title>선물 테마</Title>
      </TitleWrapper>
      <Grid>
        {mockCategories.map(category => (
          <Item key={category.themeId}>
            <CategoryImage src={category.image} alt={category.name} />
            <CategoryText>{category.name}</CategoryText>
          </Item>
        ))}
      </Grid>
    </Section>
  );
};

export default CategorySection;

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing[2]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const TitleWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => `${theme.spacing[0]} ${theme.spacing[1]}`};
`;

const Title = styled.h3`
  ${({ theme }) => theme.typography.title.title1Bold};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${({ theme }) => `${theme.spacing[5]} ${theme.spacing[1]}`};
`;

const Item = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[1]};
  cursor: pointer;
`;

const CategoryImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const CategoryText = styled.p`
  ${({ theme }) => theme.typography.label.label2Regular};
  color: ${({ theme }) => theme.color.semantic.text.default};
`;
