import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 100%;
  padding: 0px 1rem;
`;
const Margin1 = styled.div`
  width: 100%;
  height: 12px;
  background-color: transparent;
`;
const Margin2 = styled.div`
  width: 100%;
  height: 24px;
  background-color: transparent;
`;
const Title = styled.p(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 700,
  lineHeight: '1.5rem',
  color: theme.semanticColors.text.default,
  margin: '0px',
  textAlign: 'left',
}));
const Container = styled.div(({ theme }) => ({
  width: '100%',
  padding: '12px 16px',
  borderRadius: '0.5rem',
  backgroundColor: theme.semanticColors.background.default,
  border: '1px solid',
  borderColor: theme.semanticColors.border.default,
  display: 'flex',
  gap: '12px',
}));
const ProductImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 4px;
  object-fit: cover;
  object-position: center center;
  aspect-ratio: 1 / 1;
`;
const ProductName = styled.p(({ theme }) => ({
  fontSize: '0.875rem',
  fontWeight: 400,
  lineHeight: '1.1875rem',
  color: theme.semanticColors.text.default,
  margin: '0px',
  textAlign: 'left',
}));
const BrandName = styled.p(({ theme }) => ({
  fontSize: '0.75rem',
  fontWeight: 400,
  lineHeight: '1rem',
  color: theme.colorScale.gray700,
  margin: '0px',
  textAlign: 'left',
}));
const Margin3 = styled.div`
  width: 100%;
  height: 4px;
  background-color: transparent;
`;
const PriceHolder = styled.p(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 700,
  lineHeight: '1.375rem',
  color: theme.semanticColors.text.default,
  margin: '0px',
  textAlign: 'left',
}));

const PriceTitle = styled.span(({ theme }) => ({
  fontSize: '0.875rem',
  fontWeight: 400,
  lineHeight: '1.1875rem',
  color: theme.colorScale.gray700,
}));

type ProductInfoProps = {
  product: {
    imageURL: string;
    name: string;
    price: { sellingPrice: number };
    brandInfo: { name: string };
  } | null;
};

export const ProductInfo = ({ product }: ProductInfoProps) => {
  if (!product) return null;

  const { imageURL, name, price, brandInfo } = product;

  return (
    <Wrapper>
      <Margin1 />
      <Title>상품 정보</Title>
      <Margin1 />
      <Container>
        <ProductImage src={imageURL} alt={name} />
        <div>
          <ProductName>{name}</ProductName>
          <BrandName>{brandInfo.name}</BrandName>
          <Margin3 />
          <PriceHolder>
            <PriceTitle>상품가</PriceTitle>
            {price.sellingPrice}원
          </PriceHolder>
        </div>
      </Container>
      <Margin2 />
    </Wrapper>
  );
};
