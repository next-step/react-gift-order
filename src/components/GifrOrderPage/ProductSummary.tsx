import styled from '@emotion/styled';

const Wrapper = styled.div(({ theme }) => ({
  marginTop: theme.spacing.spacing5,
  padding: `0 ${theme.spacing.spacing7}`,
  paddingBottom: '100px',
}));
const SectionTitle = styled.div(({ theme }) => ({
  ...theme.typography.label1Bold,
  marginBottom: theme.spacing.spacing3,
}));

const Card = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  border: `1px solid ${theme.colors.semantic.borderDefault}`,
  borderRadius: theme.spacing.spacing3,
  padding: theme.spacing.spacing3,
  gap: theme.spacing.spacing4,
}));

const ProductImage = styled.img(({ theme }) => ({
  width: '4.5rem',
  height: '4.5rem',
  borderRadius: theme.spacing.spacing2,
  objectFit: 'cover',
}));

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductName = styled.div(({ theme }) => ({
  ...theme.typography.title2Regular,
  color: theme.colors.semantic.textDefault,
}));

const BrandName = styled.div(({ theme }) => ({
  ...theme.typography.subtitle2Regular,
  color: theme.colors.semantic.textSub,
}));

const Price = styled.div(({ theme }) => ({
  ...theme.typography.subtitle2Regular,
  color: theme.colors.semantic.textSub,
  marginTop: theme.spacing.spacing1,
}));

const Highlight = styled.span(({ theme }) => ({
  ...theme.typography.body1Bold,
  color: theme.colors.semantic.textDefault,
  marginLeft: theme.spacing.spacing2,
}));

const mockItems = {
  id: 123,
  name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
  imageURL:
    'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
  price: {
    basicPrice: 29000,
    discountRate: 0,
    sellingPrice: 29000,
  },
  brandInfo: {
    id: 2088,
    name: 'BBQ',
    imageURL:
      'https://st.kakaocdn.net/product/gift/gift_brand/20220216170226_38ba26d8eedf450683200d6730757204.png',
  },
};

const ProductSummary = () => {
  return (
    <Wrapper>
      <SectionTitle>상품정보</SectionTitle>

      <Card>
        <ProductImage src={mockItems.imageURL} alt="" />

        <InfoBox>
          <ProductName>{mockItems.name}</ProductName>
          <BrandName>{mockItems.brandInfo.name}</BrandName>
          <Price>
            상품가 <Highlight> {mockItems.price.basicPrice}원</Highlight>
          </Price>
        </InfoBox>
      </Card>
    </Wrapper>
  );
};

export default ProductSummary;
