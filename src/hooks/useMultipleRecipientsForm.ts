import { useForm, useFieldArray } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { cardTemplates } from '@/data/cardTemplates';
import {
  validateRecipients,
  createNewRecipient,
  isMaxRecipientsReached,
} from '@/utils';
import type { OrderFormData, Recipient } from '@/types';

export const useMultipleRecipientsForm = () => {
  const navigate = useNavigate();

  // React Hook Form 설정 (다중 받는사람용)
  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
    trigger,
    setError,
    clearErrors,
  } = useForm<OrderFormData>({
    defaultValues: {
      selectedCardId: cardTemplates[0].id,
      message: cardTemplates[0].defaultTextMessage || '',
      sender: '',
      recipients: [],
    },
    mode: 'onChange',
  });

  // 받는사람 배열 관리
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: 'recipients',
  });

  // 현재 폼 값들 watch
  const selectedCardId = watch('selectedCardId');
  const message = watch('message');
  const sender = watch('sender');
  const recipients = watch('recipients');

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

  // 받는사람 추가
  const addRecipient = () => {
    if (isMaxRecipientsReached(recipients)) {
      setError('recipients', {
        type: 'maxLength',
        message: '받는사람은 최대 10명까지 등록 가능합니다.',
      });
      return false;
    }

    const newRecipient = createNewRecipient();
    append(newRecipient);
    clearErrors('recipients');
    return true;
  };

  // 받는사람 제거
  const removeRecipient = (index: number) => {
    remove(index);
    clearErrors('recipients');
  };

  // 받는사람 정보 업데이트
  const updateRecipient = (index: number, recipient: Recipient) => {
    update(index, recipient);
  };

  // 받는사람 정보 일괄 설정
  const setRecipients = (newRecipients: Recipient[]) => {
    setValue('recipients', newRecipients);
    clearErrors('recipients');
  };

  // 전체 폼 유효성 검사
  const validateForm = (): boolean => {
    // 기본 필드 검사
    if (!message.trim()) {
      setError('message', { message: '메시지를 입력해주세요.' });
      return false;
    }

    if (!sender.trim()) {
      setError('sender', { message: '보내는 사람 이름을 입력해주세요.' });
      return false;
    }

    // 받는사람 유효성 검사
    const validation = validateRecipients(recipients);
    if (!validation.isValid) {
      setError('recipients', {
        message: validation.errors.join('\n'),
      });
      return false;
    }

    clearErrors();
    return true;
  };

  // 주문 제출 핸들러
  const handleOrder = async (product: any) => {
    if (!product) return;

    const isFormValid = await trigger();
    const isRecipientsValid = validateForm();

    if (!isFormValid || !isRecipientsValid) return;

    // 총 수량 계산
    const totalQuantity = recipients.reduce(
      (sum, recipient) => sum + recipient.quantity,
      0
    );
    const totalPrice = product.price.sellingPrice * totalQuantity;

    // 안내 메시지 구성
    const recipientList = recipients
      .map((r, i) => `${i + 1}. ${r.name} (${r.phone}) - ${r.quantity}개`)
      .join('\n');

    const msg = `주문이 완료되었습니다.\n상품명: ${product.name}\n보내는 사람: ${sender}\n받는사람 목록:\n${recipientList}\n총 수량: ${totalQuantity}개\n총 가격: ${totalPrice.toLocaleString()}원\n메시지: ${message}`;
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
      recipients: fields,
      totalQuantity: recipients.reduce((sum, r) => sum + (r.quantity || 0), 0),
    },
    // 에러 상태
    errors: {
      messageError: errors.message?.message || '',
      senderError: errors.sender?.message || '',
      recipientsError: errors.recipients?.message || '',
    },
    // 받는사람 관리 함수들
    recipientActions: {
      addRecipient,
      removeRecipient,
      updateRecipient,
      setRecipients,
      canAddMore: !isMaxRecipientsReached(recipients),
      maxReached: isMaxRecipientsReached(recipients),
    },
    // 핸들러 함수들
    handlers: {
      handleSelectCard,
      handleOrder,
      validateForm,
    },
    // React Hook Form 관련
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  };
};
