const NUM = 8;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const phoneNumberRegex = /^010\d{8}$/;

export const validatePassword = (value: string): string => {
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

type FieldType = 'email' | 'password';
const validators = {
  email: validateEmail,
  password: validatePassword,
} as const;

export const getValidator = (type: FieldType) => {
  return validators[type];
};
