import styled from '@emotion/styled';
import giftThemes from '@data/giftCategory.json';
interface GiftTheme {
  themeId: number;
  name: string;
  image: string;
}
const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.spacing4};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.spacing3};
`;

const Item = styled.div`
  text-align: center;
`;

const Image = styled.img`
  width: 56px;
  height: 56px;
`;

const Label = styled.p`
  font-size: ${({ theme }) => theme.typography.label2Regular.fontSize};
  color: ${({ theme }) => theme.colors.gray.gray800};
`;

const CategorySection = () => {
  return (
    <Section>
      <h2>선물 테마</h2>
      <Grid>
        {giftThemes.map((theme: GiftTheme) => (
          <Item key={theme.themeId}>
            <Image src={theme.image} alt={theme.name} />
            <Label>{theme.name}</Label>
          </Item>
        ))}
      </Grid>
    </Section>
  );
};

export default CategorySection;
