import { OrderCard } from '@/components';
import { type Order } from '@/data/orders';
import * as S from './styles';

interface CardCarouselProps {
  orders: Order[];
  selectedCardId: number;
  onCardClick: (id: number) => void;
}

const CardCarousel = ({ orders, selectedCardId, onCardClick }: CardCarouselProps) => {
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
