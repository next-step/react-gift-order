/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

interface CategoryItemProps {
  name: string;
  image: string;
}

export default function CategoryItem({ name, image }: CategoryItemProps) {
  return (
    <Wrapper>
      <Image src={image} alt={name} />
      <Label>{name}</Label>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const Image = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
`;

const Label = styled.span`
  font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.body2Regular.fontWeight};
  color: ${({ theme }) => theme.colors.textDefault};
`;
