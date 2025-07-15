import { useFormContext } from "react-hook-form";
import type { FormValues } from "@/pages/OrderPage/OrderPage";
import {
  ProductInfoSection,
  SectionTitle,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductBrand,
  ProductPrice,
  FixedOrderButton,
  SectionDivider,
} from "@/sections/OrderSummarySection/OrderSummarySection.style";

interface Product {
  id: number;
  name: string;
  imageURL: string;
  brandInfo: { name: string };
  price: { sellingPrice: number };
}

interface Props {
  product: Product | undefined;
}
const OrderSummarySection = ({ product }: Props) => {
  const { watch } = useFormContext<FormValues>();
  const getters = watch("getters") || [];
  const totalQuantity = getters.reduce(
    (sum, { quantity }) => sum + Number(quantity || 0),
    0
  );
  const totalPrice = product ? product.price.sellingPrice * totalQuantity : 0;

  return (
    <>
      <SectionDivider />
      <ProductInfoSection>
        <SectionTitle>상품 정보</SectionTitle>
        {product && (
          <ProductCard>
            <ProductImage src={product.imageURL} />
            <ProductInfo>
              <ProductTitle>{product.name}</ProductTitle>
              <ProductBrand>{product.brandInfo.name}</ProductBrand>
              <ProductPrice>
                상품가 <b>{product.price.sellingPrice}원</b>
              </ProductPrice>
            </ProductInfo>
          </ProductCard>
        )}
      </ProductInfoSection>
      <FixedOrderButton type="submit">{totalPrice}원 주문하기</FixedOrderButton>
    </>
  );
};

export default OrderSummarySection;
