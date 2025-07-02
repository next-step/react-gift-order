import styled from '@emotion/styled';

interface Product {
  id: string;
  productId: number;
  productName: string;
  price: number;
  brandName: string;
  image: string;
  rank: number;
  isTopThree: boolean;
}

interface ProductCardProps {
  product: Product;
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.spacing2};
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: ${(props) => props.theme.semanticColors.background.fill};
`;

const RankBadge = styled.div<{ isTopThree: boolean }>`
  position: absolute;
  top: ${(props) => props.theme.spacing.spacing1};
  left: ${(props) => props.theme.spacing.spacing1};
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.isTopThree ? props.theme.colors.red500 : props.theme.colors.gray500};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  font-family: 'Pretendard', sans-serif;
`;

const BrandName = styled.div`
  font-size: ${(props) => props.theme.typography.body2Regular.fontSize};
  font-weight: ${(props) => props.theme.typography.body2Regular.fontWeight};
  color: ${(props) => props.theme.semanticColors.text.sub};
  font-family: 'Pretendard', sans-serif;
`;

const ProductName = styled.div`
  font-size: ${(props) => props.theme.typography.body2Regular.fontSize};
  font-weight: ${(props) => props.theme.typography.body2Regular.fontWeight};
  color: ${(props) => props.theme.semanticColors.text.default};
  font-family: 'Pretendard', sans-serif;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Price = styled.div`
  font-size: ${(props) => props.theme.typography.body1Bold.fontSize};
  font-weight: ${(props) => props.theme.typography.body1Bold.fontWeight};
  color: ${(props) => props.theme.semanticColors.text.default};
  font-family: 'Pretendard', sans-serif;
`;

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <CardContainer>
      <ImageContainer>
        <RankBadge isTopThree={product.isTopThree}>{product.rank}</RankBadge>
        <ProductImage
          src={product.image}
          alt={product.productName}
          loading="lazy"
        />
      </ImageContainer>
      <BrandName>{product.brandName}</BrandName>
      <ProductName>{product.productName}</ProductName>
      <Price>{product.price.toLocaleString()}원</Price>
    </CardContainer>
  );
};

export default ProductCard;
export type { Product };
