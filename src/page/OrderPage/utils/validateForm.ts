const phoneNumberRegex = /^010\d{8}$/;

export const validateText = (value: string): string => {
  if (value.trim() === '') {
    return '이름을 입력해주세요.';
  } else {
    return '';
  }
};

export const validateNumber = (value: string): string => {
  if (value.trim() === '') {
    return '전화번호를 입력해주세요.';
  }
  if (!phoneNumberRegex.test(value)) {
    return '올바른 전화번호 형식이 아닙니다.';
  }
  return '';
};

export const validateAmount = (value: number): string => {
  if (value < 1) {
    return '구매 수량은 1개 이상이어야 합니다.';
  }
  return '';
};
