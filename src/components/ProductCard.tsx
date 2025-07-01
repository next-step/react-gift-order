import styled from "@emotion/styled";

interface ProductCardProps {
    item: {
        id: number | string;
        name: string;
        imageURL: string;
        price: {
            sellingPrice: number;
        };
        brandInfo: {
            name: string;
        };
    };
    rank?: number;
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const RankBadge = styled.div`
  position: absolute;
  top: -8px;
  left: -8px;
  background-color: ${({ theme }) => theme.color.red.red700};
  color: white;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 999px;
  font-size: 14px;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const Brand = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.color.semantic.textSub};
`;

const Name = styled.span`
  font-weight: bold;
  text-align: center;
`;

const Price = styled.p`
  font-weight: bold;
`;

export default function ProductCard({ item, rank }: ProductCardProps) {
    return (
        <Card>
            {rank !== undefined && <RankBadge>{rank}</RankBadge>}
            <Image src={item.imageURL} alt={item.name} />
            <Brand>{item.brandInfo.name}</Brand>
            <Name>{item.name}</Name>
            <Price>{item.price.sellingPrice.toLocaleString()}원</Price>
        </Card>
    );
}