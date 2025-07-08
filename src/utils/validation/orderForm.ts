export interface ValidationErrors {
  message: string;
  senderName: string;
  receiverName: string;
  receiverPhone: string;
  quantity: string;
}

export const validateMessage = (message: string): string => {
  if (!message.trim()) {
    return '메시지를 입력해주세요.';
  }
  return '';
};

export const validateSenderName = (senderName: string): string => {
  if (!senderName.trim()) {
    return '이름을 입력해주세요.';
  }
  return '';
};

export const validateReceiverName = (receiverName: string): string => {
  if (!receiverName.trim()) {
    return '이름을 입력해주세요.';
  }
  return '';
};

export const validateReceiverPhone = (receiverPhone: string): string => {
  if (!receiverPhone.trim()) {
    return '전화번호를 입력해주세요.';
  }
  const phoneRegex = /^010\d{8}$/;
  if (!phoneRegex.test(receiverPhone)) {
    return '올바른 전화번호 형식이 아닙니다.';
  }
  return '';
};

export const validateQuantity = (quantity: string): string => {
  const quantityNum = parseInt(quantity, 10);
  if (isNaN(quantityNum) || quantityNum < 1) {
    return '수량은 1개 이상이어야 합니다.';
  }
  return '';
};

export const validateOrderForm = (
  message: string,
  senderName: string,
  receiverName: string,
  receiverPhone: string,
  quantity: string
): { isValid: boolean; errors: ValidationErrors } => {
  const errors: ValidationErrors = {
    message: validateMessage(message),
    senderName: validateSenderName(senderName),
    receiverName: validateReceiverName(receiverName),
    receiverPhone: validateReceiverPhone(receiverPhone),
    quantity: validateQuantity(quantity),
  };

  const isValid = !Object.values(errors).some(error => error !== '');

  return { isValid, errors };
};
