import styled from "@emotion/styled";

type CategoryCardProps = {
  name: string;
  image: string;
};

export const CategoryCard = ({ name, image }: CategoryCardProps) => {
  return (
    <Card>
      <Image src={image} alt={name} />
      <Label>{name}</Label>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

const Image = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  background-color: ${({ theme }) => theme.colors.colorScale.gray.gray200};
`;

const Label = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.semantic.text.default};
`;
