import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cardTemplates } from '@/data/cardTemplates';

function isValidPhoneNumber(phone: string) {
  return /^010-\d{4}-\d{4}$/.test(phone) || /^010\d{8}$/.test(phone);
}

export const useOrderForm = () => {
  const navigate = useNavigate();

  // 폼 상태
  const [selectedCardId, setSelectedCardId] = useState(cardTemplates[0].id);
  const selectedCard =
    cardTemplates.find((card) => card.id === selectedCardId) ||
    cardTemplates[0];
  const [message, setMessage] = useState(selectedCard.defaultTextMessage || '');
  const [sender, setSender] = useState('');
  const [receiver, setReceiver] = useState('');
  const [receiverPhone, setReceiverPhone] = useState('');
  const [quantity, setQuantity] = useState(1);

  // 에러 상태
  const [messageError, setMessageError] = useState('');
  const [senderError, setSenderError] = useState('');
  const [receiverError, setReceiverError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [quantityError, setQuantityError] = useState('');

  // 카드 선택 핸들러
  const handleSelectCard = (cardId: number) => {
    setSelectedCardId(cardId);
    const card = cardTemplates.find((c) => c.id === cardId);
    setMessage(card?.defaultTextMessage || '');
  };

  // 전화번호 입력 핸들러
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReceiverPhone(e.target.value);
    if (phoneError) setPhoneError('');
  };

  // 폼 유효성 검사
  const validateForm = (): boolean => {
    let valid = true;

    if (!message.trim()) {
      setMessageError('메시지를 입력해주세요.');
      valid = false;
    } else {
      setMessageError('');
    }

    if (!sender.trim()) {
      setSenderError('이름을 입력해주세요.');
      valid = false;
    } else {
      setSenderError('');
    }

    if (!receiver.trim()) {
      setReceiverError('이름을 입력해주세요.');
      valid = false;
    } else {
      setReceiverError('');
    }

    if (!isValidPhoneNumber(receiverPhone)) {
      setPhoneError('올바른 전화번호 형식이 아닙니다.');
      valid = false;
    } else {
      setPhoneError('');
    }

    if (quantity < 1) {
      setQuantityError('구매 수량은 1개 이상이어야 합니다.');
      valid = false;
    } else {
      setQuantityError('');
    }

    return valid;
  };

  // 주문 제출 핸들러
  const handleOrder = (product: any) => {
    if (!product) return;

    if (!validateForm()) return;

    // 안내 메시지 구성
    const msg = `주문이 완료되었습니다.\n상품명: ${product.name}\n구매 수량: ${quantity}\n발신자 이름: ${sender}\n메시지: ${message}`;
    alert(msg);
    navigate('/');
  };

  return {
    // 폼 데이터
    formData: {
      selectedCardId,
      selectedCard,
      message,
      sender,
      receiver,
      receiverPhone,
      quantity,
    },
    // 에러 상태
    errors: {
      messageError,
      senderError,
      receiverError,
      phoneError,
      quantityError,
    },
    // 핸들러 함수들
    handlers: {
      handleSelectCard,
      handlePhoneChange,
      handleOrder,
      setMessage,
      setSender,
      setReceiver,
      setQuantity: (value: number) => setQuantity(Math.max(1, value)),
    },
  };
};
