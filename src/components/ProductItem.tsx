import styled from '@emotion/styled';
import type { Product } from '@/data/productListMock';

interface Props {
  product: Product;
  rank: number;
}

export function ProductItem({ product, rank }: Props) {
  return (
    <Card>
      <ThumbWrapper>
        <RankBadge rank={rank}>{rank}</RankBadge>
        <Thumb src={product.imageURL} alt={product.name} loading="lazy" />
      </ThumbWrapper>

      {/* 브랜드명 */}
      <Brand>{product.brandInfo.name}</Brand>

      {/* 상품명(두 줄 까지만 표시) */}
      <Name title={product.name}>{product.name}</Name>

      {/* 가격 */}
      <Price>{product.price.sellingPrice.toLocaleString()}원</Price>
    </Card>
  );
}

/* ───────── styles ───────── */

const Card = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.spacing1};
`;

const ThumbWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
`;

const Thumb = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.spacing.spacing1};
  object-fit: cover;
`;

const RankBadge = styled.span<{ rank: number }>`
  position: absolute;
  top: ${({ theme }) => theme.spacing.spacing1};
  left: ${({ theme }) => theme.spacing.spacing1};
  padding: 0 ${({ theme }) => theme.spacing.spacing2};
  border-radius: 9999px;
  ${({ theme }) => theme.typography.label.label2Bold};
  background-color: ${({ rank, theme }) =>
    rank <= 3 ? theme.colors.red.red600 : theme.colors.gray.gray700};
  color: #fff;
  line-height: 20px;
`;

const Brand = styled.span`
  ${({ theme }) => theme.typography.label.label2Regular};
  color: ${({ theme }) => theme.semanticColors.text.sub};
`;

const Name = styled.span`
  ${({ theme }) => theme.typography.body.body2Regular};
  color: ${({ theme }) => theme.semanticColors.text.default};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 두 줄 제한 */
  -webkit-box-orient: vertical;
`;

const Price = styled.span`
  ${({ theme }) => theme.typography.body.body2Bold};
  color: ${({ theme }) => theme.semanticColors.text.default};
`;
