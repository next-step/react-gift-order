import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { cardTemplates } from '@/data/cardTemplates';

import type { SingleRecipientFormData } from '@/types';

export const useOrderForm = () => {
  const navigate = useNavigate();

  // React Hook Form 설정
  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    trigger,
  } = useForm<SingleRecipientFormData>({
    defaultValues: {
      selectedCardId: cardTemplates[0].id,
      message: cardTemplates[0].defaultTextMessage || '',
      sender: '',
      receiver: '',
      receiverPhone: '',
      quantity: 1,
    },
    mode: 'onChange',
  });

  // 현재 폼 값들 watch
  const selectedCardId = watch('selectedCardId');
  const message = watch('message');
  const sender = watch('sender');
  const receiver = watch('receiver');
  const receiverPhone = watch('receiverPhone');
  const quantity = watch('quantity');

  // 선택된 카드 정보
  const selectedCard =
    cardTemplates.find((card) => card.id === selectedCardId) ||
    cardTemplates[0];

  // 카드 선택 핸들러
  const handleSelectCard = (cardId: number) => {
    setValue('selectedCardId', cardId);
    const card = cardTemplates.find((c) => c.id === cardId);
    setValue('message', card?.defaultTextMessage || '');
  };

  // 주문 제출 핸들러
  const handleOrder = async (product: any) => {
    if (!product) return;

    const isValid = await trigger();
    if (!isValid) return;

    // 안내 메시지 구성
    const formData = {
      selectedCardId,
      message,
      sender,
      receiver,
      receiverPhone,
      quantity,
    };

    const msg = `주문이 완료되었습니다.\n상품명: ${product.name}\n구매 수량: ${formData.quantity}\n발신자 이름: ${formData.sender}\n메시지: ${formData.message}`;
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
    // 에러 상태 (React Hook Form 형식에 맞게 변환)
    errors: {
      messageError: errors.message?.message || '',
      senderError: errors.sender?.message || '',
      receiverError: errors.receiver?.message || '',
      phoneError: errors.receiverPhone?.message || '',
      quantityError: errors.quantity?.message || '',
    },
    // 핸들러 함수들
    handlers: {
      handleSelectCard,
      handleOrder,
    },
    // React Hook Form 관련
    register,
    control,
    handleSubmit,
  };
};
