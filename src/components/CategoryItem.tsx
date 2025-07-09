import styled from '@emotion/styled';

interface CategoryItemProps {
  name: string;
  image: string;
}

export function CategoryItem({ name, image }: CategoryItemProps) {
  return (
    <Item>
      <Thumb src={image} alt={name} loading="lazy" />
      <Name>{name}</Name>
    </Item>
  );
}

/* ───────── styles ───────── */

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Thumb = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
`;

const Name = styled.span`
  margin-top: ${({ theme }) => theme.spacing.spacing2};
  ${({ theme }) => theme.typography.label.label2Regular};
  color: ${({ theme }) => theme.semanticColors.text.default};
`;
