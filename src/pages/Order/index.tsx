import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { orders } from '@/data/orders';
import { type RankingItem } from '@/data/ranking';
import OrderTemplate from './template';

interface ValidationErrors {
  message: string;
  senderName: string;
  receiverName: string;
  receiverPhone: string;
  quantity: string;
}

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

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {
      message: '',
      senderName: '',
      receiverName: '',
      receiverPhone: '',
      quantity: '',
    };

    // 메시지 검사
    if (!message.trim()) {
      newErrors.message = '메시지를 입력해주세요.';
    }

    // 보내는 사람 이름 검사
    if (!senderName.trim()) {
      newErrors.senderName = '이름을 입력해주세요.';
    }

    // 받는 사람 이름 검사
    if (!receiverName.trim()) {
      newErrors.receiverName = '이름을 입력해주세요.';
    }

    // 전화번호 검사
    if (!receiverPhone.trim()) {
      newErrors.receiverPhone = '전화번호를 입력해주세요.';
    } else {
      const phoneRegex = /^010\d{8}$/;
      if (!phoneRegex.test(receiverPhone)) {
        newErrors.receiverPhone = '올바른 전화번호 형식을 입력해주세요. (01012341234)';
      }
    }

    // 수량 검사
    const quantityNum = parseInt(quantity, 10);
    if (isNaN(quantityNum) || quantityNum < 1) {
      newErrors.quantity = '수량은 1개 이상이어야 합니다.';
    }

    setErrors(newErrors);

    // 모든 에러가 없으면 true 반환
    return !Object.values(newErrors).some(error => error !== '');
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
