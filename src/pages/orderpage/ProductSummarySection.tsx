import styled from "@emotion/styled";
import type { Product } from "../../mocks/types";

interface ProductSummarySectionProps {
  product: Product;
}

export default function ProductSummarySection({
  product,
}: ProductSummarySectionProps) {
  return (
    <Container>
      <SectionTitle>상품 정보</SectionTitle>
      <Card>
        <ProductImage src={product.imageURL} alt={product.name} />
        <Content>
          <ProductName>{product.name}</ProductName>
          <BrandName>{product.brandInfo.name}</BrandName>
          <PriceText>
            상품가{" "}
            <strong>{product.price.sellingPrice.toLocaleString()}원</strong>
          </PriceText>
        </Content>
      </Card>
    </Container>
  );
}

const Container = styled.div`
  margin: 10px 0 20px 0;
`;

const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.subtitle1Regular.fontSize};
  font-weight: bold;
  margin-bottom: 10px;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.gray600};
  border-radius: 12px;
  gap: 16px;
`;

const ProductImage = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 8px;
  object-fit: cover;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ProductName = styled.div`
  font-size: ${({ theme }) => theme.typography.subtitle1Regular.fontSize};
  font-weight: bold;
`;

const BrandName = styled.div`
  font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
  color: ${({ theme }) => theme.colors.gray600};
`;

const PriceText = styled.div`
  font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
  color: ${({ theme }) => theme.colors.gray600};

  strong {
    font-weight: bold;
    color: black;
  }
`;
