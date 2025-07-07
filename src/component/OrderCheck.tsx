import { DefaultComponentDiv, OrderButton, Price, ProductBox, ProductImage, ProductInfo, ProductName, SubText, SubTitle } from '@/styles/Common.styled'

const OrderCheck = () => {

    
  return (
    <DefaultComponentDiv>
      <SubTitle>상품 정보</SubTitle>

      <ProductBox>
        <ProductImage
          src="https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg"
          alt="product"
        />
        <ProductInfo>
          <ProductName>BBQ 양념치킨+크림치즈볼+콜라1.25L</ProductName>
          <SubText>BBQ</SubText>
          <Price>
            상품가 <span>29,000원</span>
          </Price>
        </ProductInfo>
      </ProductBox>

      <OrderButton>29,000원 주문하기</OrderButton>
    </DefaultComponentDiv>
  );
}

export default OrderCheck