import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { orders } from '@/data/orders';
import { type RankingItem } from '@/data/ranking';
import { type ValidationErrors, validateOrderForm } from '@/utils/validation/orderForm';
import OrderTemplate from './template';

const Order = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product as RankingItem | undefined;

  const [selectedCardId, setSelectedCardId] = useState<number>(orders[0]?.id || 904);
  const [message, setMessage] = useState<string>(orders[0]?.defaultTextMessage || '축하해요.');
  const [senderName, setSenderName] = useState<string>('');
  const [receiverName, setReceiverName] = useState<string>('');
  const [receiverPhone, setReceiverPhone] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('1');
  const [errors, setErrors] = useState<ValidationErrors>({
    message: '',
    senderName: '',
    receiverName: '',
    receiverPhone: '',
    quantity: '',
  });

  const handleCardClick = (id: number) => {
    setSelectedCardId(id);
    const card = orders.find(order => order.id === id);
    if (card) {
      setMessage(card.defaultTextMessage);
      if (errors.message) {
        setErrors(prev => ({ ...prev, message: '' }));
      }
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    if (errors.message) {
      setErrors(prev => ({ ...prev, message: '' }));
    }
  };

  const handleSenderNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenderName(e.target.value);
    if (errors.senderName) {
      setErrors(prev => ({ ...prev, senderName: '' }));
    }
  };

  const handleReceiverNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReceiverName(e.target.value);
    if (errors.receiverName) {
      setErrors(prev => ({ ...prev, receiverName: '' }));
    }
  };

  const handleReceiverPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReceiverPhone(e.target.value);
    if (errors.receiverPhone) {
      setErrors(prev => ({ ...prev, receiverPhone: '' }));
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(e.target.value);
    if (errors.quantity) {
      setErrors(prev => ({ ...prev, quantity: '' }));
    }
  };

  const validateForm = (): boolean => {
    const { isValid, errors: validationErrors } = validateOrderForm(
      message,
      senderName,
      receiverName,
      receiverPhone,
      quantity
    );
    
    setErrors(validationErrors);
    return isValid;
  };

  const handleOrder = () => {
    if (validateForm()) {
      const orderInfo = `주문이 완료되었습니다.

상품명: ${product?.name || '선택된 상품 없음'}
구매수량: ${quantity}개
발신자이름: ${senderName}
메시지: ${message}`;

      alert(orderInfo);
      navigate('/');
    }
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
      errors={errors}
      onCardClick={handleCardClick}
      onMessageChange={handleMessageChange}
      onSenderNameChange={handleSenderNameChange}
      onReceiverNameChange={handleReceiverNameChange}
      onReceiverPhoneChange={handleReceiverPhoneChange}
      onQuantityChange={handleQuantityChange}
      onOrder={handleOrder}
    />
  );
};

export default Order;
