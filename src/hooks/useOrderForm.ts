import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReceiver } from '@/contexts/ReceiverContext';
import { z } from 'zod';
import { orders } from '@/data/orders';
import { type RankingItem } from '@/data/ranking';
import { type TextAreaChangeHandler, type InputChangeHandler } from '@/components';

interface CardState {
  selectedCardId: number;
  message: string;
}

interface FormData {
  senderName: string;
}

interface ValidationErrors {
  message: string;
  senderName: string;
}

const orderValidationSchema = z.object({
  message: z.string().min(1, '메시지를 입력해주세요.'),
  senderName: z.string().min(1, '보내는 사람 이름을 입력해주세요.'),
});

interface UseOrderFormProps {
  product?: RankingItem;
}

export const useOrderForm = ({ product }: UseOrderFormProps = {}) => {
  const navigate = useNavigate();
  const { receiverList } = useReceiver();

  const [cardState, setCardState] = useState<CardState>({
    selectedCardId: orders[0]?.id || 904,
    message: orders[0]?.defaultTextMessage || '축하해요.',
  });

  const [formData, setFormData] = useState<FormData>({
    senderName: '',
  });

  const [errors, setErrors] = useState<ValidationErrors>({
    message: '',
    senderName: '',
  });

  const selectedCard = useMemo(() => {
    return orders.find(order => order.id === cardState.selectedCardId);
  }, [cardState.selectedCardId]);

  const clearError = (field: keyof ValidationErrors) => {
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleCardClick = (id: number) => {
    const card = orders.find(order => order.id === id);
    setCardState(prev => ({
      ...prev,
      selectedCardId: id,
      message: card?.defaultTextMessage || prev.message,
    }));
    clearError('message');
  };

  const handleMessageChange: TextAreaChangeHandler = (e) => {
    setCardState(prev => ({
      ...prev,
      message: e.target.value.trim(),
    }));
    clearError('message');
  };

  const handleSenderNameChange: InputChangeHandler = (e) => {
    setFormData(prev => ({
      ...prev,
      senderName: e.target.value.trim(),
    }));
    clearError('senderName');
  };

  const validateForm = (): boolean => {
    if (receiverList.length === 0) {
      alert('받는 사람을 추가해주세요.');
      return false;
    }

    const result = orderValidationSchema.safeParse({
      message: cardState.message,
      senderName: formData.senderName,
    });

    if (!result.success) {
      const newErrors: ValidationErrors = {
        message: '',
        senderName: '',
      };

      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ValidationErrors;
        newErrors[field] = issue.message;
      });

      setErrors(newErrors);
      return false;
    }

    setErrors({ message: '', senderName: '' });
    return true;
  };

  const handleOrder = () => {
    if (validateForm()) {
      const totalQuantity = receiverList.reduce((sum, receiver) => sum + receiver.quantity, 0);
      const receiverNames = receiverList.map(receiver => receiver.name).join(', ');
      
      const orderInfo = `주문이 완료되었습니다.

상품명: ${product?.name || '선택된 상품 없음'}
구매수량: ${totalQuantity}개
발신자이름: ${formData.senderName}
받는사람: ${receiverNames}
메시지: ${cardState.message}`;

      alert(orderInfo);
      navigate('/');
    }
  };

  return {
    cardState,
    formData,
    errors,
    selectedCard,
    handleCardClick,
    handleMessageChange,
    handleSenderNameChange,
    handleOrder,
  };
}; 