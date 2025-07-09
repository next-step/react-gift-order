const NUM = 8;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneNumberRegex = /^010\d{8}$/;

const validatePassword = (value: string): string => {
  if (value.trim() === '') {
    return 'PW를 입력해주세요.';
  } else if (value.length < NUM) {
    return `PW는 최소 ${NUM}글자 이상이어야 합니다.`;
  } else {
    return '';
  }
};

const validateEmail = (value: string): string => {
  if (value.trim() === '') {
    return 'ID를 입력해주세요.';
  } else if (!emailRegex.test(value)) {
    return 'ID는 이메일 형식으로 입력해주세요.';
  } else {
    return '';
  }
};

const validateText = (value: string): string => {
  if (value.trim() === '') {
    return '이름을 입력해주세요.';
  } else {
    return '';
  }
};

const validatePhoneNumber = (value: string): string => {
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

type FieldType = 'email' | 'password' | 'text' | 'phoneNumber';
const validators = {
  email: validateEmail,
  password: validatePassword,
  text: validateText,
  phoneNumber: validatePhoneNumber,
  amount: validateAmount,
} as const;

export const getValidator = (type: FieldType) => {
  return validators[type];
};
