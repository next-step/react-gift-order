import { useInputWithValidation } from './useInputValidation';

const validateName = (value: string) => {
  if (!value.trim()) return '이름을 입력해주세요';

  return '';
};

const validatePhoneNum = (value: string) => {
  if (!value) return '전화번호를 입력해주세요';
  const phoneRegex = /^010[0-9]{8}$/;
  return phoneRegex.test(value)
    ? ''
    : '올바른 전화번호 형식이 아닙니다.';
};

const validateQuantity = (value: string) => {
  const num = Number(value);
  if (num < 1) return '구매 수량은 1개 이상이어야 합니다.';
  return '';
};

export const useReceiverForm = () => {
  const nameInput = useInputWithValidation('', validateName);
  const receiverPhoneInput = useInputWithValidation(
    '',
    validatePhoneNum
  );
  const quantityInput = useInputWithValidation('', validateQuantity);

  const isReceiverFormValid =
    nameInput.isValid &&
    receiverPhoneInput.isValid &&
    quantityInput.isValid;

  return {
    nameInput,
    receiverPhoneInput,
    quantityInput,
    isReceiverFormValid,
  };
};
