import type { ProductType } from "@/types";
import styled from "@emotion/styled";

const OrderProductInfoContainer = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: `${theme.spacing2} ${theme.spacing4}`,
}));

const OrderProductInfoTitle = styled.h2(({ theme }) => ({
  fontSize: `${theme.typography.title2Bold.fontSize}`,
  fontWeight: `${theme.typography.title2Bold.fontWeight}`,
  lineHeight: `${theme.typography.title2Bold.lineHeight}`,
  color: `${theme.color.gray[900]}`,
  marginBottom: theme.spacing3,
}));

const OrderProductInfoCard = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  border: `1px solid ${theme.color.gray[400]}`,
  borderRadius: "8px",
  padding: `${theme.spacing3} ${theme.spacing4}`,
}));

const OrderProductImage = styled.img({
  width: "64px",
  height: "64px",
  borderRadius: "8px",
  aspectRatio: "1/1",
  objectFit: "contain",
});

const OrderProductDescription = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: `0 ${theme.spacing1}`,
}));

const OrderProductTitle = styled.p(({ theme }) => ({
  fontSize: `${theme.typography.body2Regular.fontSize}`,
  fontWeight: `${theme.typography.body2Regular.fontWeight}`,
  lineHeight: `${theme.typography.body2Regular.lineHeight}`,
  color: `${theme.color.gray[900]}`,
}));

const OrderProductBrandName = styled.p(({ theme }) => ({
  fontSize: `${theme.typography.label2Regular.fontSize}`,
  fontWeight: `${theme.typography.label2Regular.fontWeight}`,
  lineHeight: `${theme.typography.label2Regular.lineHeight}`,
  color: `${theme.color.gray[600]}`,
}));

const OrderProductPrice = styled.p(({ theme }) => ({
  fontSize: `${theme.typography.body1Bold.fontSize}`,
  fontWeight: `${theme.typography.body1Bold.fontWeight}`,
  lineHeight: `${theme.typography.body1Bold.lineHeight}`,
  color: `${theme.color.gray[900]}`,
}));

export const OrderProductInfoSection = ({
  product,
}: {
  product: ProductType | null;
}) => {
  if (!product) {
    return null;
  }

  return (
    <OrderProductInfoContainer>
      <OrderProductInfoTitle>상품 정보</OrderProductInfoTitle>
      <OrderProductInfoCard>
        <OrderProductImage src={product.imageURL} />
        <OrderProductDescription>
          <OrderProductTitle>{product.name}</OrderProductTitle>
          <OrderProductBrandName>
            {product.brandInfo.name}
          </OrderProductBrandName>
          <OrderProductPrice>
            <span>상품가</span>
            {product.price.basicPrice}원
          </OrderProductPrice>
        </OrderProductDescription>
      </OrderProductInfoCard>
    </OrderProductInfoContainer>
  );
};
