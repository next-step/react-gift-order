import { useDeferredValidationInput } from './useDeferredValidation';

const validateName = (value: string) => {
  if (!value.trim()) return '이름을 입력해주세요.';
  if (!/^[가-힣a-zA-Z]{2,}$/.test(value)) return '2자 이상 한글 또는 영어만 입력해주세요.';
  return '';
};

const validatePhone = (value: string) => {
  if (!value.trim()) return '전화번호를 입력해주세요.';
  if (!/^\d{10,11}$/.test(value)) return '올바른 전화번호 형식이 아닙니다.';
  return '';
};

export const useOrderForm = () => {
  const senderName = useDeferredValidationInput(validateName);
  const receiverName = useDeferredValidationInput(validateName);
  const receiverPhoneNumber = useDeferredValidationInput(validatePhone);

  return {
    senderName,
    receiverName,
    receiverPhoneNumber,
  };
};
