import { PRODUCT_INFO_CONSTANTS } from "../../constants/productInfo";
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
  OrderButtonContainer,
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
    <>
      <ProductSection>
        <SectionTitle>{PRODUCT_INFO_CONSTANTS.TITLE}</SectionTitle>
        <ProductContainer>
          <ProductImage src={product.imageURL} alt={product.name} />
          <ProductDetails>
            <ProductName>{product.name}</ProductName>
            <BrandName>{product.brandInfo.name}</BrandName>
            <PriceContainer>
              <PriceLabel>{PRODUCT_INFO_CONSTANTS.PRICE_LABEL}</PriceLabel>
              <Price>
                {product.price.sellingPrice.toLocaleString()}
                {PRODUCT_INFO_CONSTANTS.WON}
              </Price>
            </PriceContainer>
          </ProductDetails>
        </ProductContainer>
      </ProductSection>
      <OrderButtonContainer>
        <OrderButton type="submit">
          {totalPrice.toLocaleString()}
          {PRODUCT_INFO_CONSTANTS.WON}{" "}
          {PRODUCT_INFO_CONSTANTS.ORDER_BUTTON_LABEL}
        </OrderButton>
      </OrderButtonContainer>
    </>
  );
}

export default ProductInfo;
