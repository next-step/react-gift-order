export const validateEmail = (value: string): string | null => {
  if (!value) return 'ID를 입력해주세요.'
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(value)) return 'ID는 이메일 형식으로 입력해주세요.'
  return null;
};

export const validatePassword = (value: string): string | null => {
  if (!value) return 'PW를 입력해주세요.'
  if (value.length < 8) return 'PW는 최소 8글자 이상이어야 합니다.'
  return null;
};

export const validateName = (value: string): string | null => {
  if (!value) return '이름을 입력해주세요.'
  return null;
}

export const validatePhone = (value: string): string | null => {
  if (!value) return '전화번호를 입력해주세요.'
  const phoneRegex =  /^010\d{8}$/
  if (!phoneRegex.test(value)) return '올바른 전화번호 형식이 아닙니다.'
  return null;
}

export const validateQuantity = (value: string): string | null => {
  const num = Number(value);
  if (!value) return '수량을 입력해주세요.';
  if (isNaN(num) || num < 1) return '수량은 1개 이상이어야 합니다.';
  return null;
};