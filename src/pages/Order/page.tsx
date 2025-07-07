import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { orders } from '@/data/orders';
import { type RankingItem } from '@/data/ranking';
import OrderTemplate from './template';

const Order = () => {
  const location = useLocation();
  const product = location.state?.product as RankingItem | undefined;
  
  const [selectedCardId, setSelectedCardId] = useState<number>(orders[0]?.id || 904);
  const [message, setMessage] = useState<string>(orders[0]?.defaultTextMessage || '축하해요.');
  const [senderName, setSenderName] = useState<string>('');
  const [receiverName, setReceiverName] = useState<string>('');
  const [receiverPhone, setReceiverPhone] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('1');

  const handleCardClick = (id: number) => {
    setSelectedCardId(id);
    const card = orders.find(order => order.id === id);
    if (card) {
      setMessage(card.defaultTextMessage);
    }
    console.log('카드 클릭:', id);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSenderNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenderName(e.target.value);
  };

  const handleReceiverNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReceiverName(e.target.value);
  };

  const handleReceiverPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReceiverPhone(e.target.value);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(e.target.value);
  };

  const selectedCard = orders.find(order => order.id === selectedCardId);

  return (
    <OrderTemplate
      orders={orders}
      selectedCardId={selectedCardId}
      selectedCard={selectedCard}
      message={message}
      senderName={senderName}
      receiverName={receiverName}
      receiverPhone={receiverPhone}
      quantity={quantity}
      product={product}
      onCardClick={handleCardClick}
      onMessageChange={handleMessageChange}
      onSenderNameChange={handleSenderNameChange}
      onReceiverNameChange={handleReceiverNameChange}
      onReceiverPhoneChange={handleReceiverPhoneChange}
      onQuantityChange={handleQuantityChange}
    />
  );
};

export default Order;
