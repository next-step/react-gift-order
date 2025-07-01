import styled from '@emotion/styled';
import { colors, typography, spacing, borderRadius } from '@/styles/tokens';
import type { Product } from '@/types/index.ts';

const CardContainer = styled.div`
  background: ${colors.white};
  border-radius: ${borderRadius.lg};
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const RankBadge = styled.div<{ rank: number }>`
  position: absolute;
  top: ${spacing.md};
  left: ${spacing.md};
  background: ${(props) =>
    props.rank === 1
      ? colors.red
      : props.rank === 2
        ? '#ff9500'
        : props.rank === 3
          ? '#ff6b00'
          : colors.gray600};
  color: ${colors.white};
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.bold};
  border-radius: ${borderRadius.round};
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: ${spacing.lg};
`;

const BrandName = styled.div`
  font-size: ${typography.fontSize.sm};
  color: ${colors.gray600};
  margin-bottom: ${spacing.xs};
`;

const ProductName = styled.h3`
  font-size: ${typography.fontSize.md};
  font-weight: ${typography.fontWeight.semibold};
  color: ${colors.gray900};
  margin: 0 0 ${spacing.md} 0;
  line-height: ${typography.lineHeight.tight};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xs};
`;

const DiscountRate = styled.span<{ show: boolean }>`
  display: ${(props) => (props.show ? 'inline' : 'none')};
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.red};
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
`;

const OriginalPrice = styled.span<{ show: boolean }>`
  display: ${(props) => (props.show ? 'inline' : 'none')};
  font-size: ${typography.fontSize.sm};
  color: ${colors.gray600};
  text-decoration: line-through;
`;

const SellingPrice = styled.div`
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.gray900};
`;

interface ProductCardProps {
  product: Product;
  rank?: number;
  onClick?: (product: Product) => void;
}

export const ProductCard = ({ product, rank, onClick }: ProductCardProps) => {
  const hasDiscount = product.price.discountRate > 0;

  return (
    <CardContainer onClick={() => onClick?.(product)}>
      {rank && <RankBadge rank={rank}>{rank}</RankBadge>}
      <ProductImage src={product.imageURL} alt={product.name} />
      <ProductInfo>
        <BrandName>{product.brandInfo.name}</BrandName>
        <ProductName>{product.name}</ProductName>
        <PriceContainer>
          <PriceRow>
            <DiscountRate show={hasDiscount}>{product.price.discountRate}%</DiscountRate>
            <OriginalPrice show={hasDiscount}>
              {product.price.basicPrice.toLocaleString()}원
            </OriginalPrice>
          </PriceRow>
          <SellingPrice>{product.price.sellingPrice.toLocaleString()}원</SellingPrice>
        </PriceContainer>
      </ProductInfo>
    </CardContainer>
  );
};
