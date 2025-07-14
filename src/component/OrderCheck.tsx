import { useOrder } from '@/context/OrderContext';
import { DefaultComponentDiv, EmptyDiv8h, OrderButton, Price, ProductBox, ProductImage, ProductInfo, ProductName, SideBlankDiv, SubText, SubTitle } from '@/styles/Common.styled'

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';



const OrderCheck = () => {
  const navigate = useNavigate();
  const {
    senderNameInput,
    recipientNameInput,
    recipientPhoneInput,
    quantityInput,
    cardMessage,
  } = useOrder()


  const location = useLocation();

  interface ProductItem {
    id: number;
    name: string;
    imageURL: string;
    price: {
      basicPrice: number;
      discountRate: number;
      sellingPrice: number;
    };
    brandInfo: {
      id: number;
      name: string;
      imageURL: string;
    };
  }

  const handleOrder = () => {
    senderNameInput.validate();

    const isValid =
      !senderNameInput.error


    if (isValid) {
      alert(`주문이 완료되었습니다. 
        상품명:${item.name} 
        구매수량: ${quantityInput.value}
        발신자 이름: ${senderNameInput.value}
        메세지: ${cardMessage}
        `
      );
      navigate('/');
    }
  };

  interface ProductItem {
    id: number;
    name: string;
    imageURL: string;
    price: {
      basicPrice: number;
      discountRate: number;
      sellingPrice: number;
    };
    brandInfo: {
      id: number;
      name: string;
      imageURL: string;
    };
  }

  const { item } = location.state as { item: ProductItem };


  const price = item.price.sellingPrice
  const imageUrl = item.imageURL
  const Name = item.name
  const brandName = item.brandInfo.name
  return (
    <DefaultComponentDiv>
      <SideBlankDiv>
        <EmptyDiv8h />
        <SubTitle>상품 정보</SubTitle>

        <ProductBox>
          <ProductImage
            src={imageUrl}
            alt={Name}
          />
          <ProductInfo>
            <ProductName>{Name}</ProductName>
            <SubText>{brandName}</SubText>
            <Price>
              상품가 <span>{price}원</span>
            </Price>
          </ProductInfo>
        </ProductBox>

      </SideBlankDiv>

      <OrderButton onClick={handleOrder}> {Number(quantityInput.value) * price} 원 주문하기</OrderButton>
    </DefaultComponentDiv>
  );
};

export default OrderCheck;