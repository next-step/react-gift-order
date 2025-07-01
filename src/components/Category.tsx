import styled from '@emotion/styled'
import { categories } from '@/data/categories'

export default function Category() {
  return (
    <>
      <Block />
      <Section>
        <Title>선물 테마</Title>
        <Grid>
          {categories.map((item) => (
            <CategoryCard
              key={item.themeId}
              image={item.image}
              name={item.name}
            />
          ))}
        </Grid>
      </Section>
      <Block />
    </>
  )
}

function CategoryCard({ image, name }: { image: string; name: string }) {
  return (
    <CategoryItem>
      <Image src={image} alt={name} />
      <Label>{name}</Label>
    </CategoryItem>
  )
}

const Block = styled.section`
  width: 100%;
  height: 24px;
  background-color: transparent;
`

const Section = styled.section`
  padding: 8px 0;
`

const Title = styled.h2`
  ${({ theme }) => theme.typography.title1Bold};
  padding: 0px 8px 20px;
  margin: 0px;
  width: 100px;
  text-align: left;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px 4px;

  @media (max-width: 480px) {
    grid-template-columns: repeat(4, 1fr); // 모바일은 4개씩
  }
`

const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
`

const Image = styled.img`
  max-width: 50px;
  max-height: 50px;
  width: 100%;
  border-radius: 18px;
  object-fit: cover;
  overflow: hidden;
`

const Label = styled.span`
  ${({ theme }) => theme.typography.label2Regular};
  margin: 0px;
  text-align: left;
`
