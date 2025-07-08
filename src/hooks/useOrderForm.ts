import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { orders } from '@/data/orders';
import { type RankingItem } from '@/data/ranking';
import { 
  type CardState,
  type FormData,
  type ValidationErrors, 
  validateOrderForm 
} from '@/utils/validation/orderForm';

interface UseOrderFormProps {
  product?: RankingItem;
}

export const useOrderForm = ({ product }: UseOrderFormProps = {}) => {
  const navigate = useNavigate();

  const [cardState, setCardState] = useState<CardState>({
    selectedCardId: orders[0]?.id || 904,
    message: orders[0]?.defaultTextMessage || '축하해요.',
  });

  const [formData, setFormData] = useState<FormData>({
    senderName: '',
    receiverName: '',
    receiverPhone: '',
    quantity: '1',
  });

  const [errors, setErrors] = useState<ValidationErrors>({
    message: '',
    senderName: '',
    receiverName: '',
    receiverPhone: '',
    quantity: '',
  });

  const selectedCard = orders.find(order => order.id === cardState.selectedCardId);

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

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCardState(prev => ({
      ...prev,
      message: e.target.value,
    }));
    clearError('message');
  };

  const handleSenderNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      senderName: e.target.value,
    }));
    clearError('senderName');
  };

  const handleReceiverNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      receiverName: e.target.value,
    }));
    clearError('receiverName');
  };

  const handleReceiverPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      receiverPhone: e.target.value,
    }));
    clearError('receiverPhone');
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      quantity: e.target.value,
    }));
    clearError('quantity');
  };

  const validateForm = (): boolean => {
    const { isValid, errors: validationErrors } = validateOrderForm(
      cardState.message,
      formData.senderName,
      formData.receiverName,
      formData.receiverPhone,
      formData.quantity
    );
    
    setErrors(validationErrors);
    return isValid;
  };

  const handleOrder = () => {
    if (validateForm()) {
      const orderInfo = `주문이 완료되었습니다.

상품명: ${product?.name || '선택된 상품 없음'}
구매수량: ${formData.quantity}개
발신자이름: ${formData.senderName}
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
    handleReceiverNameChange,
    handleReceiverPhoneChange,
    handleQuantityChange,
    handleOrder,
  };
}; 