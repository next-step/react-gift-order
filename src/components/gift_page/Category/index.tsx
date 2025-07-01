import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import categoryData from '@/mock_data/category';
import type { CategoryDataType } from '@/types/category';
import { CategoryCard } from '@/components/gift_page/Category/CategoryCard';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 21.8rem;
  background-color: white;
`;

const Title = styled.div`
  ${({ theme }) => theme.typography.title1Bold};
  margin-top: ${({ theme }) => theme.spacing.spacing8};
  margin-left: ${({ theme }) => theme.spacing.spacing4};
  color: black;
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: ${({ theme }) => theme.spacing.spacing5};
`;

const CategoryList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: calc(100% - ${({ theme }) => theme.spacing.spacing3});
  height: fit-content;
`;

export const Category = () => {
  const [categories, setCategories] = useState<CategoryDataType[]>([]);

  useEffect(() => {
    setCategories(categoryData);
  }, []);

  return (
    <Container>
      <Title>선물 테마</Title>
      <Body>
        <CategoryList>
          {categories.map((item, i) => {
            return <CategoryCard key={i} name={item.name} image={item.image} />;
          })}
        </CategoryList>
      </Body>
    </Container>
  );
};
