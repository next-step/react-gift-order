import {
  ProductSection,
  SectionTitle,
  ProductContainer,
  ProductImage,
  ProductDetails,
  ProductName,
  BrandName,
  PriceContainer,
  PriceLabel,
  Price,
  OrderButton,
} from "./ProductInfo.styles";
import type { TrendingGiftsType } from "@/types/TrendingGiftsType";

interface ProductInfoProps {
  product: TrendingGiftsType;
  quantity: string;
}

function ProductInfo({ product, quantity }: ProductInfoProps) {
  const totalPrice = product.price.sellingPrice * parseInt(quantity, 10);

  return (
    <ProductSection>
      <SectionTitle>상품 정보</SectionTitle>
      <ProductContainer>
        <ProductImage src={product.imageURL} alt={product.name} />
        <ProductDetails>
          <ProductName>{product.name}</ProductName>
          <BrandName>{product.brandInfo.name}</BrandName>
          <PriceContainer>
            <PriceLabel>상품가</PriceLabel>
            <Price>{product.price.sellingPrice.toLocaleString()}원</Price>
          </PriceContainer>
        </ProductDetails>
      </ProductContainer>
      <OrderButton type="submit">
        {totalPrice.toLocaleString()}원 주문하기
      </OrderButton>
    </ProductSection>
  );
}

export default ProductInfo;
