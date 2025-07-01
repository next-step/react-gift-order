import styled from '@emotion/styled';

interface CategoryCardProps {
    name: string;
    image: string;
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Image = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
`;

const Label = styled.span`
  font-size: 13px;
  text-align: center;
`;

export default function CategoryCard({ name, image }: CategoryCardProps) {
    return (
        <Card>
            <Image src={image} alt={name} />
            <Label>{name}</Label>
        </Card>
    );
}