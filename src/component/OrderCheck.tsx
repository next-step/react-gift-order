import { DefaultComponentDiv, OrderButton, Price, ProductBox, ProductImage, ProductInfo, ProductName, SubText, SubTitle } from '@/styles/Common.styled'

import React from 'react';
import { useLocation } from 'react-router-dom';

interface OrderCheckProps {
  onOrder: () => void;
  message: string;
  quantity : number
}

const OrderCheck: React.FC<OrderCheckProps> = ({ onOrder, message, quantity }) => {

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

  const { item } = location.state as { item: ProductItem };


  const price = item.price.sellingPrice
  const imageUrl = item.imageURL
  const Name = item.name
  const brandName = item.brandInfo.name
  return (
    <DefaultComponentDiv>
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

      {message && (
        <SubText style={{ color: 'green', marginTop: '12px' }}>{message}</SubText>
      )}

      <OrderButton onClick={onOrder}> {quantity*price} 원 주문하기</OrderButton>
    </DefaultComponentDiv>
  );
};

export default OrderCheck;