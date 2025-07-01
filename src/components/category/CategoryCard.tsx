/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

type Props={
    name: string;
    image: string;
};
const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

`
const Image = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 6px;
`;
const Label = styled.p`
  ${({ theme }) => theme.typography.label1Regular};
  color: ${({ theme }) => theme.colors.textDefault};
  text-align: center;
`;

export const CategoryCard = ({ name, image }: Props)=>{
    return (
    <Card>
      <Image src={image} alt={name} />
      <Label>{name}</Label>
    </Card>
  );
}