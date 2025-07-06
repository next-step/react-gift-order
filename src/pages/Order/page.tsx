import { useState } from 'react';
import { orders } from '@/data/orders';
import * as S from './styles';

const Order = () => {
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setSelectedCardId(id);
    console.log('카드 클릭:', id);
  };

  return (
    <S.Container>
      <S.ScrollContainer>
        {orders.map((order) => (
          <S.CardContainer 
            key={order.id} 
            isSelected={selectedCardId === order.id}
            onClick={() => handleCardClick(order.id)}
          >
            <S.CardImage
              alt={`${order.id}번 메시지 카드`}
              src={order.thumbUrl}
            />
          </S.CardContainer>
        ))}
      </S.ScrollContainer>
      <S.Spacer />
    </S.Container>
  );
};

export default Order;
