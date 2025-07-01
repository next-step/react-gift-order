import styled from '@emotion/styled';

interface CategoryItemProps {
  name: string;
  image: string;
}

const ItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.spacing1};
`;

const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;

const ItemName = styled.span`
  ${({ theme }) => theme.typography.label2Regular};
  color: ${({ theme }) => theme.colors.semantic.textDefault};
`;

export default function CategoryItem({ name, image }: CategoryItemProps) {
  return (
    <ItemWrapper>
      <ItemImage src={image} alt={name} />
      <ItemName>{name}</ItemName>
    </ItemWrapper>
  );
}
