import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './styles';
import OrderForm from '@/components/OrderForm';
import MessageCard from '@/components/MessageCard';
import { mockItem } from '@/components/GiftRanking/mockItem';


function OrderPage() {
  const { productId } = useParams<{ productId: string }>();
  const product = { ...mockItem, id: parseInt(productId || '1') };

  return (
    <Container>
      <MessageCard />
      <OrderForm />
      <h2>주문하기</h2>
      <div>
        <img src={product.imageURL} alt={product.name} width="100" />
        <h3>{product.name}</h3>
        <p>{product.price.toLocaleString()}원</p>
      </div>


    </Container>
  );
}

export default OrderPage;
