import styled from '@emotion/styled';

const ProductInfoContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.semantic.background.fill};
  padding: ${({ theme }) => theme.spacing.spacing4} ${({ theme }) => theme.spacing.spacing3};
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};

  display: flex;
  align-items: center;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: ${({ theme }) => theme.spacing.spacing3};
  }

  div {
    flex-grow: 1;
  }

  p {
    margin: 0;
    font-size: ${({ theme }) => theme.typography.body1Regular.fontSize};
    line-height: ${({ theme }) => theme.typography.body1Regular.lineHeight};
    color: ${({ theme }) => theme.colors.semantic.text.default};

    &:nth-of-type(2) {
      font-size: ${({ theme }) => theme.typography.label2Regular.fontSize};
      color: ${({ theme }) => theme.colors.colorScale.gray[600]};
    }

    &:last-of-type {
      font-size: ${({ theme }) => theme.typography.subtitle2Regular.fontSize};
      font-weight: ${({ theme }) => theme.typography.subtitle2Regular.fontWeight};
      color: ${({ theme }) => theme.colors.semantic.text.default};

      span {
        font-size: ${({ theme }) => theme.typography.label2Regular.fontSize};
        font-weight: ${({ theme }) => theme.typography.label2Regular.fontWeight};
        color: ${({ theme }) => theme.colors.colorScale.gray[600]};
      }
    }
  }
`;

const ProductInfo = () => {
  return (
    <ProductInfoContainer>
      <h3>상품 정보</h3>
      <img alt="product" src="https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg" />
      <div>
        <p>BBQ 양념치킨+크림치즈볼+콜라1.25L</p>
        <p>BBQ</p>
        <p><span>상품가 </span>29000원</p>
      </div>
    </ProductInfoContainer>
  );
};

export default ProductInfo;
