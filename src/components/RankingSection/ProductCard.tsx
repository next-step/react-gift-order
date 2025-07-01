import styled from '@emotion/styled';
import type { Product } from '@/types/product';

interface ProductCardProps {
  item: Product;
  rank: number;
}

const ProductCard = ({ item, rank }: ProductCardProps) => {
  return (
    <Card>
      <RankBadge rank={rank}>{rank}</RankBadge>
      <Image src={item.imageURL} alt={item.name} />
      <Brand>{item.brandInfo.name}</Brand>
      <Name>{item.name}</Name>
      <Price>
        {item.price.sellingPrice.toLocaleString()} <span>원</span>
      </Price>
    </Card>
  );
};

export default ProductCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
`;

const Image = styled.img`
  aspect-ratio: 1;
  border-radius: 8px;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  object-fit: fit;
`;

const Brand = styled.p`
  ${({ theme }) => theme.typography.label.label1Regular};
  color: ${({ theme }) => theme.color.gray[700]};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`;

const Name = styled.h6`
  ${({ theme }) => theme.typography.body.body2Regular};
  text-align: left;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Price = styled.p`
  ${({ theme }) => theme.typography.title.title2Bold};
  color: ${({ theme }) => theme.color.semantic.text.default};
  text-align: left;
  word-break: break-word;
`;

const RankBadge = styled.span<{ rank: number }>`
  position: absolute;
  top: ${({ theme }) => theme.spacing[1]};
  left: ${({ theme }) => theme.spacing[1]};
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, rank }) =>
    rank <= 3 ? theme.color.red[600] : theme.color.gray[600]};
  border-radius: 4px;
  ${({ theme }) => theme.typography.label.label2Bold};
  color: ${({ theme }) => theme.color.gray[0]};
  z-index: 1;
`;
