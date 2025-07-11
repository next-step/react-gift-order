import { Padding3, PaddingLg, PaddingSm } from '../common/Padding';
import styled from '@emotion/styled';
import { PaddingMd } from '@/components/common/Padding';
import { type ProductCardProps } from '@/types/product';
const SidePadding = styled.div`
  width: 100%;
  padding: 0px 1rem;
`;

const Title = styled.p`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;
  color: rgb(42, 48, 56);
  margin: 0px;
  text-align: left;
`;
const ProductCard = styled.div`
  width: 100%;
  padding: 12px 16px;
  border-radius: 0.5rem;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(238, 239, 241);
  display: flex;
  gap: 12px;
`;
const ProductImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 4px;
  object-fit: cover;
`;
const ProductInfoWrapper = styled.div``;
const Name = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.1875rem;
  color: rgb(42, 48, 56);
  margin: 0px;
  text-align: left;
`;
const Brand = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  color: rgb(134, 139, 148);
  margin: 0px;
  text-align: left;
`;
const Price = styled.p`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.375rem;
  color: rgb(42, 48, 56);
  margin: 0px;
  text-align: left;
`;
const PriceText = styled.span`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.1875rem;
  color: rgb(134, 139, 148);
`;
const ProductInfo = ({ product }: ProductCardProps) => {
  return (
    <SidePadding>
      <Padding3 />
      <Title>상품 정보</Title>
      <Padding3 />
      <ProductCard>
        <ProductImage src={product.imageURL} alt={product.name} />
        <ProductInfoWrapper>
          <Name>{product.name}</Name>
          <Brand>{product.brandInfo.name}</Brand>
          <PaddingSm />
          <Price>
            <PriceText>상품가</PriceText> {product.price.sellingPrice}원{' '}
          </Price>
        </ProductInfoWrapper>
      </ProductCard>
      <PaddingMd />
      <PaddingLg />
    </SidePadding>
  );
};

export default ProductInfo;
