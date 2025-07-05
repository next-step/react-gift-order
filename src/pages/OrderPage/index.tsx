import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Title, Box, Image, Label, ProductName, ProductBrand, Price, PriceName, ProductPrice } from './styles';
import OrderForm from '@/components/OrderForm';
import MessageCard from '@/components/MessageCard';
import { mockItem } from '@/components/GiftRanking/mockItem';


function OrderPage() {
  const { productId } = useParams<{ productId: string }>();
  const product = { ...mockItem, id: parseInt(productId || '1') };

  return (
    <>
      <MessageCard />
      <OrderForm productPrice={product.price} />
      <Container>
        <Title>주문하기</Title>
        <Box>
          <Image src={product.imageURL} alt={product.name} width="100" />
          <Label>
            <ProductName>{product.name}</ProductName>
            <ProductBrand>{product.brand}</ProductBrand>
            <Price>
              <PriceName>상품가</PriceName>
              <ProductPrice>{product.price.toLocaleString()}원</ProductPrice>
            </Price>
          </Label>
        </Box>
      </Container>
    </>
  );
}

export default OrderPage;
