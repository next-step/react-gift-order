import styled from "@emotion/styled";

type Props = {
  name: string;
  brand: string;
  price: number;
  imageUrl: string;
};

export default function ProductInfo({ name, brand, price, imageUrl }: Props) {
  return (
    <Section>
      <Title>상품 정보</Title>
      <ProductBox>
        <ProductImage src={imageUrl} alt={name} />
        <ProductContent>
          <ProductName>{name}</ProductName>
          <ProductBrand>{brand}</ProductBrand>
          <ProductPrice>
            상품가 <strong>{price.toLocaleString()}원</strong>
          </ProductPrice>
        </ProductContent>
      </ProductBox>
    </Section>
  );
}

const Section = styled.section`
  padding: 24px 16px;
  margin-bottom: 32px;
  background-color: ${({ theme }) => theme.colors.semantic.background.default};
`;

const Title = styled.h2`
  ${({ theme }) => theme.typography.title2Bold};
  margin-bottom: 16px;
`;

const ProductBox = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.colorScale.gray.gray00};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.colorScale.gray.gray200};
  gap: 16px;
`;

const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`;

const ProductContent = styled.div`
  flex: 1;
`;

const ProductName = styled.p`
  ${({ theme }) => theme.typography.body1Bold};
  color: ${({ theme }) => theme.colors.semantic.text.default};
`;

const ProductBrand = styled.p`
  ${({ theme }) => theme.typography.label1Regular};
  color: ${({ theme }) => theme.colors.semantic.text.sub};
  margin: 4px 0;
`;

const ProductPrice = styled.p`
  ${({ theme }) => theme.typography.body2Regular};
  color: ${({ theme }) => theme.colors.semantic.text.sub};

  strong {
    ${({ theme }) => theme.typography.body2Bold};
    color: ${({ theme }) => theme.colors.semantic.text.default};
  }
`;
