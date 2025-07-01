/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import CategoryItem from './CategoryItem';
import { categories } from './mock';

export default function CategorySection() {
  return (
    <>
      <SectionTitle>선물 테마</SectionTitle>
      <Container>
        {categories.map(({ themeId, name, image }) => (
          <CategoryItem key={themeId} name={name} image={image} />
        ))}
      </Container>
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px 8px;
  padding: 16px 0;
`;

const SectionTitle = styled.div`
  font-size: ${({ theme }) => theme.typography.title1Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.title1Regular.fontWeight};
  color: ${({ theme }) => theme.colors.textDefault};
  padding: 16px 16px;
`;
