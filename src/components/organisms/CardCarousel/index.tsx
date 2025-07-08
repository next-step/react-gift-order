import React from 'react';
import OrderCard from '@/components/molcules/OrderCard';
import { type Order } from '@/data/orders';
import * as S from './styles';

interface CardCarouselProps {
  orders: Order[];
  selectedCardId: number;
  onCardClick: (id: number) => void;
}

const CardCarousel: React.FC<CardCarouselProps> = ({ orders, selectedCardId, onCardClick }) => {
  return (
    <S.ScrollContainer>
      {orders.map((order) => (
        <OrderCard
          key={order.id}
          id={order.id}
          thumbUrl={order.thumbUrl}
          isSelected={selectedCardId === order.id}
          onClick={() => onCardClick(order.id)}
        />
      ))}
    </S.ScrollContainer>
  );
};

export default CardCarousel;
