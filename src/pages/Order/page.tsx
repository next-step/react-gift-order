import { useState } from 'react';
import { orders } from '@/data/orders';
import OrderTemplate from './template';

const Order = () => {
  const [selectedCardId, setSelectedCardId] = useState<number>(orders[0]?.id || 904);
  const [message, setMessage] = useState<string>(orders[0]?.defaultTextMessage || '축하해요.');

  const handleCardClick = (id: number) => {
    setSelectedCardId(id);
    const card = orders.find(order => order.id === id);
    if (card) {
      setMessage(card.defaultTextMessage);
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const selectedCard = orders.find(order => order.id === selectedCardId);

  return (
    <OrderTemplate
      orders={orders}
      selectedCardId={selectedCardId}
      selectedCard={selectedCard}
      message={message}
      onCardClick={handleCardClick}
      onMessageChange={handleMessageChange}
    />
  );
};

export default Order;
