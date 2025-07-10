import type { CategoryCardType } from '@/types/category';
import styled from '@emotion/styled';

const Card = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  height: 3.1rem;
`;

const Name = styled.div`
  ${({ theme }) => theme.typography.label2Regular}
  margin-top: ${({ theme }) => theme.spacing.spacing1};
  margin-bottom: ${({ theme }) => theme.spacing.spacing5};
`;

export const CategoryCard = ({ name, image }: CategoryCardType) => {
  return (
    <Card>
      <Image src={image} />
      <Name>{name}</Name>
    </Card>
  );
};
