import styled from '@emotion/styled';

const ProductInfoContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.semantic.background.default};
  padding: ${({ theme }) => theme.spacing.spacing4} ${({ theme }) => theme.spacing.spacing3};
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};

  display: flex;
  justify-content: center;
  flex-direction: column;

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

const ItemContainer = styled.div`
  width: 100%;
  padding: 12px 16px;
  border-radius: 0.5rem;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(238, 239, 241);
  display: flex;
  gap: 12px;
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.typography.title2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title2Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title2Bold.lineHeight};
  color: ${({ theme }) => theme.colors.semantic.text.default};
  margin-bottom: ${({ theme }) => theme.spacing.spacing3};
`;

const ProductInfo = () => {
  return (
    <ProductInfoContainer>
      <Title>상품 정보</Title>

      <ItemContainer>
        <img
          alt="product"
          src="https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg"
        />
        <div>
          <p>BBQ 양념치킨+크림치즈볼+콜라1.25L</p>
          <p>BBQ</p>
          <p>
            <span>상품가 </span>29000원
          </p>
        </div>
      </ItemContainer>
    </ProductInfoContainer>
  );
};

export default ProductInfo;
