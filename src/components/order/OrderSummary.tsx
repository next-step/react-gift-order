/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useFormContext, useWatch } from "react-hook-form";
import type { OrderFormValues } from "@/validations/orderSchema";
import type { RankingList } from "@/mock/rankingList";
import { calculateTotalQuantity } from "@/utils/order";

interface ProductSummarySectionProps {
  product: RankingList; 
}

export default function OrderSummary({ product }: ProductSummarySectionProps) {
  const { control } = useFormContext<OrderFormValues>();

  const receivers = useWatch({
    name: "receivers",
    control,
  }) ?? [];

  const totalQuantity = calculateTotalQuantity(receivers);
  const totalPrice = product.price.sellingPrice * totalQuantity;

  return (
    <Container>
      <Wrapper>
        <SectionTitle>상품 정보</SectionTitle>
        <Card>
          <ProductImage src={product.imageURL} alt={product.name} />
          <Content>
            <ProductName>{product.name}</ProductName>
            <BrandName>{product.brandInfo.name}</BrandName>
            <PriceText>
              상품가 <strong>{product.price.sellingPrice.toLocaleString()}원</strong>
            </PriceText>
          </Content>
        </Card>

        <SummaryRow>
          <Label>총 수량</Label>
          <Value>{totalQuantity}개</Value>
        </SummaryRow>
        <SummaryRow>
          <Label>총 결제금액</Label>
          <Value>{totalPrice.toLocaleString()}원</Value>
        </SummaryRow>
      </Wrapper>
    </Container>
  );
}




const Container = styled.div`
  width: 100%;
  padding: 0 1px;
  box-sizing: border-box;
`;


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 10px;
`;

const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.title2Regular.fontSize};
  font-weight: bold;
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

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 4px;
`;

const Label = styled.div`
  font-size: ${({ theme }) => theme.typography.body2Regular.fontSize};
  color: ${({ theme }) => theme.colors.gray700};
`;

const Value = styled.div`
  font-size: ${({ theme }) => theme.typography.subtitle1Regular.fontSize};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray900};
`;
