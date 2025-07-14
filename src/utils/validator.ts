const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PW_LEN = 8;
const PHONE_REGEX = /^010\d{8}$/;

export const emailValidator = (value: string): true | string => {
  if (!value.trim()) return 'ID를 입력해주세요.';
  if (!EMAIL_REGEX.test(value)) return 'ID는 이메일 형식으로 입력해주세요.';
  return true;
};

export const passwordValidator = (value: string): true | string => {
  if (!value.trim()) return 'PW를 입력해주세요.';
  if (value.length < PW_LEN) return 'PW는 최소 8글자 이상이어야 합니다.';
  return true;
};

export const messageRequiredValidator = (value: string): true | string =>
  value.trim() !== '' || '메시지를 입력해주세요.';

export const nameRequiredValidator = (value: string): true | string =>
  value.trim() !== '' || '이름을 입력해주세요.';

export const phoneValidator = (value: string): true | string => {
  if (!value.trim()) return '전화번호를 입력해주세요.';
  return PHONE_REGEX.test(value) || '올바른 전화번호 형식이 아닙니다.';
};

export const quantityValidator = (value: string | number): true | string => {
  const num = Number(value);
  if (isNaN(num)) return '수량을 입력해주세요.';
  return num >= 1 || '구매 수량은 1개 이상이어야 합니다.';
};

export const hasDuplicates = (values: string[]): boolean => values.length !== new Set(values).size;

export const isDuplicated = (target: string, values: string[]): boolean =>
  values.filter((v) => v === target).length > 1;
